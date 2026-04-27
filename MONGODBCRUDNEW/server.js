import connectDb  from "./config/db.js";
import dotenv from "dotenv";
import express from "express";
import router from "./routes/userRoutes.js";
dotenv.config();
connectDb();

// import { getAllUsers } from "./controllers/userController.js";

const app = express();
const port=process.env.PORT || 5000;
// app.use((req, res, next) => {
//   console.log("Request received:", req.method, req.url);
//   next();
// });
//router.get("/user",getAllUsers);
app.use("/api", router);


app.get("/login", (req, res) => {
  res.send("Login page");
}             
);

app.get("/profile", (req, res) => {

if(req.session.user){
  res.send(`Welcome to your profile, ${req.session.user.username}!`);
}else 
{
  res.status(401).send("Unauthorized. Please log in.");

}
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log("Error destroying session:", err);
      res.status(500).send("Error logging out");
    }
    res.send("Logged out successfully");
  }


);  







app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
