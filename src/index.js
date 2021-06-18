import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


ReactDOM.render(
<>
<div className="cards">
  <div className="card">
    <img src="https://occ-0-1217-1218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABexf5k-uagTAnO2W57VCeMOdM_x9BImT0FEYglDzxQpzSxl7Qk6czu88nNuzHaDQ0mYQlR_9k08e4GWMmrQ53MG89y9voICbiD-Jv3_unXVww--olj2XmxJ35Wny.jpg?r=260" alt="" className="card_img"/>
    <div className="card_info">
      <span className="card_category"> Netflix Original </span>
      <h3 className="card_title">DARK</h3>
      <a href="https://www.netflix.com/watch/81090319?tctx=2%2C2%2C%2C%2C%2C" target="_blank"><button>Watch Now</button>
      </a>
    </div>
  </div>
</div>
</>
 ,
  document.getElementById('root')
);


