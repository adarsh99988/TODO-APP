const Todo=require("../models/todo.model")
const createTodo = async (req, res) => {
    const todo=await Todo.create(req.body)
    try {
        const todo = await Todo.create(req.body)
    } catch (error) {
        res.status(500).json({"error":error.message})
    }
}
const getTodos=async(req,res)=>{
    try {
        const todos=await Todo.find()
        res.status(200).json(todos)
    }
    catch (error) {
        res.status(500).json({"error":error.message})
    }
}
module.exports={createTodo, getTodos}