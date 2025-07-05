const nodemailer = require('nodemailer');

// Create cache for rate limiting
const visitors = new Map();
const RATE_LIMIT_MINUTES = 60; // Only send notification once per hour per IP

module.exports = async (req, res) => {
  try {
    // Get visitor IP
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection.remoteAddress || 
               '0.0.0.0';
    
    // Check if we've already sent a notification for this IP recently
    const now = Date.now();
    const lastVisit = visitors.get(ip) || 0;
    
    if (now - lastVisit < RATE_LIMIT_MINUTES * 60 * 1000) {
      return res.status(200).json({ message: 'Notification skipped (rate limited)' });
    }
    
    // Update cache
    visitors.set(ip, now);
    
    // Clean old entries from cache
    for (const [visitorIp, timestamp] of visitors.entries()) {
      if (now - timestamp > RATE_LIMIT_MINUTES * 60 * 1000) {
        visitors.delete(visitorIp);
      }
    }
    
    // Create email transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
    
    // Get visitor location info (if available)
    let locationInfo = 'Location info not available';
    try {
      // This is a privacy-friendly way to get approximate location
      // No external API calls that might store visitor data
      const userAgent = req.headers['user-agent'] || 'Unknown';
      const language = req.headers['accept-language'] || 'Unknown';
      locationInfo = `User Agent: ${userAgent}, Language: ${language}, IP: ${ip}`;
    } catch (error) {
      console.error('Error getting location info:', error);
    }
    
    // Format current time
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata' // Indian Standard Time
    });
    
    // Compose email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: '📥 New Visitor on Your Portfolio!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 5px;">
          <h2 style="color: #3b82f6;">New Portfolio Visitor!</h2>
          <p>Someone just visited your portfolio site at <strong>${timestamp}</strong>.</p>
          <p>Visitor details:</p>
          <pre style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${locationInfo}</pre>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated message from your portfolio website.</p>
        </div>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ message: 'Notification sent' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ error: 'Failed to send notification' });
  }
};
