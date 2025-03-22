import nodemailer from "nodemailer";

export const sendEmailQuestionAnswerStatus = async (
  email: string,
  title: string,
  status: string,
  isAnswer?: boolean
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
    subject: `Question status`,
    html: `
  <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family:'Google-sans'">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center" style="padding: 20px 0;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #f4eefd; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <tr>
              <td align="center" style="background-color: #000717; padding: 15px; border-top-left-radius: 20px; border-top-right-radius: 20px;">
                <table border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <img src="/public//logo.webp" alt="Global Salah Logo" style="display: inline-block; margin-right: 10px; vertical-align: middle; height: 50px; width: auto; border-radius: 8px;">
                    </td>
                    <td>
                      <p style="display: inline-block; vertical-align: middle; margin: 0; font-size: 24px; font-weight: 600; color: whitesmoke;">Global Salah</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <tr>
              <td style="padding: 25px 20px; background-color: #f4eefd;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: white; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);">
                  <tr>
                    <td style="padding: 20px;">
                      <h2 style="font-size: 18px; text-align: center; color: #000717; margin-top: 0; margin-bottom: 15px; font-weight: 700;">Notification Update</h2>
                      <p style="font-size: 16px; text-align: center; color: #555555; font-weight: 600; line-height: 1.5; margin: 0;">
                        Your <span style="color: #000717;">${isAnswer ? "answer" : "question"
                        } ${title}</span>" has been <span style="color: #10b981; font-weight: 700;">${status}</span>
                      </p>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 25px 0;">
                  <tr>
                    <td align="center">
                      <a href="https://globalsalah.com/forum" style="display: inline-block; background-color: #000717; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">View ${isAnswer ?"answer" : "question"} </a>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgba(255, 255, 255, 0.7); border-radius: 8px; margin-top: 20px;">
                  <tr>
                    <td style="padding: 15px;">
                      <p style="font-size: 14px; text-align: center; color: #666666; margin: 0; line-height: 1.5;">
                        Thank you for contributing to the Global Salah community. Your participation helps Muslims around the world.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            
            <tr>
              <td style="background-color: rgba(0, 7, 23, 0.05); padding: 15px; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top: 1px solid rgba(0, 0, 0, 0.05);">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="center" style="margin-bottom: 10px;">
                      <a href="https://globalsalah.com/en/privacy-policy" style="color: #000717; text-decoration: none; margin: 0 10px; font-size: 14px; font-weight: 500;">Privacy Policy</a>
                      <a href="https://globalsalah.com/en/terms-and-conditions" style="color: #000717; text-decoration: none; margin: 0 10px; font-size: 14px; font-weight: 500;">Terms of Service</a>
                      <a href="https://globalsalah.com/en/contact-us" style="color: #000717; text-decoration: none; margin: 0 10px; font-size: 14px; font-weight: 500;">Contact Us</a>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding-top: 10px;">
                      <p style="font-size: 12px; text-align: center; color: #666666; margin: 0;">
                        &copy; 2025 Global Salah. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
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
