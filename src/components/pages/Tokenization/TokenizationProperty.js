import React from 'react';
import {SearchForm} from '../../common/Search';
const TokenizationProperty = () => {
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
                id="superadmin-nav-tab-tokenization-property"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-tokenization-property-tab">
                <div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
                  <div className="mb-4">
                    <div className="row d-lg-flex align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold mb-3 mb-lg-4">
                          Ownership Details
                        </h2>
                      </div>
                    </div>
                    <div className="dashboard-table-container table-responsive">
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Property Owner Name</th>
                            <th>Property Name/Title</th>
                            <th>Property Type</th>
                            <th>Property Valuation</th>
                            <th>% Ownership</th>
                            <th>Consent</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>Mohammed</td>
                            <td>27 Offices</td>
                            <td>Commercial</td>
                            <td>8000 AED</td>
                            <td>50%</td>
                            <td>
                              <a
                                href=""
                                className="btn btn-blue btn-sm btn-rounded-sm mb-0">
                                Sent
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>02</td>
                            <td>Abdulla</td>
                            <td>27 Offices</td>
                            <td>Commercial</td>
                            <td>4000 AED</td>
                            <td>30%</td>
                            <td>
                              <a
                                href=""
                                className="btn btn-gradient btn-sm btn-rounded-sm mb-0 text-white">
                                Pending
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>03</td>
                            <td>Rafiq</td>
                            <td>27 Offices</td>
                            <td>Commercial</td>
                            <td>2000 AED</td>
                            <td>20%</td>
                            <td>
                              <a
                                href=""
                                className="btn btn-success btn-sm btn-rounded-sm mb-0">
                                Received
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th colspan="4">Total</th>
                            <th>14000 AED</th>
                            <th colspan="2">100%</th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="row d-lg-flex align-items-center">
                      <div className="col-lg-12">
                        <h2 className="font-weight-bold mb-3 mb-lg-4">
                          Document Verification
                        </h2>
                      </div>
                    </div>
                    <div className="dashboard-table-container table-responsive">
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>Sr. No.</th>
                            <th>Document Title</th>
                            <th>Verified by Admin</th>
                            <th>Remark</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>Title Deed</td>
                            <td>Username</td>
                            <td>Textbox</td>
                            <td>
                              <a className="btn btn-success btn-sm btn-rounded-sm mb-0">
                                Approve
                              </a>{' '}
                              <a
                                className="btn btn-danger btn-sm btn-rounded-sm mb-0"
                                data-toggle="modal"
                                data-target="#rejectModal">
                                Reject
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>02</td>
                            <td>Power of Attorney</td>
                            <td>Username</td>
                            <td>Textbox</td>
                            <td>
                              <a className="btn btn-success btn-sm btn-rounded-sm mb-0">
                                Approve
                              </a>{' '}
                              <a
                                className="btn btn-danger btn-sm btn-rounded-sm mb-0"
                                data-toggle="modal"
                                data-target="#rejectModal">
                                Reject
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>03</td>
                            <td>NOC</td>
                            <td>Username</td>
                            <td>Textbox</td>
                            <td>
                              <a className="btn btn-success btn-sm btn-rounded-sm mb-0">
                                Approve
                              </a>{' '}
                              <a
                                className="btn btn-danger btn-sm btn-rounded-sm mb-0"
                                data-toggle="modal"
                                data-target="#rejectModal">
                                Reject
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>04</td>
                            <td>Valuation Report</td>
                            <td>Username</td>
                            <td>Textbox</td>
                            <td>
                              <a className="btn btn-success btn-sm btn-rounded-sm mb-0">
                                Approve
                              </a>{' '}
                              <a
                                className="btn btn-danger btn-sm btn-rounded-sm mb-0"
                                data-toggle="modal"
                                data-target="#rejectModal">
                                Reject
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <h2 className="font-weight-bold mb-3 mb-lg-4">Action</h2>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-12">
                      <select className="form-control">
                        <option value="">Enable Tokenization Process</option>
                        <option>Disable Tokenization Process</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-12 my-lg-0 my-3">
                      <button className="btn btn-gradient text-white w-100">
                        <i className="fa fa-plus mr-2"></i>Add Comment
                      </button>
                    </div>
                  </div>
                  <div className="row my-5">
                    <div className="col-lg-1 col-12 justify-content-lg-start justify-content-center my-lg-0 my-3 d-flex align-items-center">
                      <img
                        className="avatar-image mr-lg-2"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                      />
                      <div className="col-lg-4 col-12 justify-content-lg-start justify-content-center my-lg-0 my-3 d-flex align-items-center">
                        <div className="flex-column">
                          <h3 className="font-weight-bold mb-0">
                            Ahad Almuqati
                          </h3>
                          <small className="text-grey">
                            Commented on 25th October 2020 14:00 KSA Time
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-7 col-12">
                        <div className="bg-grey has-border-radius align-self-stretch p-4 font-weight-medium">
                          Property is on HOLD awaiting more documents, Kindly
                          submit more regarding the title, NOC is expired please
                          update valid new NOC
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-lg-12">
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Type Here..."></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button
                          className="form-submit btn btn-lg btn-gradient-secondary"
                          data-toggle="modal"
                          data-target="#confirmationModal">
                          Submit
                        </button>
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
};

export default TokenizationProperty;
