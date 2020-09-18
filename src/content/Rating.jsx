import React, { Component } from 'react';


class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '4.7'
    };
  }

  componentDidMount() {
    const percent = parseInt(this.rating()).toString() + '%';
    this.setState({
      rating: `linear-gradient(90deg, #fc0 calc(${percent}), #c5c5c5 calc(${percent})`,
    });
    // parseInt(this.rating()).toString() + '%'
  }

  rating() {
    return (parseFloat(this.props.rating) / 5) * 100;
  }

  render() {
    return (
      <div id="rating" tabIndex="0">
        <span className="text">Rating: {this.props.rating}</span>
        <div className="star" style={{ 'background': this.state.rating }}>★★★★★</div>
      </div >
    )
  }
}

export default Rating;