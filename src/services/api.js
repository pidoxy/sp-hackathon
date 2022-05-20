import axios from "axios";

const baseUrl = "https://decify-app.azurewebsites.net";
// let token = localStorage.getItem("afm_token");

const fetchAdmins = () => {
  return axios({
    method: "get",
    url: `${baseUrl}/Admin/create`,
  });
};

const createAdmin = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/customer`,
    data,
  });
};

const createUser = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/customer/create`,
    data,
  });
};

const fetchUsers = () => {
  return axios({
    method: "get",
    url: `${baseUrl}/customer`,
  });
};

const fetchOrders = () => {
  return axios({
    method: "get",
    url: `${baseUrl}/orderproduct`,
  });
};

const createOrder = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/order/create`,
    data,
  });
};

const fetchProducts = () => {
  return axios({
    method: "get",
    url: `${baseUrl}/product`,
  });
};

const uploadProducts = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/product/create`,
    data,
  });
};

const createOrderItems = () => {
  return axios({
    method: "get",
    url: `${baseUrl}/orderItems`,
  });
};

const uploadOrderItems = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/orderItems/create`,
    data,
  });
};

const createCart = () => {
  return axios({
    method: "get",
    url: `${baseUrl}/cart`,
  });
};

const fetchCart = (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/cart/create`,
    data,
  });
};

export {
  fetchAdmins,
  fetchUsers,
  fetchProducts,
  uploadProducts,
  createAdmin,
  createUser,
  fetchCart,
  fetchOrders,
  createCart,
  createOrder,
  createOrderItems,
  uploadOrderItems,
  
};
