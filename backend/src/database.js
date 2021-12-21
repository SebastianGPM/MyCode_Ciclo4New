import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/easyp",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(db => console.log("conecto Monda"))
    .catch(err=> console.log("Monda HP!!"))
