import * as React from 'react';
import './style.css';
import MenuBar from '../../HomePage/Components/Header/Components/MenuBar';


class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div className="header">
        <div className="menuBarWrapper"> 
          <MenuBar isPersist={false} isLogin={false} />
        </div>
        
      </div>
    );
  }
}

export default Header;