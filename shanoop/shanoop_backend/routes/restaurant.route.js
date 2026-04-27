var express = require("express");
var router = express.Router();
const {
  getAllRestaurant,
  getOneRestaurantById,
} = require("../services/restaurant.service");


router.get("/", async (req, res) => {
   console.log('restaurant root');
  let response = await getAllRestaurant();
  res.json(response);
});

router.get("/:restaurantId", async (req, res) => {
  let restaurantId = req?.params?.restaurantId;
  let response = await getOneRestaurantById(restaurantId);
  res.json(response);
});

module.exports = router;
