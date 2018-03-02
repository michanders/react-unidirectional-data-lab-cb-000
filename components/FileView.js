'use strict'

import React from 'react';
import Toolbar from './Toolbar';

export default class FileView extends React.Component {
  render() {
    return (
      <div className="file-view">
        <Toolbar onRemove={this.props.onRemove} onAdd={this.props.onAdd}/>
        <textarea className="file-view__text" value={this.props.file} onChange={this.props.onChange} />
      </div>
    );
  }
}
