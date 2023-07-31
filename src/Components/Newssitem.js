import React, { Component } from "react";

export class Newssitem extends Component {
  render() {
    let { title, description, newsUrl, imageurl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}><span className=" badge rounded-pill bg-danger"  style={{left: '90%',    zIndex: 1}}>
          {source}
          </span></div>
        

          <img
            src={
              imageurl
                ? imageurl
                : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}
             
        
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newssitem;
