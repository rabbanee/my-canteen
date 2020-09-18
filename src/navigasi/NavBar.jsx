import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-light p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
          <div className="container-fluid justify-content-between align-items-center">
            <div className="row">
              <div className="col-3 d-flex align-items-center">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
                </button>
                <h1 className="h4 ml-3 mb-0 d-inline">MyKantin</h1>
              </div>
              <div className="col-5">
                <div className="inner-addon left-addon">
                  <i className="fas fa-search"></i>
                  <input type="text" className="form-control" placeholder="Cari makan Bang?" />
                </div>
              </div>
              <div className="col-4 d-flex justify-content-end align-items-center user">
                <i className="fas fa-heart"></i>
                <span className="badge bg-warning rounded-pill mx-4">3</span>
                <img src="https://avatars0.githubusercontent.com/u/48076514?s=400&v=4" width="30" height="30" />
              </div>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default NavBar;