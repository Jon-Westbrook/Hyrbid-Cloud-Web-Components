#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "$(dirname "${SCRIPT_RELATIVE_DIR}")")

# Do not remove widgets. We'll be keeping the different hashed versions. This
# is to avoid deleting something only to have the upload process fail. This
# could cause an outage for widgets in production.

# The list of compressed extensions should match the one in .widgetRegistry/main.js
source "${PROJECT_ROOT}/scripts/ci/upload-to-cos.sh" "${PROJECT_ROOT}/widget-registry" '\.\(js\|css\|svg\|js\.map\)$'
