const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')
let app = Express()

const CONNECTION_URI = process.env.MONGODB_URI || "mongodb+srv://tyelf22:Nike2299@ria-crud-cluster-gi4er.mongodb.net/people?retryWrites=true&w=majority"

// Controllers
const PlayerController = require('./controllers/PlayerController')

// Database
Mongoose.connect(CONNECTION_URI, 
{ 
    useUnifiedTopology: true,
    useNewUrlParser: true 
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}


// Middleware
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({extended: true}))

//GET welcome page
app.get("/", PlayerController.welcome)

//POST create new player
app.post("/player", PlayerController.create)

//GET all players
app.get('/players', PlayerController.getAll)

//GET players by team
app.get('/players/team/:team', PlayerController.getTeam)

//GET players by id
app.get("/player/:id", PlayerController.getId)

//PUT edit players by id
app.put("/player/:id", PlayerController.edit)

//DELETE remove players by id
app.delete("/player/:id", PlayerController.delete)

//Listen on port 3000

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}....`)
})