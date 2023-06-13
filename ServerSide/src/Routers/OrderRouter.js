const express =require("express");
const router = express.Router();
const cors = require("cors");

const {postOrder, getOrders, deleteOrder, updateOrder} = require("../Controller/OrderController");

router.post('/', postOrder);
router.get('/id', getOrders);
router.delete('/id', deleteOrder);
router.put('/id', updateOrder);


module.exports = router;