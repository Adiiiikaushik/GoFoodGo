import mongoose from "mongoose"

export const connectDB = async() => {
    mongoose.connect('mongodb+srv://adityakaushik1801:9MgdDEDp6d6xnqbx@cluster0.yaubo.mongodb.net/gofood').then(()=> console.log("DB Connected!"))
}
