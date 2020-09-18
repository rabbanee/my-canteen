import React, { Component } from 'react';

class MyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      total: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      console.log(this.props.item.pesan);
      console.log(this.props.item.harga);

      const total = this.props.item.pesan * this.props.item.harga;

      this.setState({
        list: [...this.state.list, this.props.item],
        total: this.state.total + total
      });
      console.log(this.state.total);
    }
  }

  render() {
    return (
      <div className="wrapper order">
        <h2 className="h3 mb-2">Pesanan Saya</h2>
        <div className="card p-3 mb-4">
          <p className="name">Daffa Hanif Rabbanee</p>
          <p className="saldo">Rp. 999.999.999,-</p>
          <p className="card-number mb-0">244********567</p>
        </div>

        <div className="calculate p-3">
          {
            this.state.list ? this.state.list.map((item, i) =>
              <div key={i} className="items d-flex justify-content-between align-items-center mb-3">
                <img src={item.image} width="80" />
                <p className="mb-0">{item.pesan}</p>
                <p className="mb-0">x</p>
                <p className="mb-0">Rp. {item.harga * item.pesan}</p>
              </div>
            ) : ''
          }

          <div className="items d-flex justify-content-between align-items-center mb-3">
            <div className="wrapper">
              <i className="fas fa-car-side"></i>
            </div>
            <p className="mb-0">Jakarta</p>
            <p className="mb-0">Gratis</p>
          </div>
        </div>

        <div className="total p-3 d-flex justify-content-between align-items-center">
          <p className="mb-0">Total:</p>
          <p className="mb-0 total-rp">Rp. {this.state.total}</p>
        </div>
        <div className="wrapper-btn p-3 w-100">
          <button className="btn w-100">Pesan</button>
        </div>
      </div>
    )
  }
}

export default MyOrder;