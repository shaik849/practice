const { commentModel, newModel } = require("../Model/practiceModel")

const postData = async (req, res) => {
  try{

  }
  catch(err){
    res.status(400).json({ error: err.message})
  }
}

module.exports = {
    postData: postData
}