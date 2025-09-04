import { useState } from "react";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Squares from "./components/squares";
import Image from "./components/image";
import Fruits from "./components/fruits";
import ClientTestimonials from "./components/ClientTestimonials";
import BottomImages from "./components/BottomImages";


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
          <Squares
            title="Transform your brand"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ea. Architecto accusamus, eveniet fuga quasi id aperiam labore similique possimus eum? Similique."
            link="LEARN MORE"
            underlyingcolour="red"
          />
        </div>
        <div className="col-50">
          <Image image="../src/assets/desktop/image-transform.jpg" />
        </div>
      </div>
      <div className="row h-15">
        <div className="col-50">
          <Image image="../src/assets/desktop/image-stand-out.jpg" />
        </div>
        <div className="col-50">
          <Squares
            title="Stand out to the right audience"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ea. Architecto accusamus, eveniet fuga quasi id aperiam labore similique possimus eum? Similique."
            link="LEARN MORE"
            underlyingcolour="yellow"
          />
        </div>
      </div>
      <div className="row h-15">
        <div className="col-50">
          <Fruits
            image="../src/assets/desktop/image-graphic-design.jpg"
            title="Graphic Design"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ."
          />
        </div>
        <div className="col-50">
          <Fruits
            image="../src/assets/desktop/image-photography.jpg"
            title="Photography"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati . "
          />
        </div>
      </div>
      <h4 className="client-title">CLIENT TESTIMONIALS</h4>
      <div className="row h-20">
        <div className="col-33">
          <ClientTestimonials
            image="../src/assets/images/image-emily.jpg"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ."
            name="Emily R."
            workname="Markrting Director"
          />
        </div>
        <div className="col-33">
          <ClientTestimonials
            image="../src/assets/images/image-thomas.jpg"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ."
            name="Thomas S"
            workname="Chief Operating Officer"
          />
        </div>
        <div className="col-33">
          <ClientTestimonials
            image="../src/assets/images/image-jennie.jpg"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero ipsum tempora, earum quibusdam provident dolor obcaecati ."
            name="Jennie F."
            workname="Business Owner"
          />
        </div>
      </div>
      <div className="row h-10">
        <div className="col-25">
          <BottomImages image="../src/assets/desktop/image-gallery-milkbottles.jpg" />
        </div>
        <div className="col-25">
          <BottomImages image="../src/assets/desktop/image-gallery-orange.jpg" />
        </div>
        <div className="col-25">
          <BottomImages image="../src/assets/desktop/image-gallery-cone.jpg" />
        </div>
        <div className="col-25">
          
          <BottomImages image="../src/assets/desktop/image-gallery-sugarcubes.jpg" />
        </div>
      </div>
      <div className="row h-5">
        <Footer />
      </div>
    </>
  );
}

export default App;
