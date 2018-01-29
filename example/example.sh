#!/bin/sh
set -u

svg-term --command="node example/example" \
    --out example/example.svg \
    --height=3 \
    --no-cursor \
    --padding=10 \
    --width=84 \
    --term=terminal \
    --profile=Pro
