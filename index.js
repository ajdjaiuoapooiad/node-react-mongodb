const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test').then(() => console.log('Database is connected')).catch((err) => console.log(err));



const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isMarried: Boolean,
    salary: Number,
    gender: String,

})

const User = mongoose.model('User',userSchema);

    async function storeInfomation(){
        const user = new User({
            name: "yukito",
            age: 23,
            isMarried: false,
            salary: 300,
            gender: "Male",
        });
        await user.save();
        console.log(user);
        
    }


