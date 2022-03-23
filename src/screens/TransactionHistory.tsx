import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function TransactionHistory() {
  const { type } = useParams();
  console.log(type, "type");

  const [balance, setbalance] = useState(0);
  const [transactions, settransactions] = useState<any[] | null>(null);
  const [pagenumber, setpagenumber] = useState(1);
  const [loading, setloading] = useState<boolean>(true);

  const { walletAddress } = useSelector((state: any) => state.wallet);
  const blockNumber = useSelector((state: any) => state.block.blockNumbers);

  const apiURL = type === "matic" ? "api.polygonscan.com" : "api.etherscan.io";

  const API = `https://${apiURL}/api?module=account`;
  const apiKey =
    type === "matic"
      ? "JZE7N6P9FJQT2IPGZRUBV6JGQXA57FSZ71"
      : "G8NCNPZTFXSY1MX63DQ9ZNQGXNXAA94BZJ";

  useEffect(() => {
    // 0x00000000219ab540356cBB839Cbe05303d7705Fa
    axios
      .get(
        `${API}&action=txlist&address=${walletAddress}&startblock=${blockNumber}&page=${pagenumber}&offset=5&sort=desc&apikey=${apiKey}`
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
        `${API}&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`
      )
      .then((res: any) => {
        setbalance(res.data.result / Math.pow(10, 18));
      });
      setloading(false);
  }, [pagenumber]);

  if (!loading) {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen bg-zinc-100">
        {balance && (
          <p className="text-3xl my-8 font-semibold ">
            {` Balance: ${balance} 
          ${type?.toUpperCase()}`}
          </p>
        )}
        {transactions ? (
          <div className="w-1/3 flex justify-around">
            <button
              className="bg-stone-700 text-white flex items-center justify-center px-10 py-2 rounded-md border-stone-700 border-2 transition-all duration-500 ease-in-out hover:text-black hover:bg-zinc-100 hover:border-solid hover:border-stone-700 hover:border-2"
              onClick={() =>
                pagenumber > 1
                  ? setpagenumber(pagenumber - 1)
                  : alert("Already present on first page. Cant go back")
              }
            >
              Previous
            </button>
            <button
              className="bg-stone-700 text-white flex items-center justify-center px-10 py-2 rounded-md border-stone-700 border-2 transition-all duration-500 ease-in-out hover:text-black hover:bg-zinc-100 hover:border-solid hover:border-stone-700 hover:border-2"
              onClick={() => setpagenumber(pagenumber + 1)}
            >
              Next
            </button>
          </div>
        ) : (
          <div>No transactions found</div>
        )}
        {transactions && (
          <ul className="w-1/2 flex flex-col justify-center items-center">
            {transactions?.map((transaction: any) => {
              return (
                <li
                  className="my-5 bg-blue-100 w-full flex flex-col items-center justify-center rounded-md py-5"
                  key={transaction.hash}
                >
                  <p className="font-bold">Txn Hash : {transaction.hash}</p>
                  <p>
                    Date :{" "}
                    {moment(parseInt(transaction.timeStamp) * 1000).format(
                      "DD-MM-YYYY"
                    )}
                  </p>
                  <p className="font-semibold">
                    Txn Value : {parseInt(transaction.value) / Math.pow(10, 18)}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen bg-zinc-100">
        <p>Loading</p>
      </div>
    );
  }
}

export default TransactionHistory;
