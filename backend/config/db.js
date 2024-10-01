import mongoose from "mongoose"

export const connectDB = async() => {
    mongoose.connect('mongodb+srv://adityakaushik1801:iHigOy85Br4JspLs@cluster0.yaubo.mongodb.net/gofood').then(()=> console.log("DB Connected!"))
}
