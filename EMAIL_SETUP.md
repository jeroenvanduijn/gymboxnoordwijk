# Email Setup Instructions

The contact form now sends real emails using **Resend**. Follow these steps to complete the setup:

## 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

## 2. Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "CrossFit Leiden Production")
5. Copy the API key (it starts with `re_`)

## 3. Add Domain (Optional but Recommended)

To send emails from `@crossfitleiden.com`:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `crossfitleiden.com`
4. Follow the DNS configuration instructions
5. Add the provided DNS records to your domain registrar

**Note:** Until you verify your domain, emails will be sent from `noreply@resend.dev` instead of `noreply@crossfitleiden.com`

## 4. Configure Environment Variables

### For Local Development:

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

### For Production (Vercel/Netlify):

Add the environment variable in your hosting platform:
- **Variable name:** `RESEND_API_KEY`
- **Value:** Your Resend API key (starts with `re_`)

#### Vercel:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your API key
4. Redeploy your site

#### Netlify:
1. Go to **Site settings** → **Environment variables**
2. Add `RESEND_API_KEY` with your API key
3. Redeploy your site

## 5. Test the Contact Form

1. Visit your website's contact page
2. Fill out the form
3. Submit it
4. Check `welcome@crossfitleiden.com` for the email
5. Check Resend dashboard for delivery status

## How It Works

- **Contact form** → `/app/contact/page.tsx`
- **API endpoint** → `/app/api/contact/route.ts`
- **Email service** → Resend

When someone submits the contact form:
1. Form data is sent to `/api/contact`
2. API validates the data
3. Resend sends a formatted email to `welcome@crossfitleiden.com`
4. The reply-to address is set to the sender's email
5. User sees a success message

## Email Details

- **From:** `noreply@crossfitleiden.com` (after domain verification)
- **To:** `welcome@crossfitleiden.com`
- **Reply-To:** User's email address (so you can reply directly)
- **Subject:** `Website Contact: [Subject] - [Name]`

## Troubleshooting

### "Error sending email" message
- Check that `RESEND_API_KEY` is set correctly
- Verify the API key is valid in Resend dashboard
- Check Resend dashboard for error logs

### Emails not arriving
- Check spam folder
- Verify email address `welcome@crossfitleiden.com` is correct
- Check Resend dashboard for delivery status
- Make sure you haven't exceeded free tier limit (100/day)

### Domain verification issues
- DNS changes can take up to 48 hours to propagate
- Use [dnschecker.org](https://dnschecker.org) to verify DNS records
- Emails will still work from `@resend.dev` while pending verification

## Free Tier Limits

Resend free tier includes:
- ✅ 100 emails per day
- ✅ 1 domain
- ✅ Unlimited API keys
- ✅ Email logs (7 days)

If you need more, upgrade to a paid plan (starts at $20/month for 50,000 emails).

## Support

- Resend Docs: [https://resend.com/docs](https://resend.com/docs)
- Resend Support: [support@resend.com](mailto:support@resend.com)
