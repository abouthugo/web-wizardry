This is a project that aims to be a personal introduction to people on the internet.

# Running it locally

## Pre-reqs

Install the following packages if you don't already have them:

- `nginx`
- `mkcert`

In development mode you need to modify your `/etc/hosts` file to include something like this:

```txt
127.0.0.1 localhost
::1 localhost
127.0.0.1 custom.local.com
```

Add a `.env.local` file before running it and set the variable `NEXT_PUBLIC_PHOTO_ENDPOINT` to be able to load
the images from the server

## Scripts

`npm run dev` to run the app in dev mode
