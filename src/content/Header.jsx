import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper header mx-5 p-3 rounded d-flex">
        <img src="img/food.png" width="200" className="mr-4" />
        <div className="content">
          <h3 className="title">Promo Hari Ini</h3>
          <p className="subtitle">Perut kenyang, hati senang</p>
        </div>
      </div>
    )
  }
}

export default Header;