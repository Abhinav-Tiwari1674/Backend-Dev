import connectDb from "./db.js";
import user from "./model/userSchema.js";

connectDb();

const createUser = async () => {
  try {
    const newUsers = await user.create([
      {
        name: "Abhinav Tiwari",
        email: "abhinav.tiwari@gmail.com",
        password: "123456",
        role: "admin",
      },
      {
        name: "Aryan Gupta",
        
        email: "aryan.gupta@gmail.com",
        password: "1234563548",
        role: "user",
      },
      {
        name: "Rohit Sharma",
        email: "rohit.sharma@gmail.com",
        password: "123456351",
        role: "user",
      },
      {
        name: "Suresh Raina",
        email: "suresh@gmail.com",
        password: "123456351",
        role: "user",
      },
    ]);

    console.log("Users Created", newUsers);
  } catch (error) {
    console.error("Error creating users", error);
  }
};

const readuser = async () => {
  try {
    const result = await user.find();
    console.log("All Users:", result);
  } catch (error) {
    console.error("Error reading users", error);
  }
};

const updateUser = async () => {
  try {
    const result = await user.findByIdAndUpdate(
      "64a1c8e5b9d1c0e7f8a2b3c", 
      { name: "Abhinav Kumar Tiwari" },
      { new: true }
    );

    console.log("Updated User:", result);
  } catch (error) {
    console.error("Error updating user", error);
  }
};

const deleteUser = async (id) => {
  try {    const result = await user.findByIdAndDelete("64a1c8e5b9d1c0e7f8a2b3c");
    console.log("Deleted User:", result);
  } catch (error) {
    console.error("Error deleting user", error);
  } 
};


const highValue = async ()=>{
    const result = await product.aggregate([
        {$match:{price:{$gt:100}}},
        {$sort:{price:-1}},
        {$project:{name:1, price:1, _id:0}}

    ])
    console.log(result)
}



const main = async () => {
  await createUser();
  await readuser();
  await updateUser();
  await deleteUser();
};

main();