import { Link } from "react-router-dom";

function SelectChain() {
  return (
    <div className="bg-zinc-100 min-h-screen font-sans min-w-full flex flex-col justify-center items-center">
      <p className="text-5xl text-center pt-5 font-bold mb-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-violet-500">Select Chain</p>
      <div className="w-2/5 flex justify-around">
        <Link to={`/transactionHistory/eth`}>
          <a>
            <div className=" hover:scale-90 transition-all duration-500 ease-in-out flex flex-row justify-evenly align-center bg-neutral-800 items-center h-16 px-8 rounded-xl w-56 ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg"
                className="w-5 h-8 mr-2"
              />
              <p className="text-white font-semibold text-xl">Ethereum</p>
            </div>
          </a>
        </Link>
        <Link to={"/transactionHistory/matic"}>
          <a>
            <div className="hover:scale-90 transition-all duration-500 ease-in-out flex flex-row justify-evenly align-center bg-violet-900 items-center h-16 px-8 rounded-xl w-56 ">
              <img
                src="https://cryptologos.cc/logos/polygon-matic-logo.png"
                className="w-9 h-8 mr-2"
              />
              <p className="text-white font-semibold text-xl">Polygon</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SelectChain;
