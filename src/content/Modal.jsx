import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: '',
      item: null,
    };
  }

  componentDidMount() {
    this.setState({
      item: this.props.item
    })
    console.log(this.props.item);
  }

  componentDidUpdate(props) {
    if (this.props.item !== props.item) {
      console.log(props);
      this.setState({
        item: this.props.item
      })
    }
  }

  onClickHandler = e => {
    const input = document.querySelector('.number');
    let total = parseInt(input.value);


    if (e === '+') {
      if (this.state.item.jumlah === 0) {
        return;
      }
      this.setState({
        item: {
          name: this.state.item.name,
          harga: this.state.item.harga,
          waktu: this.state.item.waktu,
          jumlah: this.state.item.jumlah - 1,
          rating: this.state.item.rating,
          image: this.state.item.image,
          pesan: this.state.item.pesan + 1
        }
      });
      input.value = `100`;
      return;
    }

    if (this.state.item.pesan === 0) {
      return;
    }
    input.value = total - 1;
    this.setState({
      item: {
        name: this.state.item.name,
        harga: this.state.item.harga,
        waktu: this.state.item.waktu,
        jumlah: this.state.item.jumlah + 1,
        rating: this.state.item.rating,
        image: this.state.item.image,
        pesan: this.state.item.pesan - 1
      }
    });

  }

  onOrderHandler = e => {
    this.props.onOrderHandler(this.state.item);
    console.log(this.state.item);
  }

  render() {
    return (
      <div className="modal fade" id="pesanModal" tabIndex="-1" aria-labelledby="pesanModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body d-flex justify-content-center flex-column">
              <img src={this.state.item ? this.state.item.image : 'https://belajar-react.smkmadinatulquran.sch.id/image/masakan1.jpg'} className="img-modal img-thumbnail" />
              <h3>{this.state.item ? this.state.item.name : ''}</h3>
              <div className="wrapper d-flex">
                <p className="mr-2">⭐ {this.state.item ? this.state.item.rating : ''}</p>
                <p>Rp. {this.state.item ? this.state.item.harga : ''}</p>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-around">
              <p className="stock">Stock: {this.state.item ? this.state.item.jumlah : ''}</p>
              <div className="wrapper">
                <button type="button" className="btn btn-orange" onClick={_ => this.onClickHandler('-')}> - </button>
                <input type="text" className="number text-center" disabled value={this.state.item ? this.state.item.pesan : ''} />
                <button type="button" className="btn btn-orange" onClick={_ => this.onClickHandler('+')}>+</button>
                <button type="button" className="btn btn-orange ml-2" data-dismiss="modal" onClick={this.onOrderHandler}>Pesan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;