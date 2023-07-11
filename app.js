const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//CONNECT DB
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//TEMPLETE ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method', {methods : ['POST', 'GET']}))

// ROUTES
app.get("/", getAllPosts); // home page
app.get("/post/:id", getPost); // post detail page
app.post("/add", createPost); // add new post
app.put("/post/:id", updatePost); // update post
app.delete("/post/:id", deletePost); // delete post
app.get("/home", homePage); // home page
app.get("/about", aboutPage); // about page
app.get("/add", addPage); // add post page
app.get("/post/edit/:id", editPage); // edit post page
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
