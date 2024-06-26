#!/bin/bash

set -e

KEY_NAME="webwiz"
CERT_DIR="ssl"
DOMAINS=($(cat /etc/hosts | grep ^127.0 | awk '{print $2}'))

if ! command -v mkcert &> /dev/null; then
    echo "mkcert not installed. Please install it"
    exit 1
fi

mkdir -p $CERT_DIR

CERT_PATH="$CERT_DIR/$KEY_NAME.crt"
KEY_PATH="$CERT_DIR/$KEY_NAME.key"

# TODO: verify expiration
if [ -f "$CERT_PATH" ] && [ -f "$KEY_PATH" ]; then
    echo "Found existing SSL certificate and key at $CERT_PATH and $KEY_PATH"
else
    echo "Generating SSL certificates for: ${DOMAINS[@]}"
    mkcert -cert-file "$CERT_PATH" -key-file "$KEY_PATH" "${DOMAINS[@]}"
    echo "Certificates generated at $CERT_PATH and $KEY_PATH"
    sudo trust anchor --store $CERT_PATH
    mkcert -install
fi

