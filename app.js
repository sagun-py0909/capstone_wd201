const express = require("express");
const { Model } = require("sequelize");
const app = express()
app.set('view engine', 'ejs');

app.get("/", (request , response)=>{
  response.render("index")
})
app.get("/home", (request , response)=>{
  response.render("home")
})

app.get("/profile" , (request , response) =>{
  response.render("profile")
})

app.get("/login", (request , response)=>{
  response.render("login")
})

app.get("/signup", (request , response)=>{
  response.render("signup")
})
app.get("/signout" , (request , response) =>{
  response.render("index")
})
app.post('/login', (req, res) => {
  // Process the form data (authenticate user, etc.)

  // Redirect to the home.ejs page
  res.redirect('/home');
});
app.post('/signup', (req, res) => {
  // Process the form data (authenticate user, etc.)

  // Redirect to the home.ejs page
  res.redirect('/login');
});


module.exports= app