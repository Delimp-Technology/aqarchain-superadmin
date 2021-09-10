import React from 'react';
import {SearchForm} from '../../common/Search';
export default function AddUser() {
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
                className="tab-pane fade"
                id="superadmin-nav-tab-add-user"
                role="tabpanel"
                aria-labelledby="superadmin-nav-tab-add-user-tab">
                <div className="text-center text-lg-left p-4 p-lg-5 has-box-shadow">
                  <div className="row">
                    <div className="col-12 ml-5">
                      <a
                        className="text-dark cursor-pointer"
                        onClick="changeActiveTab('superadmin-nav-tab-users')">
                        <h3>
                          <i className="fas fa-arrow-left mr-2" />
                          Add User
                        </h3>
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 my-4">
                      <div className="user-profile-pic-section text-center">
                        <img
                          className="user-profile-pic"
                          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-10 pl-5 border-left">
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
                          <label htmlFor>Role</label>
                        </div>
                      </div>
                      <div className="row mb-4">
                        <div className="col-12">
                          <div id="accordion">
                            <div className="card" id="first-card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link w-100 text-left"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <i
                                      className="fa float-right"
                                      aria-hidden="true"
                                    />
                                    <input
                                      type="checkbox"
                                      id="input1"
                                      name="input1"
                                      defaultValue="Bike"
                                    />
                                    <label
                                      onClick="changeActiveAccordian('#first-card')"
                                      className="mb-0 text-dark"
                                      htmlFor="input1">
                                      Properties Manager
                                    </label>
                                    <br />
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse"
                                aria-labelledby="headingOne"
                                data-parent="#accordion">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can view
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can Remove
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card" id="second-card">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link  w-100 text-left"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <i
                                      className="fa float-right"
                                      aria-hidden="true"
                                    />
                                    <input
                                      type="checkbox"
                                      id="input2"
                                      name="input2"
                                      defaultValue="Bike"
                                    />
                                    <label
                                      onClick="changeActiveAccordian('#second-card')"
                                      className="mb-0 text-dark"
                                      htmlFor="input2">
                                      User Manager
                                    </label>
                                    <br />
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordion">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can view
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can Remove
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card" id="third-card">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link  w-100 text-left"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <i
                                      className="fa float-right"
                                      aria-hidden="true"
                                    />
                                    <input
                                      type="checkbox"
                                      id="input3"
                                      name="input3"
                                      defaultValue="Bike"
                                    />
                                    <label
                                      onClick="changeActiveAccordian('#third-card')"
                                      className="mb-0 text-dark"
                                      htmlFor="input3">
                                      Agents Manager
                                    </label>
                                    <br />
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordion">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can view
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can Remove
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card" id="fourth-card">
                              <div className="card-header" id="headingFour">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link  w-100 text-left"
                                    data-toggle="collapse"
                                    data-target="#collapseFour"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <i
                                      className="fa float-right"
                                      aria-hidden="true"
                                    />
                                    <input
                                      type="checkbox"
                                      id="input4"
                                      name="input4"
                                      defaultValue="Bike"
                                    />
                                    <label
                                      onClick="changeActiveAccordian('#fourth-card')"
                                      className="mb-0 text-dark"
                                      htmlFor="input4">
                                      KYC Manager
                                    </label>
                                    <br />
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseFour"
                                className="collapse"
                                aria-labelledby="headingFour"
                                data-parent="#accordion">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can view
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can Remove
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card" id="fifth-card">
                              <div className="card-header" id="headingFifth">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link  w-100 text-left"
                                    data-toggle="collapse"
                                    data-target="#collapseFive"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <i
                                      className="fa float-right"
                                      aria-hidden="true"
                                    />
                                    <input
                                      type="checkbox"
                                      id="input5"
                                      name="input5"
                                      defaultValue="Bike"
                                    />
                                    <label
                                      onClick="changeActiveAccordian('#fifth-card')"
                                      className="mb-0 text-dark"
                                      htmlFor="input5">
                                      Documents Manager
                                    </label>
                                    <br />
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseFive"
                                className="collapse"
                                aria-labelledby="headingFifth"
                                data-parent="#accordion">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can view
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can Remove
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card" id="sixth-card">
                              <div className="card-header" id="headingSixth">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link  w-100 text-left"
                                    data-toggle="collapse"
                                    data-target="#collapseSix"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <i
                                      className="fa float-right"
                                      aria-hidden="true"
                                    />
                                    <input
                                      type="checkbox"
                                      id="input6"
                                      name="input6"
                                      defaultValue="Bike"
                                    />
                                    <label
                                      onClick="changeActiveAccordian('#sixth-card')"
                                      className="mb-0 text-dark"
                                      htmlFor="input6">
                                      Tokenization Manager
                                    </label>
                                    <br />
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseSix"
                                className="collapse"
                                aria-labelledby="headingSixth"
                                data-parent="#accordion">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can view
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can Remove
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card" id="seventh-card">
                              <div className="card-header" id="headingSeventh">
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link  w-100 text-left"
                                    data-toggle="collapse"
                                    data-target="#collapseSeven"
                                    aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <i
                                      className="fa float-right"
                                      aria-hidden="true"
                                    />
                                    <input
                                      type="checkbox"
                                      id="input7"
                                      name="input7"
                                      defaultValue="Bike"
                                    />
                                    <label
                                      onClick="changeActiveAccordian('#seventh-card')"
                                      className="mb-0 text-dark"
                                      htmlFor="input7">
                                      Finance Manager
                                    </label>
                                    <br />
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseSeven"
                                className="collapse"
                                aria-labelledby="headingSeventh"
                                data-parent="#accordion">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can view
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="col-3 d-flex align-items-center">
                                      <p className="d-inline-block align-middle mr-3 mb-0">
                                        Can Remove
                                      </p>
                                      <input
                                        className="ios-switch --light d-inline-block"
                                        type="checkbox"
                                        defaultChecked
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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
}
