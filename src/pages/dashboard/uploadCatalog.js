import Sidebar from "../../components/Sidebar";
import DashboardHead from "../../components/dashHead";

const CatalogUpload = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-5 flex-1 flex space-y-2 flex-col overflow-hidden">
          <DashboardHead> Add Candidates </DashboardHead>
          <div className="flex items-center justify-between border-b border-gray-200 py-5 space-x-5">

          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogUpload;
