# Infrastructure

The production topology is a separately deployed static React frontend and Django ASGI/WSGI service backed by Neon PostgreSQL and approved object storage. Apply environment values through the hosting provider's secret manager; never commit them.
