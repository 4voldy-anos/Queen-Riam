// server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Queen Riam WhatsApp Bot is running on Hugging Face!");
});

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => {
  console.log("🌐 Web server running on port " + PORT);
});
