import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="copyright">
          <div className=" container ">
            <p className="text-center mb-0">All Reserved @copyrights</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
