const { Product } = require("../models/product");
exports.addProducts = async (req, res) => {
  try {
    const product = new Product(req.body.state);
    console.log(product);
    await product.save();
    const List = await Product.find();
    res.status(200).json({ message: "Successfully Added", List: List });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getProducts = async (req, res) => {
  try {
    const Products = await Product.find();
    if (Products) {
      res.status(200).json({ message: "Bookings", Products });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getproduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ id: id });
    if (product) {
      res.status(200).json({ message: "Bookings", Product: product });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findOneAndDelete({ id: id });
    const UpdatedList = await Product.find();
    res
      .status(200)
      .json({ message: "Successfully Deleted", UpdatedList: UpdatedList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findOneAndUpdate(
      { id: id },
      { $set: req.body.state },
      { new: true }
    );
    const UpdatedList = await Product.find();
    res
      .status(200)
      .json({ message: "Successfully Updated", UpdatedList: UpdatedList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
