// import modal

const todoSchema = require('../models/todoSchema');

exports.createTodo = async(req, res) => {
    try {
        const { title, description } = req.body;
        const responce = await todoSchema.create({ title, description });

        res.status(200).json({
            status: 'success',
            data: responce,
            message: 'entry created successfully '
        })


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
