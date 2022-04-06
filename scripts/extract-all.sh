#!/usr/bin/env bash
set -e

if [ $# -eq 0 ]; then
    echo "Error: no app directory name provided"
    exit 1
fi

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(realpath "$(dirname "${SCRIPT_RELATIVE_DIR}")")

allLanguages=("ar" "de" "en" "es" "esla" "fr" "it" "ja" "ko" "pl" "pt" "ru" "tr" "zhcn" "zhtw")
messages_path="${PROJECT_ROOT}/src/apps/$1/locales"
app_path="${PROJECT_ROOT}/src/apps/$1"

for language in "${allLanguages[@]}"
do
  yarn formatjs extract "${app_path}/**/*.tsx" "${app_path}/**/*.ts" "${app_path}/**/*.jsx" "${app_path}/**/*.js" --out-file ${messages_path}/extractedStrings/${language}.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' \;
done
