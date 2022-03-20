const mongoose = require("mongoose");

function mongo(url: string | undefined) {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err: string) => {
      console.log(err);
    });
}

export default mongo;
