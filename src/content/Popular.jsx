import React, { Component } from 'react';
import Rating from './Rating';

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      popular: '',
      item: '',
    };
  }

  getAllPopular() {
    return fetch(`${this.state.base_url}populer/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ popular: responseJson.data });
      })
      .catch(error => 'error')
  }

  onClickHandler = e => {
    this.props.onShowModal(e);
  }


  componentDidMount() {
    this.getAllPopular();
  }

  componentDidUpdate(props) {
    if (props.popular !== this.props.popular) {
      this.setState({ popular: this.props.popular });
    }
  }

  render() {
    return (
      <div className="wrapper-popular p-5">
        <h2 className="h3">Popular</h2>
        <div className="row">
          {
            this.state.popular ? this.state.popular.map((item, i) =>
              <div key={i} className="col-4 mb-2" >
                <a href="" className="a-popular" data-toggle="modal" data-target="#pesanModal" onClick={_ => this.onClickHandler(item)}>
                  <div className="card">
                    <div className="wrapper-img-popular">
                      <img src={item.image} className="img-popular" alt="" />
                      <p className="time">{item.waktu}</p>
                    </div>
                    <div className="card-body">
                      <h4 className="h5">{item.name}</h4>
                      <div className="wrapper d-flex">
                        <p className="mr-2">⭐ {item.rating}</p>
                        <p>Rp. {item.harga}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

            ) : ''
          }
        </div>
      </div>
    )
  }
}

export default Popular;