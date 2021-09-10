import React from 'react';
import SearchForm from '../common/Search/SearchForm';
export default function Agents() {
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
                id="superadmin-nav-tab-documents"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-documents-tab">
                <div className="text-center text-lg-left">
                  <div className="superadmin-cards">
                    <div className="row">
                      <div className="col-xl-3 mb-3 mb-xl-0">
                        <div className="superadmin-card has-box-shadow">
                          <div className="superadmin-card-header py-3 px-4">
                            <div className="d-flex justify-content-center align-items-center">
                              <h3 className="mb-0 text-center font-weight-bold">
                                Valuation Reports
                              </h3>
                            </div>
                          </div>
                          <div className="superadmin-card-body p-4">
                            <h2 className="mb-3 font-weight-bold">200</h2>
                            <a href="" className="btn btn-xs btn-blue mb-0">
                              Expand
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 mb-3 mb-xl-0">
                        <div className="superadmin-card has-box-shadow">
                          <div className="superadmin-card-header py-3 px-4">
                            <div className="d-flex justify-content-center align-items-center">
                              <h3 className="mb-0 text-center font-weight-bold">
                                Listing Agreements
                              </h3>
                            </div>
                          </div>
                          <div className="superadmin-card-body p-4">
                            <h2 className="mb-3 font-weight-bold">200</h2>
                            <a href="" className="btn btn-xs btn-blue mb-0">
                              Expand
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 mb-3 mb-xl-0">
                        <div className="superadmin-card has-box-shadow">
                          <div className="superadmin-card-header py-3 px-4">
                            <div className="d-flex justify-content-center align-items-center">
                              <h3 className="mb-0 text-center font-weight-bold">
                                Power of Attorney
                              </h3>
                            </div>
                          </div>
                          <div className="superadmin-card-body p-4">
                            <h2 className="mb-3 font-weight-bold">200</h2>
                            <a href="" className="btn btn-xs btn-blue mb-0">
                              Expand
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="superadmin-card has-box-shadow">
                          <div className="superadmin-card-header py-3 px-4">
                            <div className="d-flex justify-content-center align-items-center">
                              <h3 className="mb-0 text-center font-weight-bold">
                                Title Certificates
                              </h3>
                            </div>
                          </div>
                          <div className="superadmin-card-body p-4">
                            <h2 className="mb-3 font-weight-bold">200</h2>
                            <a href="" className="btn btn-xs btn-blue mb-0">
                              Expand
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
