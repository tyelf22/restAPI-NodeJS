const PlayerModel = require('../models/PlayerModel')

module.exports = {
    welcome: (req, res, next) => {
        res.send('Welcome to my rest api')
    },
    create: async (req, res, next) => {
        try {
            let player = new PlayerModel(req.body)
            let result = await player.save()
            res.send(result)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            let result = await PlayerModel.find().exec()
            res.send(result)
        } catch(error) {
            res.status(500).send(error)
        }
    },
    getTeam: async (req, res, next) => {
        try {
            let teamName = req.params.team
            let result = await PlayerModel.find({team : teamName}).exec()
            res.send(result)
        } catch(error) {
            res.status(500).send(error)
        }
    },
    getId: async (req, res, next) => {
        try {
            let player = await PlayerModel.findById(req.params.id).exec()
            res.send(player)

        } catch(error) {
            res.status(500).send(error)
        }
    },
    edit: async (req, res, next) => {
        try {
            let player = await PlayerModel.findById(req.params.id).exec()
            player.set(req.body)
            let result = await player.save()
            res.send(result)
        } catch(error) {
            res.status(500).send(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            let result = await PlayerModel.deleteOne({_id: req.params.id}).exec()
            res.send(result)
        } catch(error) {
            res.status(500).send(error)
        }
    },

}