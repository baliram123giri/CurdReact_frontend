import React, { useEffect, useState } from "react";
import EditUser from "./EditUser";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../redux/actions/user";
import AlertStatus from "../../error/AlertStatus";
import Loader from "../../Loading/Loader";

export default function Userlist() {
  //state area
  const [getUserId, setGetUserId] = useState("")
  const { users, error, loader, success } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  //function area
  const deleteUserHandler = (e) => {
    const id = e.target.closest("tr").querySelector("th").innerHTML;
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
        dispatch(deleteUser(id));
      }
    });
  };
  //sending id to editUser Component for update the details
  const getId =(e)=>{
    setGetUserId(e.target.closest("tr").querySelector("th").innerHTML)
  }
  return (
    <>
      <EditUser id={getUserId}/>
      {loader ? (
        <Loader />
      ) : error ? (
        <AlertStatus status={"danger"} msg={error} />
      ) : (
        <>
          <div className="row">
            {success && <AlertStatus status={"success"} msg={success} />}
            <div className="col-md-12">
              <div className="table-wrap">
                <table className="table table-bordered  table-hover">
                  <thead>
                    <tr>
                      <th>_id</th>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((data) => {
                      return (
                        <tr key={data._id}>
                          <th scope="row">{data._id}</th>
                          <td>{data.fullname}</td>
                          <td>{data.email}</td>
                          <td>
                            <div className="actions">
                              <button
                                onClick={getId}
                                className="btn btn-sm m-2 pink_light"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                               <i className="fas fa-edit"></i>
                              </button>
                              <button
                                onClick={deleteUserHandler}
                                className="btn btn-sm m-2 pink_light"
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {users.length <= 0 && (
                  <>
                    <div className="text-center">
                      <h5 className="text-danger">No Records!</h5>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
