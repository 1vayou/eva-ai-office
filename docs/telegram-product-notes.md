# Telegram Product Notes

## Core model

Telegram is the single conversation entrypoint.
The user talks only to the Chief of Staff bot.
Specialist assistants work behind the scenes and expose branch summaries.

## User flow

1. User sends request in Telegram.
2. Chief classifies the request.
3. Relevant specialist assistant(s) work.
4. Chief returns summary, approvals, and links/buttons.
5. User opens web workspace for branch-level details if needed.

## Message types

- daily summary
- urgent alert
- approval request
- branch summary
- draft preview
- workspace link

## Branch philosophy

Telegram does not attempt to become a full multi-thread UI.
Instead, Telegram offers lightweight branch views via commands and buttons,
while the web workspace holds full detail.
