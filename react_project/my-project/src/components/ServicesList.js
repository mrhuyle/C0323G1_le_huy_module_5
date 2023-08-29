import React, { useEffect, useState } from "react";
import * as rentService from "../services/RentService";
import { BsSearch } from "react-icons/bs";

const ServicesList = () => {
  const [serviceList, setServiceList] = useState([]);
  const [totalUnits, setTotalUnits] = useState(0);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getServiceList();
    getTotalServices();
  }, []);

  const getServiceList = async () => {
    const list = await rentService.getAll("", 1);
    console.log(list);
    setServiceList(list);
  };

  const getTotalServices = async () => {
    const list = await rentService.getAll();
    const totalUnits = list.length;
    setTotalUnits(totalUnits);
  };

  const nextPage = async () => {
    const list = await rentService.getAll("", page + 1);
    console.log(page);
    console.log(list);
    setPage((prev) => prev + 1);
    setServiceList(list);
  };

  const previousPage = async () => {
    const list = await rentService.getAll("", page - 1);
    console.log(list);
    setPage((prev) => prev - 1);
    setServiceList(list);
  };

  return (
    <div className="relative w-full mr-8 -translate-x-1/2 shadow-md sm:rounded-lg left-1/2">
      <div className="flex items-center justify-between pb-2">
        <div className="relative w-1/6 text-gray-600 ">
          <input
            className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg w-26 focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <BsSearch />
          <button
            type="submit"
            className="absolute top-0 right-0 w-10 mt-5 mr-4 cursor-pointer"
          ></button>
        </div>
        <p className="text-2xl text-green-900 ">Services</p>
        <button className="w-1/6 px-2 py-1 text-base text-green-800 bg-green-300 border-2 rounded hover:bg-green-700 hover:text-white">
          Add
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-800 rounded dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-green-800 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Area
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Capacity
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
          {serviceList.map((service) => {
            return (
              <tr
                key={service.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-green-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-gray-400"
                >
                  {service.name}
                </th>
                <td className="px-6 py-4">
                  {service.area} <span>m</span>
                  <sup>2</sup>
                </td>
                <td className="px-6 py-4">{service.price + " $"}</td>
                <td className="px-6 py-4">{service.capacity} people</td>
                <td className="px-6 py-4">{service.type}</td>
                <td className="flex items-center justify-around gap-4 px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav
        className="absolute flex items-center justify-between w-full pb-2 bottom-1"
        aria-label="Table navigation"
      >
        <span className="flex gap-2 ml-2 text-sm font-normal text-gray-900 dark:text-gray-900">
          <span className="font-semibold text-gray-900 dark:text-gray-900">
            {(page - 1) * 10 + 1} -{" "}
            {10 > serviceList.length
              ? (page - 1) * 10 + serviceList.length
              : (page - 1) * 10 + 10}
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-gray-900">
            {totalUnits}
          </span>
        </span>
        <ul className="inline-flex h-8 -space-x-px text-sm">
          <li className={`w-20 ${page <= 1 ? "hidden" : null}`}>
            <div
              className="flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => previousPage()}
            >
              Previous
            </div>
          </li>
          <li className={`w-20 ${page > totalUnits / 10 ? "hidden" : null}`}>
            <div
              className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => nextPage()}
            >
              Next
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default ServicesList;
