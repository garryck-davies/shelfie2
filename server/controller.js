module.exports = {

getInventory: (req, res, next) => {
    const dbInstance = req.app.get('db')

    dbInstance.get_inventory()
    .then( () => res.sendStatus(200).send(inventory))
    .catch(err => {
        res.status(500).send({errorMessage: "Oh no."})
    })
    }
}