import React, {
  Component
} from 'react';
import './App.css';
import Header from "./components/header";
import Footer from './components/footer';
import Main from './components/main';
import {
  Route
} from "react-router-dom";
import Panier from "./components/panier";

class App extends Component {


  state = {
    panier: [],
    count: 0
  };

  addPanier = produit => {
    const newPanier = [...this.state.panier];
    newPanier.push( {
      qte : 1,
      produit : produit
    })
   this.setState({panier : newPanier})
  };

 


  ajouter = () => {
    this.setState({count : this.state.count + 1})

  };

  diminuer = () => {
    if(this.state.count > 0)
    this.setState({count : this.state.count - 1})

  };

  render() {
    return ( <div className = "App" >
      <Header count={this.state.count}/>
      <Route exact path = "/panier"
      render = {() => <Panier  add={this.ajouter} minus={this.diminuer} panier={this.state.panier}/> } />
        <Route exact path = "/" render={() => <Main addPanier={this.addPanier} add={this.ajouter}  /> } />
        <Footer />
        </div>
      );
    }
  }

  export default App;