import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //delete user
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data?.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              timer: 1500,
            });
          }
        });
      }
    });
  };
  //make admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Added Success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <SectionTitle heading={"All Users"} subHeading={"Good Looking users"}/>
      <div className="flex justify-between items-center my-4">
        <h2 className="text-3xl font-bold">All Users</h2>
        <h2 className="text-2xl font-semibold">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Role</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center font-bold">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center text-red-500 font-semibold">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-yellow-500"
                    >
                      <FaUsers></FaUsers>
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button className="bg-blue-500 btn text-white px-4 py-1 rounded hover:bg-blue-600">
                    <FaEdit size={16}></FaEdit>
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="bg-red-500 btn text-white px-4 py-1 rounded ml-2 hover:bg-red-600"
                  >
                    <FaTrash size={16}></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
