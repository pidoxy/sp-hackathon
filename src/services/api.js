import axios from "axios";

const baseUrl = "https://decify-app.azurewebsites.net";
// let token = localStorage.getItem("afm_token");

const fetchAdmins = () => {
  return axios({
    method: "get",
    url: `${baseUrl}/Admin`,
  });
};

const fetchUsers = () => {
    return axios({
      method: "get",
      url: `${baseUrl}/customer`,
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

export default {
  fetchAdmins,
  fetchUsers,
  fetchProducts,
    uploadProducts,
  
};