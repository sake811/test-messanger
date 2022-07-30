const mongoose =require("mongoose")

const Message = new mongoose.Schema ( {
    author: {type: String, required: true},
    content: {type: String, required: true}
})

module.exports = mongoose.model('message', Message)