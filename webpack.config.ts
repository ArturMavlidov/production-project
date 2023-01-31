import path from "path";
import { BuildEnv, BuildPaths } from "./config/build/types/config";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  };

  const PORT = env.port || 3000;
  const mode = env.mode || "development";

  const isDev = mode === "development";

  const config: Configuration = buildWebpackConfig({
    mode,
    paths: {
      entry: paths.entry,
      build: paths.build,
      html: paths.html,
    },
    port: PORT,
    isDev,
  });

  return config;
};
