#!/bin/sh
set -e

echo "Name of the script: $0"
echo "Total number of arguments: $#"
echo "Values of all the arguments: $@"

# Ensure we always use the production bundle for JS.
export NODE_ENV=production;
if [ "$1" = "main" ]; then
  export IBMCLOUD_COS_BUCKET=hybrid-cloud-widgets-production
elif [ "$1" = "development" ]; then
  export IBMCLOUD_COS_BUCKET=hybrid-cloud-widgets-development
else
  echo "The branch name is not 'development' or 'main', but '$1'."
  exit 1;
fi
