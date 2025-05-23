export const contactFormTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  return `
         <div
          style="
            font-family: Arial, sans-serif;
            padding: 30px;
            color: #ffffff;
            text-align: center;
          "
        >
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center">
                <table
                  role="presentation"
                  width="400px"
                  cellspacing="0"
                  cellpadding="0"
                  style="
                    background-color: #000;
                    padding: 20px;
                    border-radius: 15px;
                    text-align: left;
                    box-shadow: 0 4px 8px rgba(255, 215, 0, 0.2);
                  "
                >
                  <tr>
                    <td style="padding-bottom: 20px; text-align: center">
                      <img
                        src="${process.env.FRONTEND}/assets/logo/newLogo.png"
                        alt="Brubish "
                        style="width: 100px"
                      />
                    </td>
                  </tr>
                  <tr style="text-align: center">
                    <td>
                      <h2 style="color: #fbd973; text-align: center">
                        New Contact Form Enquiry
                      </h2>
                      <p style="text-transform: capitalize">
                        <strong>Name:</strong> ${name}
                      </p>
                      <p>
                        <strong>Email:</strong>
                        <a href="mailto:${email}" style="color: #ffffff"
                          >${email}</a
                        >
                      </p>
                      <p><strong>Phone:</strong> ${phone}</p>
                      <p><strong>Message:</strong> ${message}</p>
                      <hr style="border: 1px solid #555555" />
                      <p
                        style="
                          color: #999999;
                          font-size: 12px;
                          text-align: center;
                          line-height: 1.5;
                        "
                      >
                        This email was generated from Brubish pvt ltd.
                        Please contact us if you have any questions.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
          `;
};
