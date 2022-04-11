const fruitModel = require("../models/fruitsModel");
const peopleModel = require("../models/peoplesModel");

const createFruit = async (req, res) => {
  try {
    const Id = req.params.peopleId;
    const fruit = new fruitModel(req.body);
    const people = await peopleModel.findById(Id);
    fruit.person = people;
    await fruit.save();
    people.pointer.push(fruit);
    await people.save();
    res
      .status(200)
      .json({ message: "Fruits Created Successfully", data: fruit });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getFruit = async (req, res) => {
  try {
    const fruitId = req.params.fruitId;
    const fruit = await fruitModel.findById(fruitId);
    res.status(200).json({
      message: "All Fruits Found",
      totalFruits: fruitModel.length,
      data: fruit,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllFruit = async (req, res) => {
  try {
    const Id = req.params.peopleId;
    const getFruit = await peopleModel.findById(Id).populate("pointer");
    res.status(200).json({
      message: "Single Fruits Found",
      data: getFruit,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateFruit = async (req, res) => {
  try {
    const fruitId = req.params.fruitId;
    const updateFruit = await fruitModel.findByIdAndUpdate(
      fruitId,
      {
        name: req.body.name,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Update Successfully",
      data: updateFruit,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteFruit = async (req, res) => {
  try {
    const personId = req.params.peopleId;
    const fruitId = req.params.fruitId;
    await fruitModel.findByIdAndDelete(fruitId);
    const person = await peopleModel.findById(personId);
    person.pointer.pull(fruitId);
    person.save();
    res.status(200).json({
      message: "Delete Successfully",
      data: deleteFruit,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getFruit,
  getAllFruit,
  createFruit,
  updateFruit,
  deleteFruit,
};
