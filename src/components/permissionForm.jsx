import React, { Component } from "react";
import SideBar from "./common/sideBar";

class PermissionForm extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-auto">
          <SideBar selectedItem="权限管理" />
        </div>
        <div className="col">
          <h1>PERMISSION FORM</h1>
        </div>
      </div>
    );
  }
}

export default PermissionForm;
