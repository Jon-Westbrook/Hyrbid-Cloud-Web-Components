#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "$(dirname "${SCRIPT_RELATIVE_DIR}")")
TEMP_DIR=$(mktemp --directory)
mkdir --parents "${TEMP_DIR}/translations"

# Find all the folders with the name "compiledStrings" and copy them to the temporary directory.
while IFS= read -r -d $'\0' directory; do
  # From /path/to/src/apps/my-widget/locales/compiledStrings/es.json to ${TEMP_DIR}/translations/my-widget/es.json
  destination=$(echo "${directory}" |sed -e 's:.*/apps/::g' -e 's:/locales/compiledStrings::g')
  cp --recursive "$directory" "$TEMP_DIR/translations/$destination"
done < <(find "$PROJECT_ROOT" -type d -name compiledStrings -print0)

find "${TEMP_DIR}" -type f
"./delete-from-cos.sh" '^"translations/' && \
"./upload-to-cos.sh" "${TEMP_DIR}"

rm --recursive --force "${TEMP_DIR}"
