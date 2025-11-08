const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = ('mongodb://127.0.0.1:27017/WANDER');

main()
    .then(() => {
    console.log("connected to db");
    })
    .catch((err) => {
        console.log("error");
});

async function main() {
    await mongoose.connect(MONGO_URL)
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '69031287482142064ac3c030', }));
    await Listing.insertMany(initData.data);
    console.log("data was init");
    
};
initDB();