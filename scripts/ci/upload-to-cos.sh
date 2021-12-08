#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "$(dirname "${SCRIPT_RELATIVE_DIR}")")

echo "Name of the script: $0"
echo "Total number of arguments: $#"
echo "Values of all the arguments: $@"
# Set root dir.
if [ -d "$1" ]
then
  ROOT_DIR=$1;
else
  echo "Invalid directory to upload. Provided: $1";
  exit 1;
fi

source "${PROJECT_ROOT}/scripts/ci/set-up-cos-environment.sh"

# The list of compressed extensions should match the one in .widgetRegistry/main.js
compressedExtensions='\.\(js\|css\|svg\)$'
# Upload uncompressed files to the bucket.
while IFS= read -r file; do
  echo -en "Uploading $file 🔼"
  ibmcloud cos upload --bucket "${IBMCLOUD_COS_BUCKET}" --key "${file}" --file "${ROOT_DIR}/${file}";
  echo -e "\033[2K"
  echo -e "Uploaded $file 🏁"
done < <(find "${ROOT_DIR}" -type f -printf "%P\n" |grep -v $compressedExtensions)

# Upload compressed files to the bucket.
while IFS= read -r file; do
  echo -en "Uploading compressed brotli $file 🥦"
  ibmcloud cos upload --content-encoding br --bucket "${IBMCLOUD_COS_BUCKET}" --key "${file}" --file "${ROOT_DIR}/${file}";
  echo -e "\033[2K"
  echo -e "Uploaded $file 🏁"
done < <(find "${ROOT_DIR}" -type f -printf "%P\n" |grep $compressedExtensions)
