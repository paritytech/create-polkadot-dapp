import { contracts } from "contracts";
import { ethersProvider } from "./ethersProvider";
import { StoreNumber } from "./components/StoreNumber";
import { AddMoney } from "./components/AddMoney";
import "./App.css";

import polkadotLogo from "./assets/polkadot-logo.svg";
import { useNetworkData } from "./hooks/useNetworkData";

function App() {
  const contractData = contracts["1b5b93a223026219f4f75e5b90c20970ab976451"];
  const { storedValue, balance, chainId } = useNetworkData(contractData);

  return (
    <>
      <img src={polkadotLogo} className="mx-auto h-52	p-4 logo" alt="Polkadot logo" />
      {ethersProvider ? (
        <div className="container mx-auto p-2 leading-6">
          <h2 className="text-2xl font-bold">Success!</h2>
          <p>Metamask wallet installed.</p>
          <p>
            Connected to chain ID: <span className="font-bold">{chainId}</span>
          </p>
          <p>
            Value stored on smart contract: <span className="font-bold">{storedValue}</span>
          </p>
          <p>
            Smart contract balance: <span className="font-bold">{balance}</span>
          </p>
          <div className="border rounded-md my-5 p-2 w-full align-top">
            <h3 className="font-bold text-lg">Transactions</h3>
            <div className="w-full grid grid-cols-2">
              <StoreNumber contractData={contractData} />
              <AddMoney contractData={contractData} />
            </div>
          </div>

        </div>
      ) : (
        <div className="container mx-auto p-2 leading-6">
          Metamask wallet not installed. Chain interaction is disabled.
        </div>
      )}
    </>
  );
}

export default App;