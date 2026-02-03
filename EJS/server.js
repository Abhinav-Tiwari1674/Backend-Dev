import express from "express";
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/user", (req, res) => {
  const userData = {
    name: "Ankur",
    age: 22,
  };

  res.render("user", userData);
});
app.get("/list", (req, res) => {
  const arr = ["Ankur", "Rohan", "Sohan", "Mohan", "Mahesh"];

  arr.forEach((ele) => {
    console.log(ele);
  });
  app.get("/list", (req, res) => {
  const arr = [];

  if (arr.length>0) {
    res.render("list",{arr});
  } else {
    res.send("Array khali hai");
  }
});


  res.render("list", { arr });
});
app.listen(3000, () => {
  console.log("Server daud raha hai port no. 3000");
});
