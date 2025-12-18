export enum TemplateType {
  Recommended,
  Deprecated,
  // TODO: External
}

export type TemplateConfig = {
  instructions: string;
  npmRoots: string[];
  postinstallScript?: string;
  templateType: TemplateType;
  description: string;
  // If provided, the template will be cloned from this git URL
  gitUrl?: string;
  // If the template lives in a subdirectory of the repo, specify it here (relative path from repo root)
  gitSubdir?: string;
  // Optional ref (branch/tag/commit) to checkout after cloning
  gitRef?: string;
};
