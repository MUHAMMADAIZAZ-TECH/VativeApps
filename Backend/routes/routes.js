const routes = require("express").Router();
const productController = require("../controllers/product.controller");

//app routes
routes.post("/api/items/add",productController.addProducts);
routes.get("/api/items/get",productController.getProducts);
routes.get("/api/items/get/:id",productController.getproduct);
routes.delete("/api/items/delete/:id",productController.deleteProducts);
routes.put("/api/items/update/:id",productController.updateProducts);
module.exports = routes;
