const express =require("express")
const router = express.Router({ mergeParams: true })
const MessageController = require('./MessageController')

router.post('/messages', MessageController.create)
router.get('/messages', MessageController.getAll)
router.delete("/messages/?:id", MessageController.delete)

module.exports=router