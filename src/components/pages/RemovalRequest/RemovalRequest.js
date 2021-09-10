import React from 'react';
import {SearchForm} from '../../common/Search';
export default function RemovalRequest() {
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
                id="superadmin-nav-tab-removal-requests"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-removal-requests-tab">
                <div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
                  <div className="row d-lg-flex align-items-center">
                    <div className="col-xl-6 col-lg-4">
                      <h2 className="font-weight-bold mb-3 mb-lg-4">
                        Removal Requests
                      </h2>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                      <div id="search-filter_options" className="mb-3 mb-lg-4">
                        <div className="d-flex">
                          <div
                            id="search-sort_by"
                            className="search-filter_option">
                            <span className="mr-3">Sort By</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 30 30"
                              className="icon-search-filter_options">
                              <title>Sort By</title>
                              <g
                                id="icon-search-filter_options-sort_by-1"
                                data-name="Layer 1">
                                <g
                                  id="icon-search-filter_options-sort_by-2"
                                  data-name="Layer 2">
                                  <g
                                    id="icon-search-filter_options-sort_by-3"
                                    data-name="Layer 3">
                                    <path d="M14.18,21.11,9.23,26.06V1.15a1.16,1.16,0,0,0-2.31,0V26.06L2,21.11A1.15,1.15,0,1,0,.34,22.74l6.92,6.92a1.14,1.14,0,0,0,.82.34,1.12,1.12,0,0,0,.81-.34l6.93-6.92a1.15,1.15,0,0,0,0-1.63,1.16,1.16,0,0,0-1.64,0Z" />
                                    <path d="M29.66,7.26,22.74.34a1.15,1.15,0,0,0-1.63,0L14.18,7.26a1.15,1.15,0,0,0,0,1.63,1.16,1.16,0,0,0,1.64,0l4.95-5V28.85a1.16,1.16,0,0,0,2.31,0V3.94l5,5a1.14,1.14,0,0,0,.82.34,1.12,1.12,0,0,0,.81-.34,1.15,1.15,0,0,0,0-1.63Z" />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div
                            id="search-filters"
                            className="search-filter_option">
                            <span className="mr-3">Filter</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32.31 30"
                              className="icon-search-filter_options">
                              <title>Filter</title>
                              <g
                                id="icon-search-filter_options-filter-1"
                                data-name="Layer 1">
                                <g
                                  id="icon-search-filter_options-filter-2"
                                  data-name="Layer 2">
                                  <g
                                    id="icon-search-filter_options-filter-3"
                                    data-name="Layer 3">
                                    <path d="M28.85,11.54H3.46a1.16,1.16,0,0,1,0-2.31H28.85a1.16,1.16,0,0,1,0,2.31Z" />
                                    <path d="M24.23,20.77H8.08a1.16,1.16,0,1,1,0-2.31H24.23a1.16,1.16,0,0,1,0,2.31Z" />
                                    <path d="M19.62,30H12.69a1.16,1.16,0,0,1,0-2.31h6.93a1.16,1.16,0,0,1,0,2.31Z" />
                                    <path d="M31.15,2.31h-30A1.16,1.16,0,0,1,1.15,0h30a1.16,1.16,0,1,1,0,2.31Z" />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div
                            id="search-list_view"
                            className="search-filter_option active">
                            <span className="mr-3">List View</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 31.36 30"
                              className="icon-search-filter_options">
                              <title>List View</title>
                              <g
                                id="icon-search-filter_options-list_view-1"
                                data-name="Layer 1">
                                <g
                                  id="icon-search-filter_options-list_view-2"
                                  data-name="Layer 2">
                                  <g
                                    id="icon-search-filter_options-list_view-3"
                                    data-name="Layer 3">
                                    <path d="M30.38,2.73H1c-.54,0-1-.61-1-1.37S.44,0,1,0h29.4c.55,0,1,.61,1,1.36S30.93,2.73,30.38,2.73Z" />
                                    <path d="M30.38,16.36H1c-.54,0-1-.61-1-1.36s.44-1.36,1-1.36h29.4c.55,0,1,.61,1,1.36S30.93,16.36,30.38,16.36Z" />
                                    <path d="M30.38,30H1c-.54,0-1-.61-1-1.36s.44-1.37,1-1.37h29.4c.55,0,1,.61,1,1.37S30.93,30,30.38,30Z" />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div
                            id="search-map_view"
                            className="search-filter_option">
                            <span className="mr-3">Map View</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 21.09 30"
                              className="icon-search-filter_options">
                              <title>Map View</title>
                              <g
                                id="icon-search-filter_options-map_view-1"
                                data-name="Layer 1">
                                <g
                                  id="icon-search-filter_options-map_view-2"
                                  data-name="Layer 2">
                                  <g
                                    id="icon-search-filter_options-map_view-3"
                                    data-name="Layer 3">
                                    <path d="M10.55,0a10.55,10.55,0,0,0-9,16.09L10,29.58a.87.87,0,0,0,.74.42h0a.86.86,0,0,0,.75-.43L19.61,16A10.56,10.56,0,0,0,10.55,0ZM18.1,15.05,10.68,27.43,3.07,15.17a8.79,8.79,0,1,1,15-.12Z" />
                                    <path d="M10.55,5.27a5.28,5.28,0,1,0,5.27,5.28A5.29,5.29,0,0,0,10.55,5.27Zm0,8.8a3.53,3.53,0,1,1,3.52-3.52A3.53,3.53,0,0,1,10.55,14.07Z" />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-table-container table-responsive">
                    <table className="dashboard-table">
                      <thead>
                        <tr>
                          <th>Request ID</th>
                          <th>Requested By</th>
                          <th>Request type</th>
                          <th>Removal Reason</th>
                          <th>Date and Time</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#1245</td>
                          <td>johndoe@fakemail.com</td>
                          <td>Property</td>
                          <td>
                            <a href="">View</a>
                          </td>
                          <td>19/07/2021 10:41 am</td>
                          <td>Approved</td>
                          <td>
                            <a
                              href=""
                              className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">
                              View
                            </a>
                            <a
                              href=""
                              className="btn btn-success btn-sm btn-rounded-sm mb-0 mr-2">
                              Approved
                            </a>
                            <a
                              href=""
                              className="btn btn-danger btn-sm btn-rounded-sm mb-0">
                              Reject
                            </a>
                          </td>
                        </tr>
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
  );
}
