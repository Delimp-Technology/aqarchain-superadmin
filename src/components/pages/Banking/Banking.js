import React from 'react';
import {SearchForm} from '../../common/Search';
export default function Banking() {
  return (
    <div id="content" className="flex-grow-1">
      <div id="page-content" className="py-lg-5 pl-lg-5 p-md-2 p-3">
        <SearchForm />
        <div className="row">
          <div className="col-lg-12">
            <div
              className="tab-content dashboard-nav-tabs-content"
              id="superadmin-nav-tabs-content">
              <div
                className="tab-pane fade active show"
                id="superadmin-nav-tab-banking"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-banking-tab">
                <div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
                  <h2 className="font-weight-bold mb-4">Banking</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
