import React from "react"
import Card from "./Card"
import "./style.css"
import data from "./data"
function App() {
  const CardElements=data.map(card=>{
    return <Card 
      key={card.key}
      {...card} 
    />
  })
  return (
    <div>
      <nav>
      <img src="airbnb-logo.png" className="logo_photo" />
      </nav>
      <div>
        <center>
        <img src=" photo-grid.png" width="1200px" height="500px" className="grp_photo"/> 
        </center>
      </div>
      <div className="Title">
        Online Experiences
      </div>
      <p className="Info">
      Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      <section className="cards-list">
      {CardElements} 
      </section>
      
    </div>
  );
}

export default App;
