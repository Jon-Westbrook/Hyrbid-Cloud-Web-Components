#!/usr/bin/env bash
set -e

echo -e "Checking if ibmcloud is installed:"
if ! command -v ibmcloud &> /dev/null
then
    echo "ibmcloud could not be found. You can install it by running:"
    echo "curl -fsSL https://clis.cloud.ibm.com/install/linux | sh"
    exit 1
fi
echo "OK"

echo -e "Checking if jq is installed:"
if ! command -v jq &> /dev/null
then
    echo "'jq' could not be found."
    exit 1
fi
echo "OK"

echo -e "Checking if COS plugin is installed:"
installed=$(ibmcloud cos help 2>&1|grep FAILED|wc -l)
if [ $installed = 1 ]
then
    echo "IBM Cloud COS plugin is not installed. You can install it by running:"
    echo "ibmcloud plugin install cloud-object-storage"
    exit 1
fi
echo "OK"

echo -e "Checking if ibmcloud is logged in:"
loggedIn=$(ibmcloud account show 2>&1|grep FAILED|wc -l)
if [ $loggedIn = 1 ]
then
  # Login and configure connection to IBM Cloud COS.
  ibmcloud login --no-region;
  ibmcloud cos config crn --crn "${IBMCLOUD_STORAGE_CRN}";
  ibmcloud cos config region --region "${IBMCLOUD_COS_REGION:us-geo}";
fi
echo "OK"
