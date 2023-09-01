// import modal

const todoSchema = require('../models/todoSchema');

exports.updateTodo = async(req, res) => {
    try {
        // find all items

        const {id} = req.params;
        const {title, description} = req.body;

        
        const todos = await todoSchema.findByIdAndUpdate(
            {_id : id},
            {title, description,updatedAt : Date.now()}
            
        )
            // responce
        res.status(200).json({
            status: 'success',
            data:todos,
            message: `entry updated successfully for id ${id}`
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