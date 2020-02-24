const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')

let app = Express()

Mongoose.connect("mongodb+srv://tyelf22:Nike2299@ria-crud-cluster-gi4er.mongodb.net/people?retryWrites=true&w=majority", 
{ 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended: true}))

// Define Mongoose Schema
const PlayerModel = Mongoose.model("person", {
    firstname: String,
    lastname: String,
    team: String
})

//POST create new player
app.post("/player", async (req, res, next) => {
    try {
        let player = new PlayerModel(req.body)
        let result = await player.save()
        res.send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

//GET all players
app.get('/players', async (req, res, next) => {
    try {
        let result = await PlayerModel.find().exec()
        res.send(result)
    } catch(error) {
        res.status(500).send(error)
    }

})

//GET players by team
app.get('/player/team/:team', async (req, res, next) => {
    try {
       let teamName = req.params.team
       let result = await PlayerModel.find({team : teamName}).exec()
       res.send(result)
    } catch(error) {
        res.status(500).send(error)
    }
})

//GET players by id
app.get("/player/:id", async (req, res, next) => {
    try {
        let player = await PlayerModel.findById(req.params.id).exec()
        res.send(player)

    } catch(error) {
        res.status(500).send(error)
    }
})

//PUT edit players by id
app.put("/player/:id", async (req, res, next) => {
    try {
        let player = await PlayerModel.findById(req.params.id).exec()
        player.set(req.body)
        let result = await player.save()
        res.send(result)
    } catch(error) {
        res.status(500).send(error)
    }
})

//DELETE remove players by id
app.delete("/player/:id", async (req, res, next) => {
    try {
        let result = await PlayerModel.deleteOne({_id: req.params.id}).exec()
        res.send(result)
    } catch(error) {
        res.status(500).send(error)
    }
})

//Listen on port 3000
app.listen(3000, () => {
    console.log("Listening at :3000....")
})