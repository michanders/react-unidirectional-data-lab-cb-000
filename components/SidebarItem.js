'use strict'

import React from 'react';
import classNames from 'classnames';

export default class SidebarItem extends React.Component {
  static getTitle (file) {
    return file.split('\n').find(line => line.length);
  }
  render() {
    return (
      <li className={classNames('sidebar__item', {'sidebar__item--selected':isSelected})}>
        <a href='#' onClick={this.props.onClick} className='sidebar__link'>{this.getTitle} || <em>Untitled</em></a>
      </li>
    );
  }
}
