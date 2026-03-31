const express = require('express');

const router = express.Router();

const{getTodos,createTodo}=require("../controller/todo.controller")

router.get("/",getTodos)
router.post("/",createTodo)

module.exports=router;
