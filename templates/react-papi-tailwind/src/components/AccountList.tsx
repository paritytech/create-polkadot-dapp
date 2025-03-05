import { useAccounts } from "@reactive-dot/react";
import { getWalletMetadata } from "dot-connect";

function AccountInfo({ address, name, wallet }: { address: string; name?: string; wallet: string }) {
  return (
    <div className="md container my-2 grid grid-cols-2 rounded-sm border p-2">
      <div className="static text-left text-lg font-bold">{name}</div>
      <div className="static text-right font-light">{wallet}</div>
      <div className="static col-span-2 text-left">{address}</div>
    </div>
  );
}

export function AccountList() {
  const accounts = useAccounts();

  if (accounts.length === 0) {
    return <></>;
  }

  return (
    <div>
      <h3 className="text-left text-lg font-bold">Connected accounts:</h3>
      <ul>
        {accounts.map((account, index) => {
          const walletMeta = getWalletMetadata(account.wallet);
          const walletName = walletMeta?.name ?? account.wallet.name;

          return (
            <li key={index}>
              <AccountInfo address={account.address} name={account.name} wallet={walletName} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
