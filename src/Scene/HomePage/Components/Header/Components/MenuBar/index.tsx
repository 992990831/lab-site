import * as React from 'react';
import './style.css';
import { Link } from "gatsby";
// import { Icon } from 'react-fa';
// import { connect } from 'react-redux';
// import RLForm from 'Components/RegisterLoginForm';
// import UserMenu from 'Components/UserMenu';
//import { Link } from 'react-router-dom';
// import { getTranslation, SupportedLanguage } from 'Services/Geo';
// import LanguageSelector from 'Components/LanguageSelector';
// import { RootState } from 'Redux/Store';

// const mapStateToProps = (state: RootState) => ({
//   lang: state.status.lang,
//   isPersist: state.status.isPersist,
//   isLogin: state.user.isLogin
// });

enum MenuItemType {
  none,
  people,
  research,
  news,
  photos,
  publication
}

interface MenuBarProps {
  //lang: SupportedLanguage;
  isPersist: boolean;
  isLogin: boolean;
  //selectedMenuItem: MenuItemType;
}

interface MenuBarState {  
  isHandlerActive: boolean;
  rlFormStatus?: 'login' | 'register'; 
  isLogin: boolean;
}

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
  constructor(props: MenuBarProps) {
    super(props);
    this.state = {      
      isHandlerActive: false,
      isLogin: props.isLogin
    };
  }
  toggleHandler = () => {
    this.setState({
      isHandlerActive: !this.state.isHandlerActive
    });
  }
  updateFormStatus = (status?: 'login' | 'register') => {
    this.setState({
      rlFormStatus: status
    });
  }
  loginField = () => {
    if (this.state.isLogin) {
      return (
        <li className="userMenuLi">
          <div className="userMenuWrapper">
            {'User Menu'}
          </div>
        </li>
      );
    }
    return [
      (
        <li key="0"><a href="#" onClick={() => this.updateFormStatus('register')}>
          {/* {getTranslation(this.props.lang, 'Sign Up')} */}
          Sign Up
        </a></li>
      ),
      (
        <li key="1"><a href="#" onClick={() => this.updateFormStatus('login')}>
          {/* {getTranslation(this.props.lang, 'Sign In')} */}
          Sign In
        </a></li>
      )
    ];
  }
  render() {
    // if (!this.props.isPersist) {
    //   return (null);
    // }
    return (
      <div className="menuBar">
        <div className="langSelectorWrapper">
          {/* {'Language Selector'} */}
        </div>
        <a href="/">
          <div className="homeLogo osLight" style={{display:"flex"}}>
            {/* <Icon name="home" size="2x" />  */}
            <div className='sjtu-logo'></div>
            <div className="lab-logo">阿尔法脑实验室
              <div className='lab-logo-small'>Alpha Brain Lab</div>
            </div>
          </div>
        </a>
        <a 
          href="#" 
          className={'homeNavHandler visible-xs' + (this.state.isHandlerActive ? ' active' : '')} 
          onClick={this.toggleHandler}
        >
          <div>
            <div className="mobile-menu-btn"></div>
            <div className="mobile-menu-btn"></div>
            <div className="mobile-menu-btn"></div>
          </div>
          {/* <Icon name="bars" /> */}
        </a>
        <div className={'homeNav' + (this.state.isHandlerActive ? ' active' : '')} >
          <ul style={{fontSize:"14px"}}>
          <li className="moreOption">
              {/* <a href="javascript:void(0)">People</a> */}
              <Link to={"/"} activeClassName="activeLink">Home</Link>
            </li>
            <li className="moreOption">
              {/* <a href="javascript:void(0)">People</a> */}
              <Link to={"/people"} activeClassName="activeLink">People</Link>
            </li>
            <li className="moreOption">
              <Link to={"/research"} activeClassName="activeLink">Research</Link>
            </li>
            <li className="moreOption">
              <Link to={"/press"} activeClassName="activeLink">News</Link>
            </li>
           
            <li className="moreOption">
              <Link to={"/publication"} activeClassName="activeLink">Publication</Link>
            </li>
            <li className="moreOption">
              <a href="/contact">Contact</a>
            </li>
            {/* <li className="moreOption">
              <Link to="/search?type=sale">{'Buy'}</Link>
            </li>
            <li className="moreOption">
              <Link to="/search?type=rent">{'Rent'}</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">{'Renovation'}</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">{'Commercial'}</Link>
            </li>
            <li className="moreOption">
              <Link to="/projects">{'Project'}</Link>
            </li>
            <li className="moreOption">
              <Link to="/agent/search">{'Find agent'}</Link>
            </li>
            {this.loginField()}
            <li>
              <Link to="/newproperty/sell"><div className="btn btn-green">
                {'List a Property'}
              </div></Link>
            </li> */}
          </ul>
        </div>
        {/* <RLForm 
          type={this.state.rlFormStatus} 
          openRegisterForm={() => this.updateFormStatus('register')} 
          openLoginForm={() => this.updateFormStatus('login')}
          close={() => this.updateFormStatus()}
        /> */}
      </div>
    );
  }
}

export default MenuBar;