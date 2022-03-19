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
    <div>
      <input placeholder="Enter wallet address" onChange={(e: any) => setwallet(e.target.value)} />
      <input placeholder="Enter Block Number" onChange={(e: any) => setblock(e.target.value)} />
      <Link to={'/selectType'} >
        <button
          onClick={() => {
            dispatch(setBlockNumbers(block));
            dispatch(setWalletAddress(wallet));
          }}
        >
          testying
        </button>
      </Link>
    </div>
  );
}

export default Home;
