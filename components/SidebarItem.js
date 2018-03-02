'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    return file.split('\n').find(line => line.length);
  }
  render() {
    return (
      <li className="sidebar__item">
        <a href='#' onClick={onClick} className='sidebar__link'>{this.props.getTitle}</a>
      </li>
    );
  }
}
