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
    <body style="margin: 0; padding: 0; color: black;">
      <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #f4eefd; font-family: system-ui;">
          <div style="text-align: center; padding: 10px; background-color:#000717; border-radius: 10px;">
              <div style="display: inline-block;">
                  <img src="/public/logo.webp" alt="" style="display: inline-block; margin-right: 5px; vertical-align: middle; height: 80px; width: auto;">
                  <p style="display: inline-block; vertical-align: middle; margin: 0; font-size: x-large; font-weight: 600; color: whitesmoke;">Global Salah</p>
              </div>
          </div>
          <p style="font-size: 20px; text-align: center; font-weight: 600;">Thanks for the registration<br></p>
          <div style="text-align: center;">
              <div style="margin: 5px 0;">
                  <p style="font-size: medium; text-align: center; color: gray; font-weight: 600; padding-left: 10px; padding-right: 10px;">
                      Here is your verification code
                  </p>
              </div>
          </div>
          <div style="padding: 10px 0; text-align: center;">
              <div style="margin: 10px 0;">
                  <p style="font-size: 20px; text-align: center; font-weight: 500;">${verification_code}</p>
                  
              </div>
          </div>
      
      </div>
    </body>
          `,
  };

  return await transporter.sendMail(mailOptions);
};
