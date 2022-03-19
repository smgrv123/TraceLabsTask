import { Link } from "react-router-dom";

function SelectChain() {
  return (
    <div>
      <Link to={`/transactionHistory/eth`}>
        <div>Etherium</div>
      </Link>
      <Link to={"/transactionHistory/matic"}>
        <div>Polygon(matic)</div>
      </Link>
    </div>
  );
}

export default SelectChain;
