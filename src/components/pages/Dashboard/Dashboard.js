import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {SearchForm} from '../../common/Search';
import SuperAdminCard from '../../common/SuperAdminCard';

const Dashboard = props => {
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
                id="superadmin-nav-tab-dashboard"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-dashboard-tab">
                <div className="text-center text-lg-left">
                  <div className="superadmin-cards">
                    <SuperAdminCard />
                    <div className="row mb-3 mb-lg-5">
                      <div className="col-xl-6 mb-3 mb-xl-0">
                        <div className="superadmin-card has-box-shadow has-border-radius">
                          <div className="superadmin-card-body p-4">
                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                              <div className="mr-3">
                                <h2 className="mb-3 text-left font-weight-bold">
                                  Total App Downloads
                                </h2>
                                <div className="d-flex justify-content-start">
                                  <span className="d-flex mr-4 align-items-center">
                                    <img
                                      src={require('../../../assets/images/icon-admin-app_store.svg')}
                                      alt="App Store"
                                      className="mr-3"
                                    />
                                    <h3 className="font-weight-bold mb-0">
                                      900
                                    </h3>
                                  </span>
                                  <span className="d-flex align-items-center">
                                    <img
                                      src={require('../../../assets/images/icon-admin-play_store.svg')}
                                      alt="Play Store"
                                      className="mr-3"
                                    />
                                    <h3 className="font-weight-bold mb-0">
                                      1.2k
                                    </h3>
                                  </span>
                                </div>
                              </div>
                              <div className="ml-auto my-lg-0 my-3">
                                <h1 className="font-weight-bold">2100</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="superadmin-card has-box-shadow has-border-radius">
                          <div className="superadmin-card-body p-4">
                            <div className="d-flex justify-content-around align-items-center">
                              <span className="text-center mr-3">
                                <img
                                  src={require('../../../assets/images/icon-admin-views.svg')}
                                  alt="Views"
                                  className="mb-2"
                                />
                                <h3 className="font-weight-bold mb-0">1.5k</h3>
                                <p className="mb-0">Views</p>
                              </span>
                              <span className="text-center mr-3">
                                <img
                                  src={require('../../../assets/images/icon-admin-likes.svg')}
                                  alt="Likes"
                                  className="mb-2"
                                />
                                <h3 className="font-weight-bold mb-0">3.4k</h3>
                                <p className="mb-0">Likes</p>
                              </span>
                              <span className="text-center mr-3">
                                <img
                                  src={require('../../../assets/images/icon-admin-comments.svg')}
                                  alt="Comments"
                                  className="mb-2"
                                />
                                <h3 className="font-weight-bold mb-0">400</h3>
                                <p className="mb-0">Comments</p>
                              </span>
                              <span className="text-center">
                                <img
                                  src={require('../../../assets/images/icon-admin-agents.svg')}
                                  alt="Agents"
                                  className="mb-2"
                                />
                                <h3 className="font-weight-bold mb-0">2500</h3>
                                <p className="mb-0">Agents</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-6 mb-3 mb-xl-0">
                        <div className="superadmin-card has-box-shadow has-border-radius">
                          <div className="superadmin-card-header grey-header py-3 px-4 has-upper-border-radius">
                            <div className="d-flex justify-content-center align-items-center">
                              <h3 className="mb-0 text-center font-weight-bold">
                                Total Properties
                              </h3>
                            </div>
                          </div>
                          <div className="superadmin-card-body p-4">
                            <div className="d-flex justify-content-center align-items-center flex-wrap mb-4">
                              <span className="mr-3 mr-lg-4">Commercial</span>
                              <span className="mr-3 mr-lg-4">Residential</span>
                              <span className="mr-3 mr-lg-4">Purchased</span>
                              <span className="">Rented</span>
                            </div>
                            <p className="mb-0 text-center">
                              <img
                                src={require('../../../assets/images/sample-pie-chart.png')}
                                alt="Pie Chart"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="superadmin-card has-box-shadow has-border-radius">
                          <div className="superadmin-card-header grey-header py-3 px-4 has-upper-border-radius">
                            <div className="d-flex justify-content-center align-items-center">
                              <h3 className="mb-0 text-center font-weight-bold">
                                Commission Earned
                              </h3>
                            </div>
                          </div>
                          <div className="superadmin-card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-4">
                              <div className="mr-3 text-center">
                                <h3 className="mb-0">Total Trade Value</h3>
                                <h3 className="mb-3 font-weight-bold">
                                  1,55,000SAR
                                </h3>
                              </div>
                              <div className="ml-auto">
                                <select className="form-control">
                                  <option>View</option>
                                  <option>Option #1</option>
                                  <option>Option #2</option>
                                </select>
                              </div>
                            </div>
                            <div className="row d-flex align-items-center">
                              <div className="col-lg-5">
                                <p className="mb-3 mb-lg-0 text-center">
                                  <img
                                    src={require('../../../assets/images/sample-pie-chart-2.png')}
                                    alt="Pie Chart"
                                  />
                                </p>
                              </div>
                              <div className="col-lg-7">
                                <div className="mb-3 mt-1">
                                  <h3 className="mb-3">
                                    Total Trade Value{' '}
                                    <span className="font-weight-bold">
                                      15,500SA
                                    </span>
                                  </h3>
                                  <p className="mb-0 text-center text-lg-left">
                                    <img
                                      src={require('../../../assets/images/sample-progress-bar.png')}
                                      alt="Progress Bar"
                                    />
                                  </p>
                                </div>
                                <div className="">
                                  <h3 className="mb-3">
                                    Total Trade Value{' '}
                                    <span className="font-weight-bold">
                                      15,500SA
                                    </span>
                                  </h3>
                                  <p className="mb-0 text-center text-lg-left">
                                    <img
                                      src={require('../../../assets/images/sample-progress-bar.png')}
                                      alt="Progress Bar"
                                    />
                                  </p>
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
        </div>
      </div>
    </div>
  );
};

export default connect(null, {})(Dashboard);
