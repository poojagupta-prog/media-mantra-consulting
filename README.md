This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact modal

Contact CTAs throughout the site open the form-only modal. Header and footer contact links continue to navigate to `/contact`. `ContactModalLink` preserves each CTA’s styling and supports modified clicks to open the contact page in another tab. Shared `Button`, `ArrowText`, and media `TextLink` components use it when their destination is `/contact`. `ContactModalProvider` is mounted in the root layout. In any client component, call `const { isOpen, open, close } = useContactModal()` from `@/hooks/use-contact-modal` to control it.

`useContactForm(endpoint?)` from `@/hooks/use-contact-form` exposes `submit(enquiry)`, `reset()`, `status`, `error`, and `isSubmitting`. It posts JSON with `name`, `email`, `company`, `service`, and `message`. The provider accepts an optional `endpoint` prop, defaulting to `/api/contact`.

Both the modal and `/contact` page send enquiries through `/api/contact` using [Nodemailer’s SMTP transport](https://nodemailer.com/smtp). Each email includes the name, email, company, service, and message. Reply-To is the submitter’s email address. Set `CONTACT_TO_EMAIL` to one or more plain email addresses separated by commas; it defaults to `mediamantragroupindia@gmail.com` when unset or blank. Recipients are controlled on the server and cannot be overridden by form submissions. Success requires SMTP acceptance of at least one configured recipient.

To enable delivery, fill in `.env.local` (see `.env.example`):

```dotenv
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_FROM_EMAIL="Media Mantra Consulting <website@your-domain.com>"
CONTACT_TO_EMAIL="enquiries@your-domain.com,team@your-domain.com"
```

Use a sender address authorized by your SMTP provider. Set `SMTP_SECURE=true` for implicit TLS (usually port 465), or `false` for STARTTLS (usually port 587). STARTTLS is required when implicit TLS is disabled. Use your provider’s SMTP credentials or an app password where required. These variables are server-only; `.env.local` is ignored by Git. Add the same variables to your hosting environment for production, then restart or redeploy. No real credentials are included in the repository. Until configured, the API returns 503 and forms show an error instead of a success message. Success means the SMTP server has accepted the recipient, not confirmation that the email has reached the inbox. The route uses the Node.js runtime, and hosting must allow outbound SMTP connections. Run `npm run test:contact` to check validation and mocked email delivery without sending a real email.

The contact API allows 5 POST attempts per client IP in a 10-minute window, including invalid enquiries and failed deliveries. Further attempts return HTTP 429 with a `Retry-After` header in seconds. Configure the hosting proxy to overwrite `X-Forwarded-For` (first address) or `X-Real-IP`; requests without a valid IP share one fallback limit. Counters are held in memory, capped at 10,000 clients, and reset on server restarts. Multiple server instances have separate counters; use a shared store or hosting-level limiter when a deployment-wide limit is required.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
