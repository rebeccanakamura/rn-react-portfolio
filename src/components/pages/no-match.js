import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <h1>We couldn't find that page</h1>
      <Link to='/'>Return to homepage</Link>
    </div>
  );
}

export default NoMatch