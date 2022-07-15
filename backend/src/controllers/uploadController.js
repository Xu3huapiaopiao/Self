const upload = require("../service/uploadServices");
exports.uploadBasic = async (req, res) => {
  try {
    let body = req.body[0];

    const result = await upload.upload(body);

    // "Created"
    res.status(201).json(result);
  } catch (error) {
    // "Not acceptable"
    console.log(error);
    res.status(406).json(error);
  }
};
