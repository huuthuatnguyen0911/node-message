import mongoose from "mongoose";
import { MONGO_ENDPOINT } from "../config/enviroment";

class ServerGlobal {
  static _instance: ServerGlobal;

  constructor() {
    this.initMongoose();
  }
  initMongoose() {
    mongoose
      .connect(
        "mongodb+srv://nguyenhuuthuat:Thuat123@cluster0.cs9d8wh.mongodb.net/db_doan_message?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Connect mongo successfully ");
      })
      .catch((e) => {
        console.log("Connect mongo failed: " + e.message);
      });
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new ServerGlobal();

    return this._instance;
  }
}

export default ServerGlobal;
