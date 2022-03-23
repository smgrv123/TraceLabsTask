import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWalletAddress } from "../redux/walletSlice";
import { setBlockNumbers } from "../redux/blockSlice";
import { Link } from "react-router-dom";

function Home() {
  const [wallet, setwallet] = useState<string>();
  const [block, setblock] = useState<string>();

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center h-96 items-center min-h-screen">
      <p className="text-5xl text-center pt-5 font-bold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-violet-500">
        Etherscan Clone
      </p>

      <div className="flex flex-col items-center place-items-center justify-around h-48 self-center min-w-full place-self-center">
        <input
          className="placeholder:text-slate-400 py-2 pl-5 pr-3 focus:outline-none w-1/3 border-blue-900 border-b-2 bg-zinc-100 focus:bg-white"
          placeholder="Enter Wallet Address"
          onChange={(e: any) => setwallet(e.target.value)}
        />
        <input
          className="placeholder:text-slate-400 block py-2 pl-5 pr-3 w-1/3 focus:outline-none border-blue-900 border-b-2 bg-zinc-100 focus:bg-white"
          placeholder="Enter Block Number"
          onChange={(e: any) => setblock(e.target.value)}
        />
        <Link to={"/selectType"}>
          <button
            className=" bg-blue-900 text-white flex items-center justify-center px-10 py-2 rounded-md border-blue-900 border-2 transition-all duration-500 ease-in-out hover:text-black hover:bg-zinc-100 hover:border-solid hover:border-blue-900 hover:border-2"
            disabled={!wallet || !block}
            onClick={() => {
              dispatch(setBlockNumbers(block));
              dispatch(setWalletAddress(wallet));
            }}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
