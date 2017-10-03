import React from 'react';
import H4 from 'components/H4';
import H5 from 'components/H5';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class AboutUs extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H4>
          <FormattedMessage {...messages.aboutus} />
        </H4>
        <H5>
          <FormattedMessage {...messages.paragraph01} />
          <FormattedMessage {...messages.paragraph02} />
          <FormattedMessage {...messages.paragraph03} />
        </H5>
      </div>
    );
  }
}

export default AboutUs;
