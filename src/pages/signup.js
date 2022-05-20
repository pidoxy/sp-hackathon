import { LockClosedIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { createAdmin, createUser } from "../services/api";

const Signup = () => {
  const [userData, setUserData] = useState({account: "" , firstname: "", lastname: "", email: "", 
  password: "", phoneNo: "", 
 });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);

    if(userData.account === "consumer"){
    createUser({firstName: userData.firstname, lastName: userData.lastname, Email: userData.email, phoneNo: userData.phoneNumber})
      .then((res) => {
        console.log(res);
        alert("Signup as consumer successful")
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => console.log(false));
    }else if(userData.account === "admin"){
    createAdmin(userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("Signup as admin successful")

      })
      .finally(() => console.log(false));
    } else {
      console.log("error")
      alert("Fill in all details")
    }

    if(!userData.account){
      alert("Choose a type of account")
    } else if(!userData.email){
      alert("Input your email")
    } else if(!userData.firstname || !userData.lastname){
      alert("Inputyour name")
    } else if(!userData.password){
      alert("Input your Password")
    } else{
      return null;
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up to create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="firstname"
                  autoComplete="firstname"
                  value={userData.firstname}
                  onChange={(e) => {
                    setUserData({ ...userData, firstname: e.target.value });
                  }}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="lastname"
                  autoComplete="lastname"
                  required
                  value={userData.lastname}
                  onChange={(e) => {
                    setUserData({ ...userData, lastname: e.target.value });
                  }}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Phone No
                </label>
                <input
                  id="phoneNo"
                  name="phoneNo"
                  type="text"
                  autoComplete="phoneNo"
                  required
                  value={userData.phoneNo}
                  onChange={(e) => {
                    setUserData({ ...userData, phoneNo: e.target.value });
                  }}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone No"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={userData.password}
                  onChange={(e) => {
                    setUserData({ ...userData, password: e.target.value });
                  }}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label
                  htmlFor="countries"
                  className="sr-only"
                >
                  Select an option
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 rounded-b-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm block w-full p-2.5 "
                value={userData.account}
                onChange={(e)=>setUserData({...userData, account: e.target.value })}
                >
                  <option defaultValue={""}>Admin or Consumer</option>
                  <option value="admin">Admin</option>
                  <option value="consumer">Consumer</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleSubmit}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
