
const express = require("express");
const PORT = 3000;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dateTime = () => {
    let today = new Date();
    let date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes();
    return "Today is " + date + " at " + time + "."
}

// Define API routes here
app.get('/', (req, res) => {
     req.headers["user-agent"] == "h4ck3r" ? 
        res.sendStatus(403)
        :
        res.send(`<h1>Hello World! ${dateTime()} </h1>`)

})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});