import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/usemenu";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (item) => {
    // console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data?.deletedCount) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 1500,
          });
        }
      }
    });
  };
//   const handleUpdate = (item) => {};

  return (
    <div>
      <SectionTitle
        heading={"Manage All Items"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
      <div className="overflow-x-auto mx-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{item.name}</td>
                <td className="font-bold">{item.price}</td>
                <td className="flex justify-center">
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button
                    //   onClick={() => handleUpdate(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaEdit></FaEdit>
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-600" size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
