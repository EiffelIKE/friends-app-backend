const express = require("express");

const response = require("../../../network/response");
const { friends } = require("../../../store/dummyDb");
const controller = require("./controller");

const router = express.Router();

//CRUD's
router.get("/", listFriends);
router.post("/", createFriend);
router.get("/:id",getOneFriend);
router.patch("/:id", editOneFriend);
router.delete("/:id", deleteOneFriend);

//Functions
function listFriends (req, res) {
  const list = controller.list()
  const selectedData = list.map(item => (
    {
      id: item.id,
      img: item.img,
      first_name: item.first_name,
      last_name: item.last_name,
      status: item.statuses[0],
      available: item.available
    }
  ));
  response.handler(req, res, selectedData, 200 )
}

function createFriend (req, res) {
  const { body } = req
  controller.addFriend(body)
  response.handler(req, res, "Friend successfully created", 201)
}

function getOneFriend (req, res) {
  const { id } = req.params;
  if(!id) {
    response.error(req, res, "ID is required", 400);
  } else {
    const friend = controller.getFriend(parseInt(id));
    response.handler(req, res, friend);
  }
}

function editOneFriend (req, res) {
  const { id } = req.params;
  const { body } = req;
  if(!id) {
    response.error(req, res, "ID is required", 400);
  } else {
    const friend = controller.editFriend(parseInt(id), body);
    response.handler(req, res, friend);
  }
}

function deleteOneFriend (req, res) {
  const { id } = req.params
  if (!id) {
    response.error(req, res, "ID is required", 400);
  } else {
   const message = controller.deleteFriend(parseInt(id));
    response.handler(req, res, message);
  }
}

module.exports = router;
