import { TemplateConfig, TemplateType } from "#src/types";
import { colors as c } from "#src/util/log";

const config: TemplateConfig = {
  templateType: TemplateType.Recommended,
  description: "ParaSpell XCM Router template (external git)",
  npmRoots: ["/"],
  gitUrl: "https://github.com/paraspell/xcm-router-template.git",
  instructions: `\n${c.secondary("Start app:")}\n${c.code("npm run dev")}`,
};

export default config;
