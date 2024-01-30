// Express API routes
// ⛳️ Create a new POST route in your Express server, and use the express.json() middleware to parse the JSON data from the request body.
// ... express setup goes here
import express from "express"
import cors from "cors"
const app = express()
app.use(express.json()) // ensure this is present so the server can understand JSON data
app.use(cors())

app.post("/messages", function (req, res) {
    console.log("req.body", req.body);
    res.json({ status: "Message received!" });
  });

// ... app.listen goes here 
app.listen('3000', () => {
    console.log('server started on port 3000')
})

// 👀 Notice that when you type in your form and press send the browser makes a POST request containing your form data (check the Dev Tools "Network" tab to see the request happening)
// where and how do you notice this?