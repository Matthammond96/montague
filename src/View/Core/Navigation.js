import React, { Component } from 'react';
import '../Styles/navigation.sass';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav_state: false
    }
  }

  onClickHanlder = () => {
    this.setState({
      nav_state: !this.state.nav_state
    })
  }

  render() {
    return (
      <div id="navigation-contianer">
        <div className="social-icons">
          <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram-alt" viewBox="0 0 32 32"><path class="cls-1" d="M16 2.88c4.27 0 4.78 0 6.47.1 4.33.19 6.36 2.25 6.56 6.56.07 1.68.09 2.19.09 6.46s0 4.78-.09 6.47c-.2 4.3-2.22 6.36-6.56 6.56-1.69.07-2.2.09-6.47.09s-4.78 0-6.47-.09c-4.34-.2-6.36-2.27-6.55-6.56-.08-1.69-.1-2.2-.1-6.47s0-4.78.1-6.47C3.17 5.23 5.19 3.17 9.53 3c1.69-.1 2.2-.12 6.47-.12zM16 0c-4.35 0-4.89 0-6.6.1C3.59.36.36 3.59.1 9.4 0 11.11 0 11.65 0 16s0 4.89.1 6.6c.26 5.81 3.49 9 9.3 9.3 1.71.08 2.25.1 6.6.1s4.89 0 6.6-.1c5.8-.26 9-3.49 9.3-9.3.08-1.71.1-2.25.1-6.6s0-4.89-.1-6.6c-.26-5.8-3.49-9-9.3-9.3C20.89 0 20.35 0 16 0zm0 7.78A8.22 8.22 0 1 0 24.22 16 8.22 8.22 0 0 0 16 7.78zm0 13.55A5.33 5.33 0 1 1 21.33 16 5.32 5.32 0 0 1 16 21.33zm8.54-15.79a1.92 1.92 0 1 0 1.92 1.92 1.92 1.92 0 0 0-1.92-1.92z"></path></svg>
        </div>
        <div className="logo">
          <img alt="montage properties" src="logo-white.png"></img>
        </div>
        <div className="burger">
          <div id="nav-icon3" onClick={this.onClickHanlder} className={this.state.nav_state ? "open" : null}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Navigation;