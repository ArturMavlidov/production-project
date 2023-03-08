import { RuleSetRule } from "webpack";
import path from "path";
import { WebpackConfiguration } from "webpack-dev-server";

import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders";

export default ({ config }: { config: WebpackConfiguration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  // @ts-ignore
  // eslint-disable-next-line
  config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg/i };
    }

    return rule;
  });

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const cssLoader = buildCssLoader(true);

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  // eslint-disable-next-line
  config.module!.rules?.push(svgLoader);
  config.module!.rules?.push(cssLoader);

  return config;
};
