#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "$(dirname "${SCRIPT_RELATIVE_DIR}")")
TEMP_DIR=$(mktemp --directory)
mkdir --parents "${TEMP_DIR}/static"

# Find all the folders with the name "public" and copy them to the temporary directory.
while IFS= read -r -d $'\0' directory; do
  # From /path/to/src/apps/my-widget/public to ${TEMP_DIR}/static/my-widget
  destination=$(echo "${directory}" |sed -e 's:.*/apps/::g' -e 's:/public::g')
  cp --recursive "$directory" "$TEMP_DIR/static/$destination"
done < <(find "$PROJECT_ROOT/src/apps" -maxdepth 2 -mindepth 1 -type d -name public -print0)

find "${TEMP_DIR}" -type f
source "${PROJECT_ROOT}/scripts/ci/upload-to-cos.sh" "${TEMP_DIR}"

rm --recursive --force "${TEMP_DIR}"
