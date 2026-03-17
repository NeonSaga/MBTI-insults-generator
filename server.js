const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const insults = require("./insults");

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/insult/:type", (req, res) =>{
    const type = req.params.type.toUpperCase();

    if(!insults[type]){
        return res.json({insult: "Unknown MBTI type"});
    }
    
    const list = insults[type];

    const random = list[Math.floor(Math.random() * list.length)];

    res.json({insult: random});
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});