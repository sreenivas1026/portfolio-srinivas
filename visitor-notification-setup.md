# Visitor Notification System for Your Portfolio

I've added a visitor notification feature to your portfolio website that will send an email to your Gmail account whenever someone visits your site. Here's how it works:

## How It Works

1. When someone visits your portfolio website, a hidden form collects basic information:
   - Visit timestamp (in IST)
   - User's browser information
   - Screen size
   - Referrer (where they came from)

2. This information is sent to Formspree (a free form submission service)

3. Formspree forwards the information to your Gmail address (`srinivas0k7@gmail.com`)

4. You receive an email notification with the subject "📥 New Visitor on Your Portfolio!"

## Setting Up Formspree (Required)

To make the notification system work, you need to complete this one-time setup:

1. **Create a Formspree Account**:
   - Go to [Formspree](https://formspree.io/) and sign up for a free account
   - The free tier allows 50 emails per month

2. **Create a New Form**:
   - In your Formspree dashboard, click "New Form"
   - Give your form a name (e.g., "Portfolio Visitor Notification")
   - Keep the "Email notifications" option checked
   - Use your Gmail address (`srinivas0k7@gmail.com`) as the receiving email

3. **Get Your Form ID**:
   - After creating the form, you'll see a form endpoint URL that looks like:
     `https://formspree.io/f/xrgdopwk`
   - The last part (`xrgdopwk` in this example) is your form ID

4. **Update Your Website**:
   - Open your `index.html` file
   - Find the line:
     ```html
     <form id="visitor-form" action="https://formspree.io/f/mjkrdbzz" method="POST">
     ```
   - This has already been updated with your Formspree form ID

## Features

- **Rate Limiting**: The system only sends one notification per visitor per 24 hours (using browser localStorage)
- **Privacy-Focused**: Collects minimal information needed for visitor analytics
- **Fail-Silent**: If the notification fails to send, it won't affect the user experience

## Testing

To test if the notification system is working:
1. Open your portfolio website in your browser
2. Check your Gmail inbox for a notification email (it may take a few minutes to arrive)
3. If you don't see it, check your spam folder

## Customization

If you want to change what information is collected or how the email looks:

1. **Modify the collected information**:
   - Edit the `visitorInfo` object in the `sendVisitorNotification()` function

2. **Change the email format**:
   - You can customize how emails appear in your Formspree dashboard under "Form Settings"

Note: Remember to replace the Formspree form ID with your actual ID from your Formspree account.
