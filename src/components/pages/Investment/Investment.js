import React from 'react';
import {SearchForm} from '../../common/Search';
import {Link} from 'react-router-dom';

const Investment = () => {
  return (
    <>
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
                  id="superadmin-nav-tab-users"
                  role="tabpanel"
                  aria-labelledby="superadmin-nav-tab-users-tab">
                  <div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
                    <div className="row d-lg-flex mb-5 align-items-center">
                      {/* <div className="col-lg-12 col-12 text-lg-left text-center">
                        <h3 className="mb-3 mb-lg-4">Start Tokenization</h3>
                      </div> */}
                      <div className="col-lg-4 col-12 my-lg-0 my-2">
                        <Link to="/dashboard/tokenization-process">
                          <button className="btn btn-gradient-secondary w-100 has-border-radius">
                            Add new Property{' '}
                          </button>
                        </Link>
                      </div>
                      <div className="col-lg-6 col-12 my-lg-0 my-2">
                        <select className="form-control secondary-select">
                          <option>Select from Listed Properties</option>
                          <option>Listed Property #1</option>
                          <option>Listed Property #2</option>
                          <option>Listed Property #3</option>
                          <option>Listed Property #4</option>
                          <option>Listed Property #5</option>
                          <option>Listed Property #6</option>
                        </select>
                      </div>
                    </div>
                    <div className="dashboard-table-container table-responsive">
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>Property ID</th>
                            <th>Property Type</th>
                            <th>City & Country</th>
                            <th>Listed By</th>
                            <th>Price</th>
                            <th>Sell/Rent</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {userlist.map((item, index) =>
                            index != 0 ? (
                              <tr key={index}>
                                <td>{`${item.first_name} ${item.last_name}`}</td>
                                <td>{item.contact}</td>
                                <td>{item.email}</td>
                                <td>{item.status ? 'Active' : 'Inactive'}</td>
                                <td>
                                  <a
                                    href=""
                                    className="btn btn-success btn-sm btn-rounded-sm mb-0">
                                    Approved
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href=""
                                    className="btn btn-blue btn-sm btn-rounded-sm mb-0">
                                    View
                                  </a>
                                </td>
                              </tr>
                            ) : null,
                          )} */}
                        </tbody>
                      </table>
                    </div>
                    <div className="dashboard-table-meta mt-4">
                      <div className="row d-lg-flex align-items-center">
                        <div className="col-lg-6">
                          <h4 className="font-weight-bold mb-3 mb-lg-0">
                            Show
                            <select
                              id="dashboard-table-no_of_results"
                              className="mx-1">
                              <option value="5">5</option>
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                            </select>
                            Entries
                          </h4>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                          <nav className="dashboard-table-pagination">
                            <ul className="pagination mb-0">
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Previous
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  3
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  Next
                                </a>
                              </li>
                            </ul>
                          </nav>
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
    </>
  );
};

export default Investment;
