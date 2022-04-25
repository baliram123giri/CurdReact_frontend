import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../../../redux/actions/user";
import AlertStatus from "../../error/AlertStatus";
import Loader from "../../Loading/Loader";

export default function EditUser({ id }) {
  //state area
  console.log(id);
  const [userData, setUserData] = useState({});
  const { user, error, loader} = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getSingleUser(id));
    }
   
  }, [dispatch, id]);
  //function area
  const userDataHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value  });
  };

  //data submiting
  const data = {fullname: userData.fullname || user.fullname, email:userData.email || user.email}
  const dataSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(id,data))
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ">
              <h5 className="modal-title ">Edit User Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {loader ? (
                <Loader />
              ) : error ? (
                <AlertStatus status={"danger"} msg={error} />
              ) : (
                <form onSubmit={dataSubmitHandler}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      required
                      name="fullname"
                      value={userData.fullname || user.fullname}
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
                      value={userData.email || user.email}
                      onChange={userDataHandler}
                      type="email"
                      className="form-control"
                    />
                  </div>
                  <button type="submit"  data-bs-dismiss="modal" className="btn pink_light m-2">
                    Save changes
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
