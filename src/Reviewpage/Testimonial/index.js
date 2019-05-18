import React from 'react'
import "./index.css";


const Testimonial = (props) => {
  return(<>

    <div className="reviewContainer">
      <div style={{background:`url(${props.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="profile"> </div>
      <blockquote><p className="quotation">
        I had a refresher driving class today with my instructor from Stars and Stripes Driving School.  I can't say enough good things about my experience.</p>
      </blockquote>
    </div>

    <div className="reviewContainer">
      <div style={{background:`url(${props.img2})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="profile2"> </div>
      <blockquote><p className="review2">
        As a parent, insuring that my child becomes a defensive, competent driver is extremely important to me.   I am so grateful to have found this driving school!!.</p>
      </blockquote>
    </div>

  </>)
}

export default Testimonial
