const router = require("express").Router();
const upload = require("../controllers/uploadController");

// Insert opportunity_name, tender_no, dates and total_awarded_value into opportunities table
router.post("/upload", upload.uploadBasic);

module.exports = router;
