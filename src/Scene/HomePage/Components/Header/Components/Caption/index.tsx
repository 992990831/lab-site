import * as React from 'react';
import './style.css';
//import { Link } from 'react-router-dom';


class Caption extends React.Component {
  render() {   
    return (
      <div className="homeCaption">
        <div className="homeTitle">{'此处放置描述文字'}</div>
        <div className="homeSubtitle">
          {'副标题文字'}
        </div>
        {/* <Link className="btn btn-black" to="/search">{'Learn More'}</Link> */}
      </div>
    );
  }
}

export default Caption;