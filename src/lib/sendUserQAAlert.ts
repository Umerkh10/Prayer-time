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
    <body style="margin: 0; padding: 0; color: black;">
      <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 0 auto; background-color: #f4eefd; font-family: system-ui;">
          <div style="text-align: center; padding: 10px; background-color:#000717; border-radius: 10px;">
              <div style="display: inline-block;">
                  <img src="/public/logo.webp" alt="" style="display: inline-block; margin-right: 5px; vertical-align: middle; height: 80px; width: auto;">
                  <p style="display: inline-block; vertical-align: middle; margin: 0; font-size: x-large; font-weight: 600; color: whitesmoke;">You have posted a ${
                    isAnswer ? "Answer" : "Question"
                  } ${
      isAnswer ? answer?.slice(0, 50) : question
    } to Global Salah </p>
              </div>
          </div>
          <p style="font-size: 20px; text-align: center; font-weight: 600;">Please wait until the admin approve it<br>Thank you!</p>
          <div style="text-align: center;">
              <div style="margin: 5px 0;">
                  <p style="font-size: medium; text-align: center; color: gray; font-weight: 600; padding-left: 10px; padding-right: 10px;">
                      Click here to Check
                  </p>
              </div>
          </div>
      </div>
    </body>
          `,
  };

  return await transporter.sendMail(mailOptions);
};
