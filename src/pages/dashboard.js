import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardHead from "../components/dashHead";
import { Route, Routes } from "react-router-dom";
import CatalogUpload from "./dashboard/uploadCatalog";

const Dashboard = () => {
  let amount = 45890;
  let invoice = [
    { amount: "45,890", date: "2020-01-01", status: "Overdue" },
    { amount: "45,890", date: "2020-01-01", status: "Total Oustanding" },
    { amount: "45,890", date: "2020-01-01", status: "In process" },
    { amount: "45,890", date: "2020-01-01", status: "Paid Today" },
  ];
  return (
    <>
      <Header />

      <Routes>
        {/* Main Dashboard */}
        <Route
          path="/"
          element={
            <CatalogUpload />
          }
        />
        {/* Add products page */}
        <Route
          path="/add-product"
          element={
            <div className="flex">
              <Sidebar />
              <div className="p-5 flex-1 flex space-y-2 flex-col overflow-hidden">
                <DashboardHead >Add Products </DashboardHead>
                <p>Invoices</p>
                <div className="flex items-center justify-between border-b border-gray-200 py-2">
                  {invoice.map((item, index) => (
                    <div key={index} className="flex flex-col items-start">
                      {/* <p className="text-sm font-medium">{item.date}</p> */}
                      <p className="text-lg font-semibold">{item.amount}</p>
                      <p className="text-sm font-medium">{item.status}</p>
                    </div>
                  ))}{" "}
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 py-5 space-x-5">
                  <a
                    href="/"
                    className="block w-1/3 h-40 p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Total Balance
                    </h5>
                    <p className="font-normal items-center text-gray-700 dark:text-gray-400">
                      {amount}
                    </p>
                    <div className="flex mt-4 space-x-3 lg:mt-6">
                      <a
                        href="/"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add friend
                      </a>
                      <a
                        href="/"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                      >
                        Message
                      </a>
                    </div>
                  </a>

                  <a
                    href="/"
                    className="block w-1/3 h-40 p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Upcoming Payments
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {amount}
                    </p>
                  </a>

                  <a
                    href="/"
                    className="block w-1/3 h-40 p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Finished Appt.
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {amount}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <>
              <div className="flex">
                <Sidebar />
                <div className="py-10 px-4 flex flex-col items-center justify-center bg-slate-100 md:flex-row space-y-5 md:space-y-0 md:space-x-5 w-screen h-screen">
                  <p>There's nothing here!</p>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Dashboard;
