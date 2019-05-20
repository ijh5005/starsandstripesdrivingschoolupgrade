import React from 'react'
import "./index.css";


const Testimonial = (props) => {
  return(<>

    <div className="reviewContainer review1container">
      <img className="reviewImg" src={props.img} />
      <blockquote><p className="quotation">
        I had a refresher driving class today with my instructor from Stars and Stripes Driving School.  I can't say enough good things about my experience.</p>
      </blockquote>
    </div>

    <div className="reviewContainer review2container">
      <img className="reviewImg" src={props.img2} />
      <blockquote><p className="review2">
        As a parent, insuring that my child becomes a defensive, competent driver is extremely important to me.   I am so grateful to have found this driving school!!.</p>
      </blockquote>
    </div>

  </>)
}

export default Testimonial
