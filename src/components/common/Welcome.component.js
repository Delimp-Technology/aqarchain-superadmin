import React from 'react';
import {Greeting} from './Greeting';

export default () => {
  return (
    <div className="row header-bottom no-gutters">
      <div className="col-lg-12 col-md-12 col-12 text-center">
        <div className="header-bottom-text p-3">
          <h3 className="text-white mb-0">
            <Greeting /> SuperAdmin, Welcome to Dashboard
          </h3>
        </div>
      </div>
    </div>
  );
};
