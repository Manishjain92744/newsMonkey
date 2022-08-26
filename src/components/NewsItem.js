import React, { Component } from "react";

export class NewsItem extends Component {



  render() {
    let { title, description ,imageUrl,newsUrl ,author,date,source} = this.props;
    return (
      <div className="my-3"> 
        <div className="card" style={{ width: "18rem"  }}>
        <span className="position-absolute top-0  translate-middle badge 
            rounded-pill bg-success" style={{left:'88%' , zIndex:'1'}}> {source.name}</span> 
          <img src={imageUrl?imageUrl:"https://static5.depositphotos.com/1030296/395/i/600/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg"}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}   </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href= {newsUrl} target="-blank" className="btn btn-sm btn-dark">
              Read more ...
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
