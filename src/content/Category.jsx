import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      base_url: 'https://belajar-react.smkmadinatulquran.sch.id/api/',
      categories: '',
    };
  }

  getAllCategories() {
    return fetch(`${this.state.base_url}category/all`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ categories: responseJson.data });
      })
      .catch(error => 'error')
  }


  componentDidMount() {
    this.getAllCategories();
    console.log(this.state.categories);
  }

  onClickHandler = (e) => {
    this.props.popular(e);
  }

  render() {
    return (
      <div className="wrapper-category p-5">
        <h2 className="h3">Kategori</h2>
        <div className="row">
          {

            this.state.categories ? this.state.categories.map(category =>
              <div key={category.id} className="col-3 rounded" onClick={_ => this.onClickHandler(category.id)}>
                <img src={category.img} alt="" />
                <p className="title">{category.name}</p>
              </div>

            ) : <p></p>
          }

        </div>
      </div>
    )
  }
}

export default Category;