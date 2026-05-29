import { readFileSync, writeFileSync } from "fs";

try {
  const snapshotPath = "./src/generated/site-content-snapshot.ts";
  const fileContent = readFileSync(snapshotPath, "utf8");

  const startMarker = "SITE_CONTENT_BUILD_SNAPSHOT = ";
  const startIndex = fileContent.indexOf(startMarker) + startMarker.length;
  const endIndex = fileContent.lastIndexOf("} as const;");

  if (startIndex === -1 || endIndex === -1) {
    throw new Error("Could not parse the build snapshot file structure.");
  }

  // Extract the JSON object content
  const jsonString = fileContent.slice(startIndex, endIndex + 1).trim();
  
  // Parse and re-serialize to verify it's valid JSON
  const parsed = JSON.parse(jsonString);

  writeFileSync(
    "./public/stemise-site-content-update.json",
    JSON.stringify(parsed, null, 2),
    "utf8"
  );
  console.log("Successfully created JSON update package at ./public/stemise-site-content-update.json");
} catch (error) {
  console.error("Failed to generate JSON backup:", error);
  process.exit(1);
}
