const mongoose = require("mongoose");

async function pingMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      "✅ Successfully pinged MongoDB at",
      new Date().toLocaleString()
    );
    await mongoose.connection.close();
  } catch (err) {
    console.error("❌ Ping failed:", err.message);
    process.exit(1);
  }
}

pingMongo();
