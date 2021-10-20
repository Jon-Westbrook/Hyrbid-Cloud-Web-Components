#!/usr/bin/env bash

# Set root dir.
if [ -n "$1" ]
then
  ROOT_DIR=$1;
else
  echo "Please provide the root directory.";
  exit 1;
fi

# Login and configure connection to IBM Cloud COS.
ibmcloud login --no-region;
ibmcloud cos config crn --crn "${IBMCLOUD_STORAGE_CRN}";
ibmcloud cos config region --region us-geo;

# Upload the main registry.json and the helper script files.
ibmcloud cos upload --bucket ${IBMCLOUD_COS_BUCKET} --key registry.json --file ${ROOT_DIR}/registry.json;

# Upload widget directories to the bucket.
for widget in `find ${ROOT_DIR} -maxdepth 2 -mindepth 2 -type d | awk -F '/' '{print $(NF-1) "/" $NF }'`
do
  echo "----------------------------------------------------------------------"
  echo "        Starting to upload ${widget} widget..."
  echo "----------------------------------------------------------------------"
  for file in `find ${ROOT_DIR}/${widget} -type f -printf "%P\n"`
  do
    ibmcloud cos upload --bucket ${IBMCLOUD_COS_BUCKET} --key ${widget}/${file} --file ${ROOT_DIR}/${widget}/${file};
  done
  echo "Widget ${widget} uploaded."
done
