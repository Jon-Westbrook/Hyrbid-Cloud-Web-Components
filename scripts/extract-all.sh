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

FG_C='\033[1;37m'
WBG_C='\033[43m'
NO_C='\033[0m'
echo -e ""
echo -e "${FG_C}${WBG_C}                                                     ${NO_C}"
echo -e "${FG_C}${WBG_C}          ALL MESSAGES WILL BE OVERWRITTEN           ${NO_C}"
echo -e "${FG_C}${WBG_C}      Make sure to check git to see the changes      ${NO_C}"
echo -e "${FG_C}${WBG_C}                                                     ${NO_C}"
echo -e ""

for language in "${allLanguages[@]}"
do
  yarn formatjs extract "${app_path}/**/*.tsx" "${app_path}/**/*.ts" "${app_path}/**/*.jsx" "${app_path}/**/*.js" --out-file ${messages_path}/extractedStrings/${language}.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' \;
done
