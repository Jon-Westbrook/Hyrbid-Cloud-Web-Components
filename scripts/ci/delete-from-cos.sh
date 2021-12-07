#!/usr/bin/env bash
set -e

echo "Name of the script: $0"
echo "Total number of arguments: $#"
echo "Values of all the arguments: $@"
# Set key prefix.
KEY_REGEXP=$1;

# Login and configure connection to IBM Cloud COS.
ibmcloud login --no-region;
ibmcloud cos config crn --crn "${IBMCLOUD_STORAGE_CRN}";
ibmcloud cos config region --region "${IBMCLOUD_COS_REGION:us-geo}";

# Upload to the bucket.
keys=$(while read -r key; do
  echo -n "{Key=$key},"
done < <(ibmcloud cos objects --bucket "${IBMCLOUD_COS_BUCKET}" --output json |jq '.Contents[] .Key' |grep "${KEY_REGEXP}")) || ""
ibmcloud cos objects-delete --bucket "${IBMCLOUD_COS_BUCKET}" --delete "Objects=[$(echo $keys |sed -e 's:,$::g')],Quiet=false" --output json
