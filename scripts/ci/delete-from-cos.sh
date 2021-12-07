#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "$(dirname "${SCRIPT_RELATIVE_DIR}")")

echo "Name of the script: $0"
echo "Total number of arguments: $#"
echo "Values of all the arguments: $@"
# Set key prefix.
KEY_REGEXP=$1;

source "${PROJECT_ROOT}/scripts/ci/set-up-cos-environment.sh"

# Upload to the bucket.
keys=$(while read -r key; do
  echo -n "{Key=$key},"
done < <(ibmcloud cos objects --bucket "${IBMCLOUD_COS_BUCKET}" --output json |jq '.Contents[] .Key' |grep "${KEY_REGEXP}")) || ""
if [ -n "${keys}" ];
then
  echo "Nothing to delete. 🧹"
else
  structure="Objects=[$(echo $keys |sed -e 's:,$::g')],Quiet=false"
  echo "Sending to COS for deletion: ${structure}"
  ibmcloud cos objects-delete --bucket "${IBMCLOUD_COS_BUCKET}" --delete "${structure}" --output json
fi;
