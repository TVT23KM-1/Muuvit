#!/bin/sh

# Couldn't glob filenames with Dockerfile ENTRYPOINT directive
# so I had to do it here.

find . -name backend\*.jar | head -n 1 | xargs -e java -jar
