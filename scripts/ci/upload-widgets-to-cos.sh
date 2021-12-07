#!/usr/bin/env bash
set -e

# Calculate the absolute path to the project root.
SCRIPT_RELATIVE_DIR=$(dirname "${BASH_SOURCE[0]}")
PROJECT_ROOT=$(dirname "$(dirname "${SCRIPT_RELATIVE_DIR}")")

source "${PROJECT_ROOT}/scripts/ci/delete-from-cos.sh" '^"widgets/)' && \
source "${PROJECT_ROOT}/scripts/ci/delete-from-cos.sh" '^"storybook/' && \
source "${PROJECT_ROOT}/scripts/ci/upload-to-cos.sh" "${PROJECT_ROOT}/widget-registry"
