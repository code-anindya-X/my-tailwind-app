const {
  getUserModel,
  addUserModel,
  editUserModel,
  deleteUserModel,
} = require("../Models/Models");

const getUser = (request, response) => {
  try {
    const userData = getUserModel();
    const responseObj = {
      total: userData.length,
      data: userData,
      message: "SUCCESS",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: "ERROR",
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};

const addUser = (request, response) => {
    const payload = { ...request.body }
  try {
    const body = payload;
    addUserModel(body);
    const responseObj = {
      message: "Data Inserted",
      status: 201,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: "ERROR",
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};

const editUser = (request, response) => {
  try {
    const body = request.body;
    const params = request.query;
    editUserModel(body, params);
    const responseObj = {
      message: "Data Edited",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: "ERROR",
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};

const deleteUser = (request, response) => {
  try {
    const params = request.query;
    deleteUserModel(params);
    const responseObj = {
      message: "Data Deleted",
      status: 200,
    };
    response.status(200).json(responseObj);
  } catch (error) {
    console.log(error.message);
    const errorObj = {
      total: 0,
      data: [],
      message: "ERROR",
      status: 400,
    };
    response.status(400).json(errorObj);
  }
};
module.exports = { getUser, addUser, editUser, deleteUser };
