import React from "react";
import { useNavigate } from "react-router-dom";
import * as clothesService from "../services/ClothesService";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import * as typesService from "../services/TypesService";

const List = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [types, setTypes] = useState([]);
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    getAll();
    getTypes();
  }, []);

  const getAll = async () => {
    const response = await clothesService.getAll();
    setList(response);
  };

  const getTypes = async () => {
    const response = await typesService.getAllTypes();
    setTypes(response);
  };

  const searchByName = async () => {
    const response = await clothesService.getAll(searchName, null);
    if (response.length !== 0) {
      setList(response);
    } else {
      Swal.fire({
        text: "Do not file any record with " + searchName,
        icon: "warning",
        timer: 1500,
      });
    }
    setSearchName("");
  };

  const searchByType = async () => {
    const response = await clothesService.getAll(null, searchType);
    if (response.length !== 0) {
      setList(response);
    } else {
      Swal.fire({
        text: "Do not file any record with type " + searchType,
        icon: "warning",
        timer: 1500,
      });
    }
    setSearchType("");
  };
  if (!types) {
    return null;
  }

  return (
    <>
      <section className="relative w-full h-screen">
        <div className="relative w-full p-5 mr-8 -translate-x-1/2 shadow-md sm:rounded-lg left-1/2">
          <div className="flex items-center justify-between pb-2">
            <div className="relative flex items-center justify-start w-1/6 text-gray-600">
              <input
                className="h-10 pr-6 text-sm bg-white border-2 border-gray-400 rounded-lg px-9 w-26 focus:outline-none"
                type="search"
                name="search"
                placeholder="Input name to search"
                onChange={(e) => setSearchName(e.target.value)}
              />
              <select
                name="searchType"
                className="border-black"
                onChange={(e) => {
                  setSearchType(e.target.value);
                }}
              >
                <option value="">Select type to search</option>
                {types.map((type) => {
                  return (
                    <option key={type.id} value={type.name} name="searchType">
                      {type.name}
                    </option>
                  );
                })}
              </select>
              <button
                type="button"
                className="px-5 py-1 ml-1 text-sm font-medium text-center text-red-700 border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-blue-500 dark:text-blue-50-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => searchByName()}
              >
                Search Name
              </button>
              <button
                type="button"
                className="px-5 py-1 ml-1 text-sm font-medium text-center text-red-700 border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-blue-500 dark:text-blue-50-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                onClick={() => searchByType()}
              >
                Search Type
              </button>
              {/* <div className="absolute opacity-70 left-3">
                <BsSearch className="cursor-pointer" size="{15}" />
              </div> */}
            </div>
            <p className="text-2xl text-green-900 ">Clothes List</p>
            {/* <Link
              to="/dashboard/add_service"
              className="w-1/6 px-2 py-1 text-base text-green-800 bg-green-200 border-2 border-gray-400 rounded hover:bg-green-700 hover:text-white"
            >
              Add
            </Link> */}
          </div>
          <table className="w-full text-sm text-left text-gray-800 rounded dark:text-gray-400">
            <thead className="text-sm text-white uppercase bg-gray-50 dark:bg-green-800 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date Input
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((cloth, index) => {
                return (
                  <>
                    <tr
                      key={index}
                      className="bg-white border-b hover:bg-gray-50 dark:hover:bg-green-100"
                    >
                      <th
                        scope="row"
                        className="px-6 py-3 font-semibold text-gray-800 whitespace-nowrap dark:text-gray-400"
                      >
                        {index + 1}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-3 font-semibold text-gray-800 whitespace-nowrap dark:text-gray-400"
                      >
                        {cloth.name}
                      </th>
                      <td className="px-6 py-3">{cloth.date}</td>
                      <td className="px-6 py-3">{cloth.quantity} unit</td>
                      <td className="px-6 py-3">{cloth.type}</td>
                      <td className="flex items-center justify-around gap-4 px-6 py-3">
                        <button
                          type="button"
                          className="px-5 py-1 text-sm font-medium text-center text-green-800 border border-green-800 rounded-lg hover:text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                          onClick={() => {
                            navigate(`/edit/${cloth.id}`);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="px-5 py-1 text-sm font-medium text-center text-red-700 border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <nav
          className="absolute flex items-center justify-between w-full pb-2 bottom-1"
          aria-label="Table navigation"
        >
          <span className="flex gap-2 ml-6 text-sm font-normal text-gray-900 dark:text-gray-900">
            <span className="font-semibold text-gray-900 dark:text-gray-900"></span>
            of
            <span className="font-semibold text-gray-900 dark:text-gray-900"></span>
          </span>
          <ul className="inline-flex h-8 mr-6 -space-x-px text-sm">
            <li className="w-20">
              <div className="flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-600 bg-white border border-gray-900 rounded-l-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
              </div>
            </li>
            <li className="w-20">
              <div className="flex items-center justify-center h-8 px-3 leading-tight text-gray-600 bg-white border border-gray-900 rounded-r-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
              </div>
            </li>
          </ul>
        </nav> */}
      </section>
    </>
  );
};

export default List;
