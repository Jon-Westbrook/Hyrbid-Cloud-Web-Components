#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "${SCRIPT_RELATIVE_DIR}")

while IFS= read -r -d $'\0' file; do
  echo -ne "⏳ Compiling translations for ${file}."
  yarn formatjs compile "$file" --ast --out-file "${file//extractedStrings/compiledStrings}" > /dev/null
  echo -e "\033[2K"
  echo -e "✅ Successfully compiled translations for ${file}."
done < <(find "${PROJECT_ROOT}/src/apps/" -type d -name extractedStrings -exec find {} -mindepth 1 -type f -print0 -name "*.json" \;)
