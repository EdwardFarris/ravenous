import React from 'react';
import './Business.css'



class Business extends React.Component {
    render() {
        return (
            <div className="Business">
  <div className="image-container">
    <a href={this.props.business.bizUrl} target="_blank">
    <img src={this.props.business.imageSrc} alt=''/>
    </a>
  </div>
  <h2>{this.props.business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.business.address}</p>
      <p>{this.props.business.city}</p>
      <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
      <p>{this.props.business.phone}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.business.category}</h3>
      <h3 className="rating">{this.props.business.rating}</h3>
      <p>{this.props.business.reviewCount}</p>
      <p>{this.props.business.price}</p>
      
    </div>
  </div>
</div>
        )
    }
}

export default Business;