This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Contact modal

Contact CTAs throughout the site open the form-only modal. Header and footer contact links continue to navigate to `/contact`. `ContactModalLink` preserves each CTA’s styling and supports modified clicks to open the contact page in another tab. Shared `Button`, `ArrowText`, and media `TextLink` components use it when their destination is `/contact`. `ContactModalProvider` is mounted in the root layout. In any client component, call `const { isOpen, open, close } = useContactModal()` from `@/hooks/use-contact-modal` to control it.

`useContactForm(endpoint?)` from `@/hooks/use-contact-form` exposes `submit(enquiry)`, `reset()`, `status`, `error`, and `isSubmitting`. It posts JSON with `name`, `email`, `company`, `service`, and `message`. The provider accepts an optional `endpoint` prop, defaulting to `/api/contact`.

To enable delivery through the default API route, set `CONTACT_API_URL` in `.env.local` to your CRM/form service's JSON POST endpoint. Optionally set `CONTACT_API_TOKEN` for bearer authentication. Both values stay on the server. The service must accept the above JSON fields and return a 2xx status when it accepts an enquiry. Restart the server after changing environment variables. Until configured, submission returns an error with an email fallback; no enquiry is reported as sent. The existing `/contact` page retains its separate demo form.

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
