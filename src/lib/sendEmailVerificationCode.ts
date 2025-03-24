import nodemailer from "nodemailer";

export const sendEmailVerificationCode = async (
  email: string,
  verification_code: string
) => {
  const transporter = nodemailer.createTransport({
    host: "business76.web-hosting.com",
    port: 587,
    secure: false,
    auth: {
      user: "info@globalsalah.com",
      pass: "amfh)+AWv$0C",
    },
  });

  const mailOptions = {
    from: `Global Salah - <${process.env.MAILFROM}>`,
    to: email,
    subject: `Verification Code | Global Salah`,
    html: `
 <body style="margin: 0; padding: 0; font-family: 'Google Sans'; background-color: #f5f5f5; color: #333333;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 20px auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); background-color: #ffffff;">
      <tr>
        <td style="background-color: #000717; padding: 20px 0; text-align: center; border-top-left-radius: 12px; border-top-right-radius: 12px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="text-align: center;">
                <img src="https://muhammadumer.sirv.com/logo.webp" alt="Global Salah Logo" style="height: 50px; width: auto; vertical-align: middle;">
                <span style="display: inline-block; vertical-align: middle; margin-left: 10px; font-size: 28px; font-weight: 700; color: #ffffff;">Global Salah</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <tr>
        <td style="padding: 40px 30px; background-color: #ffffff;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="padding-bottom: 30px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #000717;">Thanks for your registration!</h1>
                <p style="margin: 15px 0 0; font-size: 16px; color: #666666; line-height: 1.5;">
                  We're excited to have you join the Global Salah community. Please verify your account to get started.
                </p>
              </td>
            </tr>
            
            <tr>
              <td style="padding-bottom: 30px; text-align: center;">
                <p style="margin: 0 0 15px; font-size: 16px; color: #666666;">Here is your verification code:</p>
                <div style="background-color: #f4eefd; border-radius: 8px; padding: 20px; margin: 0 auto; max-width: 300px; border: 1px dashed #8a56ac;">
                  <p style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: 5px; color: #000717; font-family: monospace;">${verification_code}</p>
                </div>
                <p style="margin: 15px 0 0; font-size: 14px; color: #999999;">This code will expire in 30 minutes</p>
              </td>
            </tr>
            
            <!-- Action Button
            <tr>
              <td style="padding-bottom: 30px; text-align: center;">
                <a href="#" style="display: inline-block; background-color: #000717; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 30px; border-radius: 6px; font-size: 16px;">Verify My Account</a>
              </td>
            </tr> -->
            
            <tr>
              <td style="text-align: center;">
                <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.5;">
                  If you didn't request this verification code, please ignore this email or <a href="mailto:support@globalsalah.com" style="color: #8a56ac; text-decoration: underline;">contact support</a> if you have questions.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      
      <tr>
        <td style="background-color: #f4eefd; padding: 20px; text-align: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr>
              <td style="text-align: center; padding-bottom: 15px;">
                <a href="#" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                  <img src="/public/icons8-facebook-48.png" alt="Facebook" style="height: 24px; width: 24px;">
                </a>
                <a href="#" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                  <img src="/public/icons8-x-50.png" alt="Twitter" style="height: 24px; width: 24px;">
                </a>
                <a href="#" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                  <img src="/public/icons8-instagram-48.png" alt="Instagram" style="height: 24px; width: 24px;">
                </a>
              </td>
            </tr>
            <tr>
              <td style="text-align: center;">
                <p style="margin: 0; font-size: 12px; color: #666666; line-height: 1.5;">
                  &copy; 2025 Global Salah. All rights reserved.<br>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
          `,
  };

  return await transporter.sendMail(mailOptions);
};
