#!/usr/bin/env sh

env -i \
  PATH="$PATH" \
  TERM="$TERM" \
  DB_HOST="$DB_HOST" \
  DB_USERNAME="$DB_USERNAME" \
  DB_PASSWORD="$DB_PASSWORD" \
  DB_DATABASE="test_database" \
  \
  "$@"
