const peopleModel = require("../models/peoplesModel");

const getPeople = async (req, res) => {
  try {
    const getPeople = await peopleModel.find();
    res.status(200).json({
      message: "All People Found",
      totalPeople: peopleModel.length,
      data: getPeople,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllPeople = async (req, res) => {
  try {
    const id = req.params.id;
    const getPeople = await peopleModel.findById(id);
    res.status(200).json({
      message: "Single People Found",
      data: getPeople,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createPeople = async (req, res) => {
  try {
    const createPeople = await peopleModel.create(req.body);
    res
      .status(200)
      .json({ message: "People Created Successfully", data: createPeople });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePeople = async (req, res) => {
  try {
    const id = req.params.id;
    const updatePeople = await peopleModel.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        course: req.body.course,
      },
      { new: true }
    );
    res.status(200).json({
      message: "Update Successfully",
      data: updatePeople,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePeople = async (req, res) => {
  try {
    const id = req.params.id;
    const deleting = await peopleModel.findById(id);
    const deletePeople = await deleting.deleteOne();
    res.status(200).json({
      message: "Delete Successfully",
      data: deletePeople,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPeople,
  getAllPeople,
  createPeople,
  updatePeople,
  deletePeople,
};
