import nodemailer from "nodemailer";

export const sendUserQAAlert = async (
  isAnswer?: boolean,
  email?: string,
  answer?: string,
  question?: string
) => {
  console.log("email", email);
  // console.log('email', email)
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
    subject: `${isAnswer ? "Answer Added" : "Question Added"} | Global Salah`,
    html: `
   <body
    style="margin: 0; padding: 0; font-family: 'Google-Sans', 'Helvetica Neue', sans-serif; background-color: #f5f5f5; color: #333333;">
    <table cellpadding="0" cellspacing="0" border="0" width="100%"
        style="max-width: 600px; margin: 20px auto; border-radius: 20px; overflow: hidden; background-color: #f4eefd;">
        <tr>
            <td
                style="background-color: #000717; padding: 15px; text-align: center; border-top-left-radius: 20px; border-top-right-radius: 20px;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td style="text-align: center;">
                            <img src="/public/logo.webp" alt="Global Salah Logo"
                                style="display: inline-block; height: 50px; width: auto; vertical-align: middle; margin-right: 10px;">
                            <span
                                style="display: inline-block; vertical-align: middle; font-size: 28px; font-weight: 600; color: whitesmoke;">Global
                                Salah</span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding: 30px 25px; background-color: #f4eefd;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td style="text-align: center; padding-bottom: 20px;">
                            <img src="/public/icons8-notification.gif" alt="Notification Icon"
                                style="width: 60px; height: 60px;">
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-bottom: 25px;">
                            <div
                                style="background-color: #ffffff; border-radius: 12px; padding: 25px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
                                <h2
                                    style="margin: 0 0 15px; font-size: 22px; font-weight: 600; color: #000717; text-align: center;">
                                    Notification Update</h2>
                                <p
                                    style="margin: 0; font-size: 16px; line-height: 1.6; color: #555555; text-align: center;">
                                    ${
                                    isAnswer ? "Answer" : "Question"
                                    } ${
                                    isAnswer ? answer?.slice(0, 50) : question
                                    } to Global Salah
                                </p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-bottom: 25px; text-align: center;">
                            <a href="#"
                                style="display: inline-block; background-color: #000717; color: #ffffff; text-decoration: none; font-weight: 600; padding: 12px 30px; border-radius: 6px; font-size: 16px;">View
                                Details</a>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-bottom: 20px;">
                            <div
                                style="background-color: rgba(255, 255, 255, 0.7); border-radius: 8px; padding: 15px; border-left: 4px solid #8a56ac;">
                                <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #666666;">
                                    Thank you for being an active member of our community. Your contributions help make
                                    Global Salah a valuable resource for everyone.
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr>
            <td
                style="background-color: rgba(0, 7, 23, 0.05); padding: 20px; text-align: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td style="text-align: center; padding-bottom: 15px;">
                            <a href="#" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                                <img src="/public/icons8-facebook-48.png" alt="Facebook"
                                    style="height: 30px; width: 30px;">
                            </a>
                            <a href="#" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                                <img src="/public//icons8-x-50.png" alt="Twitter" style="height: 30px; width: 30px;">
                            </a>
                            <a href="#" style="display: inline-block; margin: 0 8px; text-decoration: none;">
                                <img src="/public/icons8-instagram-48.png" alt="Instagram"
                                    style="height: 30px; width: 30px;">
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td style="text-align: center;">
                            <p style="margin: 0 0 10px; font-size: 14px; color: #666666; line-height: 1.5;">
                                If you have any questions, please contact our support team.
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #888888; line-height: 1.5;">
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
