import React from 'react';
import Panel from 'components/Panel';
import './style.css';

export default () => (
  <Panel className="header">
    <h1 className="header-title">
      trafficMeister
      <img className="header-logo" src="assets/images/logo.png" alt="logo" />
    </h1>
  </Panel>
);
