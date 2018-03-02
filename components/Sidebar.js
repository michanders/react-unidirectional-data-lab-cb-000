'use strict'

import React from 'react';
import SidebarItem from './SidebarItem';

export default class Sidebar extends React.Component {
  handleClick(index, ev) {
  }
  render() {
    const { files, selectedFileIndex, onAdd } = this.props;

    return (
      <ul className="sidebar">
        { files.map((file, i) => (
          <SidebarItem isSelected={selectedFileIndex === i} key={i} file={file} onClick={this.handleClick.bind(null, i)}/>
        ))}
      </ul>
    );
  }
}
