import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // not detailed
    // username: String,
    // email: String,
    // isActive: Boolean


    // detailed
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true,"Password is required"]
    }
  },{timestamps: true}
)

export const User = mongoose.model("User",userSchema)












// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({})

// export const User = mongoose.model("User",userSchema)
// In database User become users