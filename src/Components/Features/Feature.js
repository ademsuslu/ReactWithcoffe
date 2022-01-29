import React from 'react';
import One from "./icons/card-icon-1.png"
import Two from "./icons/card-icon-2.png"
import There from "./icons/card-icon-3.png"

const Feature = () => {
  return <div  className="features">
    <div className="Feature">
      <img src={One} />
      <div className="desc">
        <h1>Quality coffe beans</h1>
        <p>Duis pretium gravida enim, vel nxus maximus ligula kel igor fermentum a. Sed placerat rhoncus ex id egestas.</p>
      </div>
    </div>
    <div className="Feature">
      <img src={Two} />
      <div className="desc">
        <h1>Elite coffeerince</h1>
        <p>Pellentesque tincidunt tristique neque, eget enim. Fusce at egestas libero. Cras convallis ullamcorper.</p>
      </div>
    </div>
    <div className="Feature">
      <img src={There} />
      <div className="desc">
        <h1>Feel fresh With every hot sip</h1>
        <p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare sit amet egestas.</p>
      </div>
    </div>

  </div>;
};

export default Feature;
