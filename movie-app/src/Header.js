import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="header image" width="50" src="http://icons.iconarchive.com/icons/bokehlicia/captiva/256/movie-icon.png" />
              </td>
              <td width="8" />
              <td>
                Movies DB Search
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Header;
