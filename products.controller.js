module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body
        db.create_product([name, description, price, image_url])
            .then(result => {
                res.status(200).send(result)
            })
            .catch(error => {
                res.status(500).send(error)
            });
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db')
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db')
        db.read_products()
            .then(result => {
                res.status(200).send(result)
            })
    },
    update: (req, res, next) => {
        const db = req.app.get('db')
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
    }
};