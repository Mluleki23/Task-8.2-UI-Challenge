import { useState } from "react";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Squares from "./components/squares";

import "./App.css";
import Gridboxes from "./components/Gridboxes";

function App() {
  return (
    <>
      <div className="row">
        <Heading />
      </div>
      <div className="row h-15">
        <div className="col-50">
          2
          <Squares
            title="Transform your brand"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ea. Architecto accusamus, eveniet fuga quasi id aperiam labore similique possimus eum? Similique."
            link="LEARN MORE"
          />
        </div>
        <div className="col-50">3</div>
      </div>
      <div className="row h-15">
        <div className="col-50">4</div>
        <div className="col-50">
          5
          <Squares
            title="Stand out to the right audience"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ea. Architecto accusamus, eveniet fuga quasi id aperiam labore similique possimus eum? Similique."
            link="LEARN MORE"
          />
        </div>
      </div>
      <div className="row h-15">
        <div className="col-50">6</div>
        <div className="col-50">7</div>
      </div>
      <div className="row h-20">
        <div className="col-33">8</div>
        <div className="col-33">9</div>
        <div className="col-33">10</div>
      </div>
      <div className="row h-10">
        <div className="col-25">11</div>
        <div className="col-25">12</div>
        <div className="col-25">13</div>
        <div className="col-25">14</div>
      </div>
      <div className="row h-5">
        <Footer />
      </div>
    </>
  );
}

export default App;
