// import modal

const todoSchema = require('../models/todoSchema');

exports.deleteTodo = async(req, res) => {
    try {
      const {id}= req.params;
      await todoSchema.findByIdAndDelete(id);


      res.status(200).json({
        status: 'success',
        message: `entry deleted successfully for id ${id}`
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