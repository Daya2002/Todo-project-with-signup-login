// import modal

const todoSchema = require('../models/todoSchema');

exports.getTodo = async(req, res) => {
    try {
        // find all items
        todos = await todoSchema.find({});

        // responce

        res.status(200).json(
            // status: 'success',
            todos,
            // message: 'Data fethed successfully '
        )

       

    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            status: false,
            data: 'internal server error',
            message: error.message
        })

    }
}