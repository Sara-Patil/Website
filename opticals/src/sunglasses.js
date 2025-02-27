
// ImageRow.js
import React, { useState } from 'react';
import './Product.css'; // Import your custom CSS file
 import img1 from'./assets/women.jpg';
 import img2 from'./assets/menspects.jpg';
 import img3 from'./assets/unisex.jpg';
 import img5 from './assets/img5.png';
 import Catlogue from './Catlogue';
import CatlogueWoman from './Catloguewomen';
import Unisex from './Unisex';
import SunglassAll from './SunglassAll';
import SunglassMen from './SunglassMen';
import Sunglasswomen from './Sunglasswomen';
import Sunglassunisex from './Sunglassunisex';
//  import img2 from'./Men spects2.jpg';


const ImageRow = () => {

  const [showCatalogue4, setShowCatalogue4] = useState(false);

  const showCataloguePage4 = () => {
    setShowCatalogue4(true);
    setShowCatalogue5(false);
    setShowCatalogue6(false);
    setShowCatalogue7(false);
  };

  const [showCatalogue5, setShowCatalogue5] = useState(false);

  const showCataloguePage5 = () => {
    setShowCatalogue5(true);
    setShowCatalogue4(false);
    setShowCatalogue6(false);
    setShowCatalogue7(false);
  };

  const [showCatalogue6, setShowCatalogue6] = useState(true);

  const showCataloguePage6 = () => {
    setShowCatalogue6(true);
    setShowCatalogue4(false);
    setShowCatalogue5(false);
    setShowCatalogue7(false);
  }

  const [showCatalogue7, setShowCatalogue7] = useState(false);

  const showCataloguePage7 = () => {
    setShowCatalogue7(true);
    setShowCatalogue4(false);
    setShowCatalogue6(false);
    setShowCatalogue5(false);
  };

  return (
    <div className="image-row-container">
      <h2 className="my-4">CATEGORY</h2>
      <div className="image-row">
      
      <div className="image-item" onClick={showCataloguePage5}>
          {/* <a href='/Catalogue'><img src={img1} alt="Women's Optical Frame" className="img" /></a> */}
          <img src={img1} alt="Women's Optical Frame" className="img" />
          <p>Women</p>
        </div>

        <div className="image-item" onClick={showCataloguePage4}>
          <img src={img2} alt="men's Optical Frame" className="img" />
          <p>Men</p>
        </div>

        <div className="image-item" onClick={showCataloguePage7}>
          <img src={img5} alt="unisex Optical Frame" className="img" />
          <p>UNISEX</p>
        </div>


        <div className="image-item"  onClick={showCataloguePage6}>
          <img src={img3} alt="All Optical Frame" className="img" />
          <p>ALL</p>
        </div>
      
      </div>
      {showCatalogue4 && <SunglassMen/>}
      {showCatalogue5 && <Sunglasswomen/>}
      {showCatalogue6 && <SunglassAll />}
      {showCatalogue7 && <Sunglassunisex/>}  

      </div>
    
  );
};



export default ImageRow;



