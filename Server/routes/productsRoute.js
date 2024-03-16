const express = require("express")

const router = express.Router()
const Product = require("../Models/productModel")

router.get( "/getallproducts", async (req, res) => {
    try {
        const docs = await Product.find({});
        res.send(docs)
      } 
      catch (err) {
        throw res.status(400).json({message: "Something went wrong"});
      }
})

router.post("/getproductbyid",async (req, res) => {
 
  try {

    const doc = await Product.find({_id :req.body.productbyid});
    res.send(doc[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
})
router.post("/addreview", async (req, res) => {
  try {
    const { review, productId } = req.body;
    const product = await Product.findById(productId);
   
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.reviews.push(review);
    if (product.reviews.length === 0) {
      // If there are no reviews yet, set the rating to the new review's rating
      product.rating = review.rating;
    } else {
      // Calculate the average rating
      const totalRating = product.reviews.reduce((acc, curr) => acc + curr.rating, 0);
      const averageRating = totalRating / product.reviews.length;
      product.rating = averageRating;
    }
    await product.save();
    res.send("Review submitted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;