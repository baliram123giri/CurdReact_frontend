import React from "react";

export default function AlertStatus({ msg, status }) {
  return (
    <div className="container">
      <div className="row">
        <div className={`alert alert-${status}`} role="alert">
          {msg}
        </div>
      </div>
    </div>
  );
}
