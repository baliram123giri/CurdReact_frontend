import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../redux/actions/user";
import Welcome from "../../common/Welcome";
import AlertStatus from "../../error/AlertStatus";
import Loader from "../../Loading/Loader";

export default function AddUser() {
  //state area
  const [userData, setUserData] = useState({});
  const {  error, success, loader } = useSelector((state) => state);
  const dispatch = useDispatch();
  //function area
  const userDataHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  //data submiting
  const dataSubmitHandler = (e) => {
      e.preventDefault()
     dispatch(createUser(userData))
  };
  return (
    <Welcome>
      <div className="adduser container my-5">
     {loader ? <Loader/> : error ?   <AlertStatus status={"danger"} msg={error} /> : success && <AlertStatus status={"success"} msg={success} />}
        <div className="row">
          <div className="col-12 col-md-5 mx-auto p-4 bg-white shadow rounded-3">
            <div className="text-center">
            <h5>Add User</h5>
            </div>
            <form onSubmit={dataSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                 required
                  name="fullname"
                  value={userData.fullname || ""}
                  onChange={userDataHandler}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email
                </label>
                <input
                 required
                  name="email"
                  value={userData.email || ""}
                  onChange={userDataHandler}
                  type="email"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn  pink_light">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </Welcome>
  );
}
