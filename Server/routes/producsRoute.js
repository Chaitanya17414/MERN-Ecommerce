const express = require("express")

const router = express.Router()
const product = require("../Models/productModel")

router.get( "/getallproducts", async (req, res) => {
    try {
        const docs = await product.find({});
        res.send(docs)
      } 
      catch (err) {
        throw res.status(400).json({message: "Something went wrong"});
      }
})

router.post("/getproductbyid",async (req, res) => {
 
  try {

    const doc = await product.find({_id :req.body.productbyid});
    res.send(doc[0]);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
})

module.exports = router;