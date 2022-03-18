import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [walletAddress, setwalletAddress] = useState<string>();
  const [blockNumber, setblockNumber] = useState(0);
  const [balance, setbalance] = useState(0);
  const [transactions, settransactions] = useState<any[] | null>(null);

  const ETH_API = "https://api.etherscan.io/api?module=account";
  const apiKey = "G8NCNPZTFXSY1MX63DQ9ZNQGXNXAA94BZJ";

  useEffect(() => {
    // 0x00000000219ab540356cBB839Cbe05303d7705Fa
    axios
      .get(
        `${ETH_API}&action=txlist&address=${walletAddress}&startblock=${blockNumber}&page=20&offset=10&sort=asc&apikey=${apiKey}`
      )
      .then((res: any) => {
        console.log('yes',res)
        settransactions(res.data.result);
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
      <input
        placeholder="Enter Wallet Address"
        onChange={(e: any) => {
          setwalletAddress(e.target.value);
        }}
      />
      <input
        placeholder="Enter Block Number"
        onChange={(e) => {
          setblockNumber(parseInt(e.target.value));
        }}
      />
      {balance && <h1>Balance: {balance}</h1>}
      {/* {transactions && (
        <ul>
          {transactions?.map((transaction: any) => {
            return (
              <li key={transaction.blockHash}>
                <h3>{transaction.hash}</h3>
                <p>{transaction.timeStamp}</p>
                <p>{transaction.value}</p>
              </li>
            );
          })}
        </ul>
      )} */}
    </div>
  );
}

export default Home;
