import * as React from 'react';
import './style.css';
import MenuBar from './Components/MenuBar';
import SlideShow from './Components/SlideShow';
import Caption from './Components/Caption';

class Header extends React.Component<{}, {}> {

  render() {
    return (
      <div className="header">
        <div className="slideShowBarWrapper">
          <SlideShow />
        </div>
        <div className="menuBarWrapper"> 
          <MenuBar isPersist={false} isLogin={false} />
        </div>
        <Caption />
      </div>
    );
  }
}

export default Header;