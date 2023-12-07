import React, { useState } from "react";
import { initiateTransaction } from "../immutable";

export default function Transaction() {
  const [transactionHash, setTransactionHash] = useState(null);
  const [loading, setLoading] = useState(false);

  // TODO: handle Transaction
  
  return (
    <>
      <button onClick={handleTransaction}>
        {loading ? "Loading..." : "🚀 Initiate a Test Transaction 🚀"}
      </button>
      {transactionHash && <p>Transaction Hash: <br/>
        <a 
          target="_blank"
          href={`https://explorer.testnet.immutable.com/tx/${transactionHash}`}>
          {`${transactionHash}`}
        </a></p>
      }
    </>
  );
}
