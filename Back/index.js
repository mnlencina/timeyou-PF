require("dotenv").config();
const transporter = require("./src/nodemailer/postEmail");
const server = require("./src/App");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;

//server.listen(PORT, () => console.log(`server on PORT ${PORT}`));

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server on PORT ${PORT}`);
    });
  })

  .then(async () => {
    await transporter.verify().then(() => {
      console.log("Email service: ✅");
    });
  });
