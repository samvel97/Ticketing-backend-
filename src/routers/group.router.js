const express = require("express");
const { createNewGroupValidation } = require("../middlewares/formValidation.middleware");
const router = express.Router();
const {
    insertGroup,

} = require("../model/group/Group.model");
// const {
//   userAuthorization,
// } = require("../middlewares/authorization.middleware");


router.all("/", (req, res, next) => {
  // res.json({ message: "return form ticket router" });

  next();
});

// create new ticket
router.post(  "/", createNewGroupValidation, async (req, res) => {
    try {
      const groupObj = req.body;
      console.log(groupObj);

      const result = await insertGroup(groupObj);

      if (result._id) {
        return res.json({
          status: "success",
          message: "group created",
          result,
        });
      }

      res.json({
        status: "error",
        message: "Unable to create the ticket , please try again later",
      });

     
    } catch (error) {
      res.json({ status: "error", message: error.message });
    }
  }
);


module.exports = router;
