#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(realpath "$(dirname "${SCRIPT_RELATIVE_DIR}")")

find "${PROJECT_ROOT}/src/apps" -maxdepth 1 -mindepth 1 -type d \
  -exec yarn formatjs extract "{}/**/*.ts*" --out-file {}/locales/extractedStrings/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' \;
