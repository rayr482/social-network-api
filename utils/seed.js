const { User, Thought, Reaction } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

const users = [
  {
    username: "rayr482",
    email: "ray@gmail.com",
    thought: [],
  },
];

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  await User.collection.insertMany(users);

  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
