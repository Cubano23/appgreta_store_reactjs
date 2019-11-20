import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getProduits } from "../service/data";
import Carousel from "./carousel";
class Main extends Component {
  state = {
    storeProducts: []
  };

  componentDidMount() {
    this.setState({ storeProducts: getProduits() });
  }

  

  render() {
    return (
      <>
        <Carousel />
        <hr />
        <section className="container">
          <h2>Le catalogue</h2>
          <div className="row d-flex justify-content-around produits">
            {this.state.storeProducts.map(item => (
              <figure key={item.id}>
                <img src={process.env.PUBLIC_URL + item.img} alt="article" />
                <figcaption>
                  <span>{item.price}&euro;</span>&nbsp;&nbsp;
                  <button
                    onClick={() => {this.props.addPanier(item);this.props.add()}}
                    className="btn btn-primary"
                  >
                    Ajouter au panier
                  </button>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default Main;
