import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {SearchForm} from '../../common/Search';
import {getLogsList} from '../../../redux/actions';
import IsLoadingHOC from '../../common/IsLoadingHOC';

const Logs = props => {
  const {setLoading, getLogsList} = props;
  const [logsData, setLogsData] = useState();

  useEffect(() => {
    getLogsList()
      .then(
        response => {
          setLoading(false);

          setLogsData(response.data);
        },
        error => {
          setLoading(false);
        },
      )
      .catch(error => {
        setLoading(false);
      });
  }, []);
  console.log('response', logsData);
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
                id="superadmin-nav-tab-log-page"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-removal-requests-tab">
                <div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
                  <div className="row d-lg-flex align-items-center">
                    <div className="col-12">
                      <a href="" className="btn btn-md btn-blue mb-4">
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="17.075"
                          height="18.365"
                          viewBox="0 0 17.075 18.365">
                          <g
                            id="Group_252"
                            data-name="Group 252"
                            transform="translate(-2280.855 -1519.832)">
                            <path
                              id="Path_791"
                              data-name="Path 791"
                              d="M2289.388,1690.968q-3.192,0-6.384,0a1.986,1.986,0,0,1-2.148-2.144c0-1.208,0-2.415,0-3.623a.688.688,0,0,1,.472-.756.644.644,0,0,1,.839.694c.01,1.172,0,2.343,0,3.515,0,.108,0,.216,0,.323a.67.67,0,0,0,.686.681c.083.006.167,0,.251,0h12.553c.74,0,.94-.2.941-.934q0-1.668,0-3.336c0-.108,0-.215,0-.323a.651.651,0,0,1,1.3-.011c.012,1.363.039,2.727-.011,4.088a1.919,1.919,0,0,1-1.985,1.82C2293.74,1690.972,2291.564,1690.967,2289.388,1690.968Z"
                              transform="translate(0 -152.771)"
                              fill="#fff"
                            />
                            <path
                              id="Path_792"
                              data-name="Path 792"
                              d="M2348.284,1533.338v-.489q0-6.023,0-12.047a2.891,2.891,0,0,1,.013-.429.648.648,0,0,1,1.28.006,2.677,2.677,0,0,1,.012.394q0,6.041,0,12.082v.455c.14-.127.227-.2.307-.28.593-.591,1.181-1.185,1.776-1.773a.67.67,0,0,1,.985-.082.652.652,0,0,1-.058,1.008q-1.553,1.564-3.118,3.118a.679.679,0,0,1-1.092,0q-1.564-1.554-3.118-3.119a.652.652,0,0,1-.077-.984.672.672,0,0,1,1.011.065C2346.875,1531.923,2347.539,1532.593,2348.284,1533.338Z"
                              transform="translate(-59.548 0)"
                              fill="#fff"
                            />
                          </g>
                        </svg>
                        Download
                      </a>
                    </div>
                  </div>
                  <div className="dashboard-table-container table-responsive">
                    {!logsData ? (
                      <>Data Not Found</>
                    ) : (
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>Log ID</th>
                            <th>Record Title</th>
                            <th>Deleted By</th>
                            <th>Deletion Reason</th>
                            <th>Date and Time</th>
                            <th>Record Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {logsData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{!item._id ? 'NA' : item._id}</td>
                                <td>{!item.title ? 'NA' : item.title}</td>
                                <td>
                                  {!item.authority
                                    ? 'NA'
                                    : item.authority.email}
                                </td>
                                <td>
                                  <a href="">View</a>
                                </td>
                                <td>
                                  {!item.createdAt ? 'NA' : item.createdAt}
                                </td>
                                <td>{!item.type ? 'NA' : item.type}</td>
                                <td>
                                  <a
                                    className="btn btn-blue btn-sm btn-rounded-sm mb-0"
                                    data-toggle="modal"
                                    data-target="#rejectModal">
                                    View
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    )}
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
};

export default connect(null, {getLogsList})(IsLoadingHOC(Logs));
