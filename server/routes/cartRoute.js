// import mongoose from 'mongoose';
import express from 'express';
import authUser from '../middlewares/authUser.js';
import { updateCart } from '../controllers/cartController.js';
import { getAllOrders, getUserOrders } from '../controllers/orderController.js';
import authSeller from '../middlewares/authSeller.js';

const cartRouter = express.Router();

cartRouter.post('/update', authUser, updateCart)
cartRouter.get('/user', authUser, getUserOrders)
cartRouter.get('/seller', authSeller, getAllOrders)

export default cartRouter;