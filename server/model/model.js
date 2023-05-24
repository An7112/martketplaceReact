
const mongoose = require('mongoose')

const StoresSchema = mongoose.Schema({
    storeId:{
        type: String,
        require: true
    },
    storeName:{
        type: String,
        require: true
    },
    storeDescription:{
        type: String,
        require: true
    },
    storeAvatar:{
        type: String,
        require: true
    },
    storeBanner:{
        type: String,
        require: true
    },
    storeProductLength:{
        type: String,
        require: true
    },
    date:{
        type:Date,
        default:Date.now
    }
},{
    stores:"Stores"
})

module.exports = mongoose.model("Stores", StoresSchema)