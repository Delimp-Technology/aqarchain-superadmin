import React, {useEffect, useState} from 'react';
import {SearchForm} from '../../common/Search';
import {useDispatch} from 'react-redux';
import {
  approvedUser,
  approvedProperty,
  getRequestsList,
} from '../../../redux/actions';
import IsLoadingHOC from '../../common/IsLoadingHOC';
import {toast} from 'react-toastify';

const RemovalRequest = props => {
  const {setLoading} = props;
  const dispatch = useDispatch();

  const [requestedData, setRequestedData] = useState([]);

  useEffect(() => {
    dispatch(getRequestsList())
      .then(
        response => {
          setRequestedData(response.data);
          setLoading(false);
        },
        error => {
          setLoading(false);
        },
      )
      .catch(error => {
        setLoading(false);
      });
  }, []);

  const approvedUserAction = id => {
    setLoading(true);
    dispatch(approvedUser(id))
      .then(
        response => {
          setLoading(false);
          toast.error(response.message);
        },
        error => {
          setLoading(false);
          toast.error(error.message);
        },
      )
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };
  const approvedPropertyAction = id => {
    setLoading(true);
    dispatch(approvedProperty(id))
      .then(
        response => {
          setLoading(false);
          toast.error(response.message);
        },
        error => {
          setLoading(false);
          toast.error(error.message);
        },
      )
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };
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
                    <div className="col-12">
                      <h2 className="font-weight-bold mb-3 mb-lg-4">
                        Removal Requests
                      </h2>
                    </div>
                  </div>
                  <div className="dashboard-table-container table-responsive">
                    {requestedData.length != 0 ? (
                      <table className="dashboard-table">
                        <thead>
                          <tr>
                            <th>Request ID</th>
                            <th>Requested By</th>
                            <th>Request type</th>
                            <th>Removal Reason</th>
                            <th>Date and Time</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {requestedData.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td>{!item._id ? 'NA' : item._id}</td>
                                <td>{!item.email ? 'NA' : item.email}</td>
                                <td>{item.id ? 'Property' : 'User'}</td>
                                <td>
                                  <button className="btn btn-blue btn-sm btn-rounded-sm mb-0 mr-2">
                                    View
                                  </button>
                                </td>
                                <td>
                                  {!item.detach.date ? 'NA' : item.detach.date}
                                </td>
                                <td>
                                  <button
                                    onClick={
                                      item.id
                                        ? () => approvedPropertyAction(item.id)
                                        : () => approvedUserAction(item._id)
                                    }
                                    className="btn btn-success btn-sm btn-rounded-sm mb-0 mr-2">
                                    Approved
                                  </button>
                                  <button className="btn btn-danger btn-sm btn-rounded-sm mb-0">
                                    Reject
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    ) : (
                      'No Data Found'
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
export default IsLoadingHOC(RemovalRequest);
