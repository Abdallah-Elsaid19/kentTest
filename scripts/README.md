# Scripts

Production request handling must never depend on this directory. One-time legacy migration is implemented as explicit Django management commands so validation, transactions and model constraints are shared with the application.
