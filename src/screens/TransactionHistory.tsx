import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";

function TransactionHistory() {

  const [balance, setbalance] = useState(0);
  const [transactions, settransactions] = useState<any[] | null>(null);

  const { walletAddress } = useSelector((state: any) => state.wallet);
    const  blockNumber  = useSelector((state: any) => state.block.blockNumbers);

  const ETH_API = "https://api.etherscan.io/api?module=account";
  const apiKey = "G8NCNPZTFXSY1MX63DQ9ZNQGXNXAA94BZJ";

  useEffect(() => {
    // 0x00000000219ab540356cBB839Cbe05303d7705Fa
    axios
      .get(
        `${ETH_API}&action=txlist&address=${walletAddress}&startblock=${blockNumber}&page=1&offset=10&sort=asc&apikey=${apiKey}`
      )
      .then((res: any) => {
        console.log("yes", res.data.result);
        if (res.data.message === "OK") {
          settransactions(res.data.result);
        }
      })
      .catch((err: any) => {
        console.log("err", err);
      });

    axios
      .get(
        `${ETH_API}&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`
      )
      .then((res: any) => {
        setbalance(res.data.result / Math.pow(10, 18));
      });
  }, [walletAddress, blockNumber]);

  return (
    <div>
      {balance && <h1>Balance: {balance}</h1>}
      {transactions && (
        <ul>
          {transactions?.map((transaction: any) => {
            return (
              <li key={transaction.hash}>
                <h3>{transaction.hash}</h3>
                <p>{moment(parseInt(transaction.timeStamp)).format("DD MM YYYY")}</p>
                <p>{parseInt(transaction.value)/Math.pow(10,18)}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default TransactionHistory;
