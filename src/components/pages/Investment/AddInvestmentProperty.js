import React from 'react';
import {SearchForm} from '../../common/Search';

const AddInvestmentProperty = () => {
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
                  <div className="text-lg-left p-4 p-lg-5 has-box-shadow has-border-radius">
                    <div className="row text-lg-left text-center">
                      <div className="col-xl-12 col-lg-12 ">
                        <h3 className="font-weight-bold mb-0">
                          Tokenization process
                        </h3>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="property-name">
                            Property Name / Title
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-name"
                            placeholder="Enter Property Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="property-type">Property Type</label>
                          <select className="form-control secondary-select">
                            <option>Select your Property Type</option>
                            <option>Residential #1</option>
                            <option>Residential #2</option>
                            <option>Residential #3</option>
                            <option>Residential #4</option>
                            <option>Residential #5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="search-results-map">
                      <div className="row my-4">
                        <div className="col-lg-12 col-12">
                          <span>
                            <label>Property Location</label>
                          </span>
                          <iframe
                            src="https://www.google.com/maps/d/embed?mid=1kbKceIQ_9WA5qYSCD8YrH4BGgx1pJZHZ&z=12"
                            width="100%"
                            height="480"
                            style={{padding: '7px'}}></iframe>
                          <div id="map"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-5 col-12">
                        <div className="form-group">
                          <label
                            className="label-with-tooltip"
                            for="property-value">
                            Property Value
                            <img
                              className="form-tooltip"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Paid Up Capital for the SPV is determined by this Value"
                              src="/public/images/icon-form-input-tooltip.svg"
                            />
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-value"
                            placeholder="Enter Property Value"
                          />
                        </div>
                      </div>
                      <div className="col-lg-7 col-12">
                        <label for="property-size">Property Size</label>
                        <div className="form-group form-inline">
                          <input
                            type="text"
                            className="form-control secondary-input mr-lg-2"
                            id="property-size-1"
                            placeholder="127 Sq. Mtr"
                          />
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-size-2"
                            placeholder="1367 Sq. Feet"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="property-size-available-for-tokenization">
                            Property Size Available for Tokenization
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-size-available-for-tokenization"
                            placeholder="Enter Property Size"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="token-name">Token Name</label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="token-name"
                            placeholder="Enter Token Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="token-abbreviation">
                            Token Abbreviation
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="token-abbreviation"
                            placeholder="Enter Token Abbreviation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg-left p-4 p-lg-5 my-5 has-box-shadow has-border-radius">
                    <div className="row my-4">
                      <div className="col-lg-4 col-12">
                        <div className="form-group">
                          <label
                            className="label-with-tooltip"
                            for="total-token-supply">
                            Total Token Supply
                            <img
                              className="form-tooltip"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Token Supply = Property Size Available for tokenization"
                              src="/public/images/icon-form-input-tooltip.svg"
                            />
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="total-token-supply"
                            placeholder="Enter Token Supply"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="form-group">
                          <label
                            className="label-with-tooltip"
                            for="token-price">
                            Token Price{' '}
                            <img
                              className="form-tooltip"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Token Price = Property Value / Total Token Supply"
                              src="/public/images/icon-form-input-tooltip.svg"
                            />
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="token-price"
                            placeholder="Enter Token Abbreviation"
                          />
                          {/* <!-- <small className="form-text text-danger text-left">Token Price = Property Value / Total Token Supply</small> --> */}
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="form-group">
                          <label
                            className="label-with-tooltip"
                            for="decimal-places">
                            Decimal Places{' '}
                            <img
                              className="form-tooltip"
                              data-toggle="tooltip"
                              data-placement="bottom"
                              title="Maximum number of Decimals = 16"
                              src="/public/images/icon-form-input-tooltip.svg"
                            />
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="decimal-places"
                            placeholder="Enter Decimal Places"
                          />
                          {/* <!-- <small className="form-text text-danger text-left">Maximum number of Decimals = 16</small> --> */}
                        </div>
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-6 col-12 mb-lg-0 mb-3 text-lg-left">
                        <label className="label-with-tooltip" for="funding">
                          How much funding are you aiming to raise?{' '}
                          <img
                            className="form-tooltip"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="This Value cannot be greater than the Property Value"
                            src="/public/images/icon-form-input-tooltip.svg"
                          />
                        </label>
                      </div>
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="funding"
                        />
                        {/* <!-- <small className="form-text text-danger text-left">This Value cannot be greater than the Property Value
                                                </small> --> */}
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-6 col-12 mb-lg-0 mb-3 text-lg-left">
                        <label
                          className="label-with-tooltip"
                          for="min-fund-raise">
                          What is the Minimum Value that you will accept for
                          Fundraise{' '}
                          <img
                            className="form-tooltip"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="This Value cannot be greater than the Value you are aiming to Raise"
                            src="/public/images/icon-form-input-tooltip.svg"
                          />
                        </label>
                      </div>
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="min-fund-raise"
                        />
                        {/* <!-- <small className="form-text text-danger text-left">This Value cannot be greater than the Value you are aiming to Raise
                                               </small> --> */}
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-6 col-12 mb-lg-0 mb-3 text-lg-left">
                        <label
                          className="label-with-tooltip"
                          for="max-fund-raise">
                          What is the Maximum Value that you will accept for
                          Fundraise{' '}
                          <img
                            className="form-tooltip"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="This Value cannot be greater than the Value you are aiming to Raise"
                            src="/public/images/icon-form-input-tooltip.svg"
                          />
                        </label>
                      </div>
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="max-fund-raise"
                        />
                        {/* <!-- <small className="form-text text-danger text-left">This Value cannot be greater than the Value you are aiming to Raise
                                               </small> --> */}
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-6 col-12 mb-lg-0 mb-3 text-lg-left">
                        <label
                          className="label-with-tooltip"
                          for="token-available-fund-raise">
                          Number of Tokens Available for Fundraise{' '}
                          <img
                            className="form-tooltip"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="This value = Value of Funding to raise / Token Price"
                            src="/public/images/icon-form-input-tooltip.svg"
                          />
                        </label>
                      </div>
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="token-available-fund-raise"
                        />
                        {/* <!-- <small className="form-text text-danger text-left">This value = Value of Funding to raise / Token Price
                                               </small> --> */}
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-6 col-12 mb-lg-0 mb-3 text-lg-left">
                        <label
                          className="label-with-tooltip"
                          for="no-of-tokens-fund-raise">
                          % of Tokens Available for FundRaise{' '}
                          <img
                            className="form-tooltip"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Number of Tokens Available / Total Token Supply"
                            src="/public/images/icon-form-input-tooltip.svg"
                          />
                        </label>
                      </div>
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="no-of-tokens-fund-raise"
                        />
                        {/* <!-- <small className="form-text text-danger text-left">Number of Tokens Available / Total Token Supply
                                               </small> --> */}
                      </div>
                    </div>

                    <div className="row my-4">
                      <div className="col-lg-6 col-12 mb-lg-0 mb-3 text-lg-left">
                        <label
                          className="label-with-tooltip"
                          for="no-of-tokens-property-owner-wallet">
                          Number of Tokens Locked in Property Owner Wallet{' '}
                          <img
                            className="form-tooltip"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Total Token Supply - No. of Tokens Available for Fund Raise"
                            src="/public/images/icon-form-input-tooltip.svg"
                          />
                        </label>
                      </div>
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="no-of-tokens-property-owner-wallet"
                        />
                        {/* <!-- <small className="form-text text-danger text-left">Total Token Supply - No. of Tokens Available for FundRaise
                                               </small> --> */}
                      </div>
                    </div>
                  </div>
                  <div className="text-lg-left p-4 p-lg-5 my-5 has-box-shadow has-border-radius">
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="min-duration-token-sale">
                            What is the Minimum Duration of the Token Sale
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="min-duration-token-sale"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <label for="max-duration-token-sale">
                          What is the Maximum Duration of the Token Sale
                        </label>
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="max-duration-token-sale"
                        />
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12 mb-lg-0 mb-3 d-flex align-items-center">
                        <label for="extension-of-token-sale">
                          Allow Extension of Token Sale on completion of the
                          Maximum Duration of the Token Sale
                        </label>
                      </div>
                      <div className="col-lg-6 col-12">
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="extension-of-token-sale"
                        />
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-3 col-md-6 col-12">
                        <button
                          className="btn btn-gradient-secondary w-100"
                          data-toggle="modal"
                          data-target="#submitModal">
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
    </>
  );
};

export default AddInvestmentProperty;
