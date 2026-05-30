# Salla Security Rules

## Twig output

Twig escapes normal `{{ value }}` output. Do not use raw output unless the source is trusted and the reason is documented.

## URLs

- Guard optional URLs.
- Do not output `javascript:` URLs.
- Prefer Salla variable-list fields for merchant links when possible.
- External links should use appropriate `rel` when opening a new tab.

## Inline code

- Do not place component JS in Twig.
- Do not place component CSS in Twig.
- Avoid inline event handlers such as `onclick`.

## Merchant content

- Treat merchant-provided text as untrusted.
- Avoid injecting merchant content into script contexts.
- Avoid building JSON strings manually in HTML attributes; use safe encoding if needed.

## Third-party assets

- Prefer platform/CDN assets already used by the theme.
- Document new third-party libraries.
- Avoid remote scripts added from component fields.

## Stop conditions

- User asks to execute merchant-provided script.
- Field value is used as raw HTML without sanitization.
- URL field can become `javascript:` or unsafe data URI.
