import { Router } from "express";
import { Address } from "../models/addresses.models.js";

const addressRouter = Router();

addressRouter.route("/").get((req, res) => {
  Address.find({})
    .then((addresses) => res.json(addresses))
    .catch((err) => res.status(400).json(`ERROR:${err}`));
});
addressRouter.route("/add").post((req, res) => {
  console.log(req.body);
  const username = req.body?.username || "ADMIN";
  // lastName
  const newAddress = new Address({ username });
  console.log(newAddress);
  newAddress
    .save()
    .then(() => res.json(`User Added`))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});
export default addressRouter;
