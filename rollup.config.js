import css from "rollup-plugin-import-css";
//import typescript from "rollup-plugin-typescript2";
import renameExtensions from "@betit/rollup-plugin-rename-extensions";
import cleaner from "rollup-plugin-cleaner";
//import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";
export default {
  input: "./src/main.js",
  output: {
    format: "esm", // This is what tells rollup to use ES6 modules
    dir: "dist",
  },
  external: ["vue", "vue-class-component"],
  plugins: [
    cleaner({ targets: ["dist"] }),
    //commonjs(),
    //typescript({ rollupCommonJSResolveHack: true, clean: true }),
    // This extension renames all .vue and .ts to .js
    // (and updates the imports)
    renameExtensions({
      include: ["**/*.ts", "**/*.vue"],
      mappings: { ".vue": ".vue.js", ".ts": ".js" },
    }),
    vue(),
    css(),
  ],
  // Prevents bundling, but doesn"t rename files
  preserveModules: true,
};
