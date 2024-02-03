import React from 'react';
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Form = () => {
    const {setUserName, LoggedInUser} = useContext(UserContext);
  return (
    <div className="w-6/12  p-2 my-8">
      <form className="bg-slate-100 shadow-md rounded p-6 px-8 pt-6 pb-8 mb-4">
        <div className="mb-4 ">
          <label className="block text-gray-700 text-lg font-semibold  mb-2" htmlFor="username">
            Name:
          </label>
          <input
            className="shadow appearance-none border h-14 rounded w-full py-2 px-3 bg-slate-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
           
            value={LoggedInUser} onChange={(event)=> setUserName(event.target.value)}
             placeholder="Please enter your name"
          />
        </div>
        <div className="mb-4 ">
          <label className="block text-gray-700 text-lg font-semibold  mb-2" htmlFor="username">
            Email:
          </label>
          <input
            className="shadow appearance-none border h-14 rounded w-full py-2 px-3 bg-slate-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Please enter your email-id"
          />
        </div>
      
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;