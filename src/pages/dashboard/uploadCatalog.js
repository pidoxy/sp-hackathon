import Sidebar from "../../components/Sidebar";
import DashboardHead from "../../components/dashHead";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.min.css";
import { useState } from "react";

const CatalogUpload = () => {
  const [productData, setProductData] = useState({});

  const { Dragger } = Upload;

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-5 flex-1 flex space-y-2 flex-col overflow-hidden">
          <DashboardHead> Add Products </DashboardHead>
          <form className="flex items-center justify-between border-b border-gray-200 py-5 space-x-5">
            <div className="w-full max-w-lg">
              <div className="flex space-y-3 flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block tracking-wide text-gray-700 text-md font-bold mb-2"
                    htmlFor="product"
                  >
                    Product Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="product"
                    type="text"
                    placeholder="Jane"
                    value={productData.productName}
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        productName: e.target.value,
                      });
                    }}
                  />
                  <p className="text-slate-500 text-xs italic">
                    Do not Exceed 20 characters when entering the product name.
                  </p>
                </div>
                <div className="w-full md:w-2/3 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-md font-bold mb-2"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="category"
                    value={productData.category}
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        category: e.target.value,
                      });
                    }}
                  >
                    <option>Sneakers</option>
                    <option>Dress</option>
                    <option>Smart Gadgets</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-md font-bold mb-2"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="category"
                    value={productData.gender}
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        gender: e.target.value,
                      });
                    }}
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Do not wish to disclose</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-md font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Brand
                  </label>
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="brand"
                    value={productData.brand}
                    onChange={(e) => {
                      setProductData({ ...productData, brand: e.target.value });
                    }}
                  >
                    <option defaultValue={""}>Nike</option>
                    <option>Adiddas</option>
                    <option>Puma</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    Description
                  </label>
                  <textarea
                    value={productData.description}
                    onChange={(e) => {
                      setProductData({
                        ...productData,
                        description: e.target.value,
                      });
                    }}
                    className="resize-none rounded-md appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="w-full max-w-lg">
              <div className="flex space-y-3 flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <label
                    className="block tracking-wide text-gray-700 text-md font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Product Images
                  </label>
                </div>
                <div className="flex justify-center mt-8">
                  <div className="rounded-lg shadow-xl bg-gray-50 ">
                    <div className="m-4">
                      <label className="inline-block mb-2 text-gray-500">
                        Upload Image(jpg,png,svg,jpeg)
                      </label>
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">
                          Click or drag file to this area to upload
                        </p>
                        <p className="ant-upload-hint">
                          Support for a single or bulk upload. Strictly prohibit
                          from uploading company data or other band files
                        </p>
                      </Dragger>
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-xs italic">
                  Upload up to 5 images of the product. Pay attention to the
                  quality of the images you add, comply withthe background color
                  standards. Pictures must be in certain dimensions. Notice that
                  the product shows all its details
                </p>
              </div>
              <div className="flex space-y-3 flex-wrap -mx-3 ">
                <div className="w-full flex flex-wrap mb-6">
                  <label
                    className="block tracking-wide text-gray-700 text-md font-bold mb-2"
                    htmlFor="size"
                  >
                    Add Size
                  </label>
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="size"
                    value={productData.size}
                    onChange={(e) => {
                      setProductData({ ...productData, size: e.target.value });
                    }}
                  >
                    <option>EU-44</option>
                    <option>EU-42</option>
                    <option>EU-46</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <button
                    className="shadow bg-sky-800 hover:bg-sky-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                      console.log(productData);
                    }}
                  >
                    Add Product
                  </button>
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <button
                    className="shadow bg-sky-800 hover:bg-sky-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    disabled
                  >
                    Save Product
                  </button>
                </div>
                <div className="w-full md:w-1/3 px-3">
                  <button
                    className="shadow bg-sky-800 hover:bg-sky-600 disabled:opacity-75 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    disabled
                  >
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CatalogUpload;
