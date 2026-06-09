# sample-worker

Korve's canonical **scale-to-zero** smoke-test app. The platform's dogfood
suite deploys this repo through the real pipeline (queued → build runner →
live on `*.korve.app`) to prove the deploy path end to end; it doubles as
the smallest possible example of a deployable scale-to-zero app.

Used by: platform release verification, `packages/deploy-engine` fixtures,
and the docs quickstart.
