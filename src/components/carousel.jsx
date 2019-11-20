import React, { Component } from 'react';
import sport from '../images/smartphone.jpg';
import vetements from '../images/tablettes.jpg';
import hi_tech from '../images/tv.jpeg';

class Carousel extends Component {
    state = {  }
    render() { 
        return (
            <section className="container">
               
                <div id="myCarousel" className="carousel slide   " data-ride="carousel">             
                <ul className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ul>           
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                    <img src={sport}  alt="sport" />
                    </div>
                    <div className="carousel-item">
                    <img src={vetements}  alt="vetements" />
                    </div>
                    <div className="carousel-item">
                    <img src={hi_tech}  alt="hi_tech" />
                    </div>
                </div>           
                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
                </div>
            
            </section>
          );
    }
}
 
export default Carousel;