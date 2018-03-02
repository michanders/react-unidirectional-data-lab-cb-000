'use strict'

import React from 'react';

const Toolbar = () => (
  <nav>
    <button onClick={this.props.onAdd}>+ Add note</button>
    <button onClick={this.props.onRemove}>Delete note</button>
  </nav>
);

export default Toolbar;
