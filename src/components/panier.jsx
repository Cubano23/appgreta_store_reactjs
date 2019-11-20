import React from "react";
import { Link } from "react-router-dom";
const Panier = props => {
  return (
    <>
      <section className="container">
        <h1>Panier</h1>
       
        {props.panier.map(el => (
          <div>
            <span>{el.produit.title}</span>
            <p>{el.produit.price}&nbsp;&euro;</p>
            <img src={process.env.PUBLIC_URL + el.produit.img} alt="article" />
            <button className="btn btn-success m-2" onClick={props.add}>
              +
            </button>
            <span className="badge badge-primary ml-2"></span>
            <button className="btn btn-warning m-2" onClick={props.minus}>
              -
            </button>
           
          </div>
        ))}
    
         <Link to="/panier" className="btn btn-primary">
              Passer au paiement
         </Link>
        
      </section>
    </>
  );
};

export default Panier;
