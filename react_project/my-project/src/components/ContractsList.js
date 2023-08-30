import React from "react";
import { useState, useEffect } from "react";
import * as contractService from "../services/ContractService";
import Swal from "sweetalert2";
import { BsSearch } from "react-icons/bs";

const ContractsList = () => {
  const [contractList, setContractList] = useState([]);
  const [totalUnits, setTotalUnits] = useState(0);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [refreshPage, setRefreshPage] = useState(true);
  useEffect(() => {
    getList();
    getTotal();
    setPage(1);
  }, [refreshPage]);

  const getList = async () => {
    const list = await contractService.getAll("", 1);
    console.log(list);
    setContractList(list);
  };

  const getTotal = async () => {
    const list = await contractService.getAll();
    const totalUnits = list.length;
    setTotalUnits(totalUnits);
  };

  const nextPage = async () => {
    const list = await contractService.getAll(searchName, page + 1);
    console.log(page);
    console.log(list);
    setPage((prev) => prev + 1);
    setContractList(list);
  };

  const previousPage = async () => {
    const list = await contractService.getAll(searchName, page - 1);
    console.log(list);
    setPage((prev) => prev - 1);
    setContractList(list);
  };

  const deleteContract = (contract) => {
    Swal.fire({
      title: "Delete Confirmation",
      icon: "question",
      text: "Do you want to delete: " + contract.id,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Yes, delete it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await contractService.deleteObject(contract);
        if (response.status === 200) {
          Swal.fire({
            text: "Delete successfully " + contract.name,
            icon: "success",
            timer: 1500,
          });
          setRefreshPage((prev) => !prev);
        } else {
          Swal.fire({
            text: "You choose cancel ",
            icon: "warning",
            timer: 1500,
          });
        }
      }
    });
  };

  const handleEnter = async (event) => {
    if (event.key === `Enter`) {
      const list = await contractService.getAll(searchName, 1);
      const listAll = await contractService.getAll(searchName);
      if (listAll.length !== 0) {
        setPage(1);
        setTotalUnits(listAll.length);
        setContractList(list);
      } else {
        setSearchName("");
        Swal.fire({
          text: "Do not find any record with search string: " + searchName,
          icon: "warning",
        });
        setRefreshPage((prev) => !prev);
      }
    }
  };
  const handleClickSearch = async () => {
    const list = await contractService.getAll(searchName, 1);
    const listAll = await contractService.getAll(searchName);
    if (listAll.length !== 0) {
      setPage(1);
      setTotalUnits(listAll.length);
      setContractList(list);
    } else {
      setSearchName("");
      Swal.fire({
        text: "Do not find any record with search string: " + searchName,
        icon: "warning",
      });
      setRefreshPage((prev) => !prev);
    }
  };
  return (
    <div className="relative w-full mr-8 -translate-x-1/2 shadow-md sm:rounded-lg left-1/2">
      <div className="flex items-center justify-between pb-2">
        <div className="relative flex items-center justify-start w-1/6 text-gray-600">
          <input
            className="h-10 pr-6 text-sm bg-white border-2 border-gray-400 rounded-lg px-9 w-26 focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            value={searchName}
            onKeyDown={(event) => handleEnter(event)}
            onChange={(event) => setSearchName(event.target.value)}
          />
          <div className="absolute opacity-70 left-3">
            <BsSearch
              className="cursor-pointer"
              size={15}
              onClick={() => handleClickSearch()}
            />
          </div>
        </div>
        <p className="text-2xl text-green-900 ">Contracts</p>
        <button className="w-1/6 px-2 py-1 text-base text-green-800 bg-green-200 border-2 border-gray-400 rounded hover:bg-green-700 hover:text-white">
          Add
        </button>
      </div>

      <table className="w-full text-sm text-left text-gray-800 rounded dark:text-gray-400">
        <thead className="text-sm text-white uppercase bg-gray-50 dark:bg-green-800 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Code
            </th>
            <th scope="col" className="px-6 py-3">
              Start Date
            </th>
            <th scope="col" className="px-6 py-3">
              End Date
            </th>
            <th scope="col" className="px-6 py-3">
              Deposit
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {contractList.map((contract) => {
            return (
              <tr
                key={contract.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-green-100"
              >
                <th
                  scope="row"
                  className="px-6 py-3 font-semibold text-gray-800 whitespace-nowrap dark:text-gray-400"
                >
                  {contract.code}
                </th>
                <td className="px-6 py-3">{contract.startDate}</td>
                <td className="px-6 py-3">{contract.endDate}</td>
                <td className="px-6 py-3">{contract.deposit + " $"}</td>
                <td className="px-6 py-3">{contract.total + " $"}</td>
                <td className="flex items-center justify-around gap-4 px-6 py-3">
                  <button
                    type="button"
                    className="px-5 py-1 text-sm font-medium text-center text-green-800 border border-green-800 rounded-lg hover:text-white hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="px-5 py-1 text-sm font-medium text-center text-red-700 border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                    onClick={() => {
                      deleteContract(contract);
                    }}
                  >
                    Delete
                  </button>
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
        <span className="flex gap-2 ml-6 text-sm font-normal text-gray-900 dark:text-gray-900">
          <span className="font-semibold text-gray-900 dark:text-gray-900">
            {(page - 1) * 10 + 1} -{" "}
            {10 > contractList.length
              ? (page - 1) * 10 + contractList.length
              : (page - 1) * 10 + 10}
          </span>
          of
          <span className="font-semibold text-gray-900 dark:text-gray-900">
            {totalUnits}
          </span>
        </span>
        <ul className="inline-flex h-8 mr-6 -space-x-px text-sm">
          <li className={`w-20 ${page <= 1 ? "invisible" : null}`}>
            <div
              className="flex items-center justify-center h-8 px-3 ml-0 leading-tight text-gray-600 bg-white border border-gray-900 rounded-l-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => previousPage()}
            >
              Previous
            </div>
          </li>
          <li
            className={`w-20 ${page >= totalUnits / 10 ? "invisible" : null}`}
          >
            <div
              className="flex items-center justify-center h-8 px-3 leading-tight text-gray-600 bg-white border border-gray-900 rounded-r-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-white"
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
export default ContractsList;
