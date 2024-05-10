NGINX_DIR=$INIT_CWD/nginx

echo "Checking for dangling processes"

if [ -f $NGINX_DIR/nginx.pid ]; then
  NGINX_PID=$(cat $NGINX_DIR/nginx.pid)
  echo "Quitting PID $NGINX_PID"
  run_as=""

  if [ "$(uname)" != "Darwin" ]; then
    run_as="sudo"
  fi

  $run_as kill -QUIT $NGINX_PID
  echo "NGINX quit success"
else
  echo "No existing NGINX process found"
fi
