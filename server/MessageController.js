const message = require('./Message')
class MessageController {
    async create(req, res) {
        try {
            const { author, content } = req.body
            const createMessage = await message.create({ author, content })
            res.json(createMessage)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const getMessage = await message.find();
            return res.json(getMessage)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const {id} = req.params
            await message.findByIdAndDelete(id)
            const allMessage = await message.find()
            return res.json(allMessage)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new MessageController()