NGINX_DIR=$INIT_CWD/nginx
NGINX_CONFIG=$NGINX_DIR/nginx.conf

echo "Initializing NGINX server - config: $NGINX_CONFIG"

envsubst '$npm_config_hostname' < $NGINX_DIR/https.template.conf > $NGINX_DIR/https.conf

envsubst '$npm_config_hostname' < $NGINX_DIR/ssl.template.conf > $NGINX_DIR/ssl.conf

run_as=""
if [ "$(uname)" != "Darwin" ]; then
  run_as="sudo"
fi

$run_as nginx -c $NGINX_CONFIG -p $NGINX_DIR -e stderr

NGINX_SUCCESS=$?

if [ $NGINX_SUCCESS -eq 0 ]; then
  echo "NGINX server ready"
else
  echo "Error initializing NGINX"
  exit 1
fi
