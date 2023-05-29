const indexController = require("../controller/indexController");
const {jwtMiddleware} = require("../../jwtMiddleware");

exports.indexRouter = function (app) {
    app.post("/todo", jwtMiddleware,indexController.createTodo);
    app.get("/todos", jwtMiddleware, indexController.readTodo) // /user/1/todos
    app.patch("/todo",jwtMiddleware, indexController.updateTodo);        //update
    app.delete("/todo/:todoIdx",jwtMiddleware,indexController.deleteTodo); //delete, /user/1/todo/1
}; 