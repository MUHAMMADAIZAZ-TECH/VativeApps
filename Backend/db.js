const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://admin:Y7jNdHsmq-YUmS6@cluster0.ftvydlk.mongodb.net/Mern-03?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Connected to database success");
  } catch (error) {
    console.log("Error", error);
    console.log("Not Connected to database");
  }
};
