import { TemplateConfig } from "#src/types";

import reactPapiTailwind from "./react-papi-tailwind";
import reactSolidityHardhat from "./react-solidity-hardhat";
import reactSolidityRemix from "./react-solidity-remix";
import xcmSdk from "./xcm-sdk";
import xcmRouter from "./xcm-router";
import xcmApi from "./xcm-api";

export const configs: Record<string, TemplateConfig> = {
  "react-papi-tailwind": reactPapiTailwind,
  "react-solidity-hardhat": reactSolidityHardhat,
  "react-solidity-remix": reactSolidityRemix,
  "xcm-sdk": xcmSdk,
  "xcm-router": xcmRouter,
  "xcm-api": xcmApi,
};

export type TemplateNames = keyof typeof configs;
export const availableTemplates = Object.keys(configs);
