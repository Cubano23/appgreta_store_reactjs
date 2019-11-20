import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = props => {

    return (
      <>
        <header>
          
            <h1 className="App-logo"><img src={logo}  alt="logo" /><p>Store</p></h1>
    
            <Link to="/panier" className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <p className="panier">Panier&nbsp;<span className="badge badge-success ml-2">{props.count}</span></p>
            </Link >
         
             
          <div className="container">
            <input className="burger-check" id="burger-check" type="checkbox" />
            <label htmlFor="burger-check" className="burger"></label>
            <nav id="navigation1" className="navigation">
              <ul>
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="#">Smartphones</Link>
                </li>
                <li>
                  <Link to="#">Tablettes</Link>
                </li>
                <li>
                  <Link to="#">PC</Link>
                </li>
                <li>
                  <Link to="/panier">Mon Panier</Link>
                </li>
                <li>
                  <Link to="#">Nous contacter</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }


export default Header;
