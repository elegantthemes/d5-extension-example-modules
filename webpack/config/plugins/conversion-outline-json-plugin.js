/* eslint-disable class-methods-use-this */
const jscodeshift = require("jscodeshift");
const fs = require("fs");
const fsp = fs.promises;
const path = require("path");
const glob = require("glob");
const extractStaticProperties = require("./extract-static-properties");

/**
 * Webpack plugin that generates a `conversion-outline.json` file from `conversion-outline.ts` files.
 *
 * It looks for a variable named `conversionOutline`, extracts its properties,
 * compiles them into a JSON format, and then generates `conversion-outline.json` in the same directory.
 */
class ConversionOutlineJsonPlugin {
  /**
   * Hook into the Webpack compiler.
   *
   * @param {object} compiler Webpack compiler.
   */
  apply(compiler) {
    /**
     * Tap into the `beforeCompile` hook of the Webpack compiler.
     */
    compiler.hooks.beforeCompile.tapAsync(
      "ConversionOutlineJsonPlugin",
      (params, callback) => {
        const searchPattern =
          "src/components/**/conversion-outline.ts";

        // Use the `glob` package to search for `conversion-outline.ts` files.
        try {
          const files = glob.sync(searchPattern);

          // Process all files concurrently with Promise.all to avoid race conditions
          Promise.all(
            files.map(async (fullFilePath) => {
              try {
                // Read the TypeScript source file
                const source = await fsp.readFile(fullFilePath, "utf8");

                // Parse the TypeScript source into an AST using jscodeshift
                const root = jscodeshift.withParser("ts")(source);

                // Find variable declarations named `conversionOutline`
                const outlineCollection = root
                  .find(jscodeshift.VariableDeclarator)
                  .filter(
                    (astPath) => astPath.value.id.name === "conversionOutline"
                  );

                // If no relevant variable declaration is found, skip this file
                if (0 === outlineCollection.size()) {
                  return;
                }

                // Extract the static properties of the `conversionOutline` variable
                const conversionOutlineProperties = extractStaticProperties(
                  outlineCollection.get().node.init.properties
                );

                // Prepare the JSON content
                const conversionOutlineJson = {
                  _comment:
                    "!!! THIS IS AN AUTOMATICALLY GENERATED FILE - DO NOT EDIT !!!",
                  ...conversionOutlineProperties,
                };

                const jsonContent = JSON.stringify(
                  conversionOutlineJson,
                  null,
                  2
                );
                const outputPath = path.join(
                  path.dirname(fullFilePath),
                  "conversion-outline.json"
                );

                // Write the JSON content to a `conversion-outline.json` file in the same directory
                await fsp.writeFile(outputPath, jsonContent);
              } catch (fsError) {
                // Propagate error to Promise.all
                throw fsError;
              }
            })
          )
            .then(() => {
              // Continue with the build process
              callback();
            })
            .catch((error) => {
              callback(error);
            });
        } catch (error) {
          callback(error);
        }
      }
    );
  }
}

module.exports = ConversionOutlineJsonPlugin;