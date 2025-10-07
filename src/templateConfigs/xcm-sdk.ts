import { TemplateConfig, TemplateType } from "#src/types";
import { colors as c } from "#src/util/log";

const config: TemplateConfig = {
  templateType: TemplateType.Recommended,
  description: "ParaSpell XCM SDK template (external git)",
  npmRoots: ["/"],
  gitUrl: "https://github.com/paraspell/xcm-sdk-template.git",
  // If they host in root; adjust gitSubdir if needed later
  instructions: `\n${c.secondary("Start app:")}\n${c.code("npm run dev")}`,
};

export default config;
