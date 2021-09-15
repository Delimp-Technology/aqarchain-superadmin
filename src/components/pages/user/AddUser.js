import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {capFirstLetter} from '../../../utils/utils';
import {SearchForm} from '../../common/Search';
const AddUser = prosp => {
  const [roleList, setRoleList] = useState([]);
  const state = useSelector(state => state);
  useEffect(() => {
    setRoleList(state.config.role);
  }, []);
  console.log('Yes I am working', roleList);
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
                id="superadmin-nav-tab-add-user"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-add-user-tab">
                <div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
                  <div className="row">
                    <div className="col-12 ml-5">
                      <h3 className="font-weight-bold mb-0">Add User</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 pl-5">
                      <div className="col-2 my-4">
                        <div className="user-profile-pic-section text-center">
                          <img
                            className="user-profile-pic"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <label htmlFor="agent-first-name">First Name</label>
                            <input
                              type="text"
                              className="form-control secondary-input"
                              id="agent-first-name"
                              defaultValue="Bishfuq"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <label htmlFor="agent-last-name">Last Name</label>
                            <input
                              type="text"
                              className="form-control secondary-input"
                              id="agent-last-name"
                              defaultValue="Khan"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col-lg-6 col-12">
                          <label>Mobile Number</label>
                          <div className="form-group form-inline">
                            <select
                              className="form-control secondary-select mr-lg-2"
                              id="agent-mobile-no-prepend">
                              <option>+966</option>
                              <option>+91</option>
                              <option>+93</option>
                              <option>+942</option>
                              <option>+933</option>
                              <option>+955</option>
                            </select>
                            <input
                              type="text"
                              className="form-control secondary-input"
                              id="agent-mobile-no"
                              defaultValue="55 441 3171"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="form-group">
                            <label htmlFor="agent-email-id">Email ID</label>
                            <input
                              type="email"
                              className="form-control secondary-input"
                              id="agent-email-id"
                              defaultValue="bishfuq@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label htmlFor="">Role</label>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-12">
                          <div id="accordion">
                            {roleList !== 0 ? (
                              <>
                                {roleList.map((item, index) => (
                                  <div
                                    className="card"
                                    key={index}
                                    id="first-card">
                                    <div
                                      className="card-header"
                                      id={`headingOne${item._id}`}>
                                      <h5 className="mb-0">
                                        <button
                                          className="btn btn-link w-100 text-left"
                                          data-toggle="collapse"
                                          data-target={`#collapseOne${item._id}`}
                                          aria-expanded="true"
                                          aria-controls={`collapseOne${item._id}`}>
                                          <i
                                            className="fa float-right"
                                            aria-hidden="true"
                                          />
                                          <input
                                            type="checkbox"
                                            id={`input${item._id}`}
                                            name="input1"
                                            defaultValue="Bike"
                                          />
                                          <label
                                            className="mb-0 text-dark"
                                            style={{
                                              textTransform: 'capitalize',
                                            }}
                                            htmlFor={`input${item._id}`}>
                                            {item.name}
                                          </label>
                                          <br />
                                        </button>
                                      </h5>
                                    </div>
                                    <div
                                      id={`collapseOne${item._id}`}
                                      className="collapse"
                                      aria-labelledby={`headingOne${item._id}`}
                                      data-parent="#accordion">
                                      <div className="card-body">
                                        <div
                                          className="row"
                                          style={{rowGap: '0.75rem'}}>
                                          {Object.keys(
                                            item.resource[0].actions,
                                          ).map((key, index) => {
                                            return (
                                              <div
                                                className="col-3 d-flex align-items-center"
                                                key={index}>
                                                <p
                                                  className="align-middle mr-3 mb-0"
                                                  style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '0.5rem',
                                                  }}>
                                                  {item.resource[0].actions[
                                                    key
                                                  ] ? (
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 24 24"
                                                      width="20"
                                                      height="20">
                                                      <path
                                                        fill={'#fbb040'}
                                                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"
                                                      />
                                                    </svg>
                                                  ) : (
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 24 24"
                                                      width="20"
                                                      height="20">
                                                      <path
                                                        fill="#9a9a9a"
                                                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11.414L9.172 7.757 7.757 9.172 10.586 12l-2.829 2.828 1.415 1.415L12 13.414l2.828 2.829 1.415-1.415L13.414 12l2.829-2.828-1.415-1.415L12 10.586z"
                                                      />
                                                    </svg>
                                                  )}

                                                  {capFirstLetter(key)}
                                                </p>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </>
                            ) : (
                              'No Data Found'
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="row my-4">
                        <div className="col-12">
                          <button className="btn btn-gradient-secondary">
                            Submit
                          </button>
                          <button className="btn btn-gradient">Cancel</button>
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
};

export default AddUser;
