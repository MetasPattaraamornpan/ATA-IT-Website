
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';


export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ATA IT Website</title>
          <meta name="description" content="This is Home page of ATA IT Website" />
        </Helmet>
        <div>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </div>
      </div>
    );
  }
}
