import React from "react";
import Welcome from "../common/Welcome";
import AddUser from "./Pages/AddUser";
import Userlist from "./Pages/Userlist";

export default function Homepage() {

  return (
    <>
      <Welcome>
        <div className="container my-5">
           {/* //userList  */}
           <Userlist/>
        </div>
      </Welcome>
    </>
  );
}
