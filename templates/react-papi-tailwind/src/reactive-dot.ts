import { polkadot, paseo, polkadot_asset_hub, paseo_asset_hub } from "@polkadot-api/descriptors";
import { defineConfig } from "@reactive-dot/core";
import { createLightClientProvider } from "@reactive-dot/core/providers/light-client.js";
import { InjectedWalletProvider } from "@reactive-dot/core/wallets.js";
import { LedgerWallet } from "@reactive-dot/wallet-ledger";
import { PolkadotVaultWallet } from "@reactive-dot/wallet-polkadot-vault";
// import { WalletConnect } from "@reactive-dot/wallet-walletconnect";
import { registerDotConnect } from "dot-connect";

const lightClientProvider = createLightClientProvider();

const polkadotChain = lightClientProvider.addRelayChain({ id: "polkadot" });
const polkadotAHChain = polkadotChain.addParachain({ id: "polkadot_asset_hub" });

const paseoChain = lightClientProvider.addRelayChain({ id: "paseo" });
const paseoAHChain = paseoChain.addParachain({ id: "paseo_asset_hub" });

export const config = defineConfig({
  chains: {
    polkadot: {
      descriptor: polkadot,
      provider: polkadotChain,
    },
    polkadot_asset_hub: {
      descriptor: polkadot_asset_hub,
      provider: polkadotAHChain,
    },
    paseo: {
      descriptor: paseo,
      provider: paseoChain,
    },
    paseo_asset_hub: {
      descriptor: paseo_asset_hub,
      provider: paseoAHChain,
    },
  },
  wallets: [
    new InjectedWalletProvider(),
    new LedgerWallet(),
    new PolkadotVaultWallet(),
    // Uncomment to configure WalletConnect.
    //new WalletConnect({
    //  projectId: "WALLET_CONNECT_PROJECT_ID",
    //  providerOptions: {
    //    metadata: {
    //      name: "APP_NAME",
    //      description: "APP_DESCRIPTION",
    //      url: "APP_URL",
    //      icons: ["APP_ICON"]
    //    }
    //  },
    //  // https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-13.md
    //  chainIds: [
    //    "polkadot:91b171bb158e2d3848fa23a9f1c25182" // Polkadot
    //  ],
    //  optionalChainIds: [
    //    "polkadot:91b171bb158e2d3848fa23a9f1c25182", // Polkadot
    //    "polkadot:b0a8d493285c2df73290dfb7e61f870f", // Kusama
    //    "polkadot:77afd6190f1554ad45fd0d31aee62aac", // Paseo
    //    "polkadot:e143f23803ac50e8f6f8e62695d1ce9e" // Westend
    //  ]
    //})
  ],
});

declare module "@reactive-dot/core" {
  export interface Register {
    config: typeof config;
  }
}

registerDotConnect(config);
