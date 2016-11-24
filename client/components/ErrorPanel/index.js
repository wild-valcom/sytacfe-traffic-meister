import React, { PropTypes } from 'react';
import Panel from 'components/Panel';

const { string } = PropTypes;

function ErrorPanel({ errorMessage }) {
  const message = errorMessage ?
    `${errorMessage} Please reload the page.` : 'Please reload the page.';

  return (
    <Panel className="main">
      <p className="panel-text panel-text--empty">
        {message}
      </p>
    </Panel>
  );
}

ErrorPanel.propTypes = {
  errorMessage: string,
};

ErrorPanel.defaultProps = {
  errorMessage: '',
};

export default ErrorPanel;
