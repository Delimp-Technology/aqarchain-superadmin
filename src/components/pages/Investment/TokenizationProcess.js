import React from 'react';
import {SearchForm} from '../../common/Search';
import {Link} from 'react-router-dom';
const TokenizationProcess = () => {
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
                    <div className="row text-lg-left text-center">
                      <div className="col-xl-12 col-lg-12 ">
                        <h3 className="font-weight-bold mb-0">
                          Tokenization process
                        </h3>
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-12 col-12">
                        <label className="mr-3 mb-lg-0 mb-3">
                          Do you want to tokenize this property?
                        </label>
                        <div className="form-check form-check-inline mr-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="tokenize-property"
                            id="tokenize-property-true"
                            value="buy"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tokenize-property-true">
                            Yes
                          </label>
                        </div>
                        <div className="form-check form-check-inline mr-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="tokenize-property"
                            id="tokenization-property-false"
                            value="rent"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="tokenization-property-false">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="property-name-title">
                            Property Name / Title
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-name-title"
                            placeholder="Enter Property Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="property-owner-name">
                            Property Owner Name
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-owner-name"
                            placeholder="Enter Property Owner Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="ownership">Ownership %</label>
                          <input
                            type="number"
                            className="form-control secondary-input"
                            id="ownership"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-4 col-md-6 col-12">
                        <button className="btn btn-gradient-secondary w-100">
                          Add Owners
                        </button>
                      </div>
                    </div>
                    <span>
                      <p>Upload Property Ownership Document</p>
                    </span>
                    <div className="row my-5">
                      <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label
                          className="dashed-border p-4"
                          htmlFor="document-1">
                          <div className="image-upload">
                            <img
                              className="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="document-1"
                            />
                            <p className="mt-3">Document Title 1</p>
                          </div>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label
                          className="dashed-border p-4"
                          htmlFor="document-2">
                          <div className="image-upload">
                            <img
                              className="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="document-2"
                            />
                            <p className="mt-3">Document Title 2</p>
                          </div>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label
                          className="dashed-border p-4"
                          htmlFor="document-3">
                          <div className="image-upload">
                            <img
                              className="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="document-3"
                            />
                            <p className="mt-3">Document Title 3</p>
                          </div>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label
                          className="dashed-border p-4"
                          htmlFor="add-more-document">
                          <div className="image-upload">
                            <img
                              className="mx-auto cursor"
                              src="public/images/icon-add-more-files.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="add-more-document"
                            />
                            <p className="mt-3">Add More Document</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <label>Property Valuation</label>
                        <div className="form-group form-inline">
                          <input
                            type="number"
                            className="form-control secondary-input mr-lg-2"
                            id="property-valuation"
                            placeholder="Property Valuation"
                          />
                          <select
                            className="form-control secondary-select"
                            id="property-valuation-currency">
                            <option>AED</option>
                            <option>AED #1</option>
                            <option>AED #2</option>
                            <option>AED #3</option>
                            <option>AED #4</option>
                            <option>AED #5</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-12 col-md-12 col-12">
                        <span>
                          <p>Property Valuation Certificate</p>
                        </span>
                        <label
                          className="dashed-border p-4"
                          htmlFor="property-valuation-certificate">
                          <div className="image-upload">
                            <img
                              className="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="property-valuation-certificate"
                            />
                            <p className="mt-3">Click here to upload</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-4 col-md-6 col-12">
                        <Link to="/dashboard/add-tokenization-property">
                          <button
                            className="btn btn-gradient-secondary w-100"
                            data-toggle="modal"
                            data-target="#myModal">
                            Submit For Verification
                          </button>
                        </Link>
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

export default TokenizationProcess;
