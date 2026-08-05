# Security review

Implemented controls are documented in `ARCHITECTURE.md`. No committed secret values were found during repository inspection.

## Known dependency advisory

On 4 August 2026, `npm audit --omit=dev` reported two high-severity findings from GHSA-qwww-vcr4-c8h2 through `react-router` and `react-router-dom`. The advisory concerns React Server Component action execution. This frontend is a client-only Vite application and does not enable RSC mode or server actions, which materially limits exposure. npm's proposed remediation is a breaking downgrade to React Router 7.11.0, so it was not applied automatically. Upgrade to the first compatible patched release and rerun the full build/test suite before production launch.

## Pre-launch penetration checks

- verify Turnstile server validation and throttle bypass resistance
- test CORS/CSRF from unapproved origins
- fuzz JSON/form sizes and malformed camelCase keys
- test stored HTML, URL, upload and redirect payloads
- verify admin role boundaries and deletion controls
- inspect bundles/logs/analytics for secrets and personal data
- confirm CSP against only approved third-party origins
- test object-storage content type, size and malware workflow
