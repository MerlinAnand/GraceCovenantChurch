# Grace Covenant Church Sydney

The website for Grace Covenant Church, Sydney — sermons, events, ministries, and information for the community.

## Stack

React + TypeScript, built with Vite, styled with Tailwind CSS.

## Run locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   `npm install`
2. Run the dev server:
   `npm run dev`
3. Build for production:
   `npm run build`
4. Preview a production build:
   `npm run preview`

## Known limitations

- The **Give** page does not process real payments — no payment provider is configured. It currently shows an informational message directing visitors to contact the church directly.
- The **Contact** page form does not send a real email — no backend/email service is configured. Submissions currently only show a confirmation in the UI. Wiring this up to a service like Formspree (or a small serverless function) is a natural next step if real form delivery is needed.
