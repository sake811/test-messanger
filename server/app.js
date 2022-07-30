const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 4000
const dbUri = "mongodb://uxigknjzo0qfjpqj4crz:Sn3IVg7geXbkO0zBPcnU@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bkpk3vhkucqkjiy?replicaSet=rs0"
const router = require("./router")

app.use(cors())
app.use(express.json())
app.use("/", router)

async function start() {
    try {
        await mongoose.connect(dbUri)
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()