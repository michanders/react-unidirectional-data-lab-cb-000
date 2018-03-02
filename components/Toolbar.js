'use strict'

import React from 'react';

const Toolbar = ({onAdd, onRemove}) => (
  <nav className="toolbar">
    <button>+ Add note</button>
    <button>Delete note</button>
  </nav>
);
