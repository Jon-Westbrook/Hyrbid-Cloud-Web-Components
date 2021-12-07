#!/usr/bin/env bash
set -e

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

# Login and configure connection to IBM Cloud COS.
ibmcloud login --no-region;
ibmcloud cos config crn --crn "${IBMCLOUD_STORAGE_CRN}";
ibmcloud cos config region --region "${IBMCLOUD_COS_REGION:us-geo}";

# Upload to the bucket.
while IFS= read -r file; do
  echo -en "Uploading $file 🔼"
  ibmcloud cos upload --bucket "${IBMCLOUD_COS_BUCKET}" --key "${file}" --file "${ROOT_DIR}/${file}";
  echo -e "\033[2K"
  echo -e "Uploaded $file 🏁"
done < <(find "${ROOT_DIR}" -type f -printf "%P\n" |grep -v '\.br$')

# Upload to the bucket.
while IFS= read -r file; do
  echo -en "Uploading $file 🔼"
  ibmcloud cos upload --content-encoding brotli --bucket "${IBMCLOUD_COS_BUCKET}" --key "$(echo ${file} |sed -e 's:\.br$::g')" --file "${ROOT_DIR}/${file}";
  echo -e "\033[2K"
  echo -e "Uploaded $file 🏁"
done < <(find "${ROOT_DIR}" -type f -name "*.br" -printf "%P\n")
