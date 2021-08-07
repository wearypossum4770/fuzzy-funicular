import { Address } from "../models/address.model.js";
const getAllAddresses = async (req, res) => {
  try {
    const addressList = await Address.find();
    res.json(addressList);
  } catch (err) {
    res.status(404).json({ message: "Todo not found", error: err.message });
  }
};
const createAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.json({ message: "Todo added successfully", address });
  } catch (err) {
    res.status(404).json({ message: "Failed to add", error: err.message });
  }
};
const updateAddress = async (req, res) => {
  try {
    let id = req.params.id;
    let address = Address.findByIdAndUpdate(id, req.body);
    res.json({ message: "updated successfully", address });
  } catch (err) {
    res.status(400).json({ message: "Failed to update", error: err.message });
  }
};
const deleteAddress = async (req, res) => {
  try {
    let id = req.params.id;
    let { delete_address_obj } = req.body;
    if (!delete_address_obj) {
      throw "Operation not allowed from this system!";
    }
    let address = Address.findByIdAndRemove(id, req.body);
    res.json({ message: "updated successfully", address });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete", error: err.message });
  }
};
export { getAllAddresses, createAddress, updateAddress, deleteAddress };
