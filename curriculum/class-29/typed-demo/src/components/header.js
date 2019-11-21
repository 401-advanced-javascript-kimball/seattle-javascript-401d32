import React from 'react';
import { Link } from 'react-router-dom';

import RenderIf from './renderIf';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {/* <RenderIf condition={document.location.pathname.includes('about-me')}> */}
          <li>
            <Link to="/">Home</Link>
            {/* <a href="/">Home</a> */}
          </li>
          {/* </RenderIf> */}
          {/* <RenderIf condition={!document.location.pathname.includes('about-me')}> */}
          <li>
            <Link to="/about-me">About Me</Link>
            {/* <a href="/about-me">About Me</a> */}
          </li>
          {/* </RenderIf> */}
        </ul>
      </nav>
    )
  }
}

export default Header;