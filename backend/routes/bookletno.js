const express = require("express");
const router = express.Router();
const BookletNo = require("../models/BookletNo");

router.get("/", async (req, res) => {
  try {
    const bookletno = await BookletNo.find();
    res.status(200).json({
      data: bookletno,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const bookletno = await BookletNo.findById(req.params.id);

    res.status(200).json({
      data: bookletno,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const bookletno = new BookletNo(req.body);
    const newbookletno = await bookletno.save();
    res.status(200).json({
      data: newbookletno,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});


router.post("/bookletno",async (req, res)=>{
  try{
    const newUser=await BookletNo.findOne({email:req.body.email})
    if(newUser){
      if(newUser.password===req.body.password){
        res.status(200).json({
          msg:"ok",
          data:newUser,
        })

      }else{
        res.status(200).json({
          msg:"inccorect password",
        })
      }
    }else{
      res.status(200).json({
        msg:"invalid user"
      })
    }
  }catch (err){
    console.log(err)
    res.status(500).send("server error")
  }
})

router.put("/:id", async (req, res) => {
  try {
    const bookletno = await BookletNo.findById(req.params.id);

    if (!bookletno) {
      return res.status(400).json({ message: "BookletNo does not exist" });
    }
    bookletno.bookletNo = req.body.bookletNo || bookletno.bookletNo;
    bookletno.pageNo = req.body.pageNo || bookletno.pageNo;
    const updatedBookletNo = await bookletno.save();

    res.status(200).json({
      data: updatedBookletNo,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await BookletNo.findByIdAndRemove(req.params.id);

    res.status(200).json({
      message: "BookletNo is deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;