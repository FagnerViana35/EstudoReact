import React from 'react';
import './Container.scss'

const UIContainer = ({ children }) => (
    <div
      className="ui-container"
    >
        {children}
    </div>
);
export default UIContainer;