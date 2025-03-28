import nodemailer from "nodemailer";

export const sendAdminQAAlert = async (isAnswer?: boolean) => {
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
    to: process.env.ADMINMAIL,
    subject: `${isAnswer ? "Answer Alert" : "Question Alert"} | Global Salah`,
    html: `
  <body style="margin: 0; padding: 0; background-color: #f4eefd; font-family: 'Google-sans';">
    <div style="width: 100%; max-width: 600px; border-radius: 20px; margin: 20px auto; background-color: #ffffff; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center; padding: 20px; background-color: #000717; border-top-left-radius: 20px; border-top-right-radius: 20px;">
            <div style="display: flex; align-items: center; justify-content: center;">
                <img src="https://muhammadumer.sirv.com/logo.webp" alt="Global Salah" style="height: 50px; width: auto; margin-right: 10px; border: 0px; border-radius: 10px">
                <p style="margin: 0; font-size: 24px; font-weight: 600; color: whitesmoke;">Global Salah</p>
            </div>
        </div>

        <div style="padding: 20px; text-align: center;">
            <p style="font-size: 22px; font-weight: 600; color: #333;">A new 
                <span style="color: #6c5ce7;">${isAnswer ? "Answer" : "Question"}</span> has been added to the waitlist
            </p>
            <p style="font-size: 16px; color: gray; margin-bottom: 20px;">Click the button below to check it out.</p>
            
            <a href="https://globalsalah.com/en/admin-panel" style="display: inline-block; padding: 12px 24px; font-size: 16px; font-weight: bold; color: white; background-color: #6c5ce7; text-decoration: none; border-radius: 8px; transition: 0.3s;">
                Check Now
            </a>
        </div>

        <div style="text-align: center; padding: 15px; font-size: 14px; color: gray;">
            <p style="margin: 0;">&copy; 2025 Global Salah. All rights reserved.</p>
        </div>
    </div>
</body>
          `,
  };

  return await transporter.sendMail(mailOptions);
};
