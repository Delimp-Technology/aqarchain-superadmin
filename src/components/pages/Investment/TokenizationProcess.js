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
                    <div class="row text-lg-left text-center">
                      <div class="col-xl-12 col-lg-12 ">
                        <h3 class="font-weight-bold mb-0">
                          Tokenization process
                        </h3>
                      </div>
                    </div>
                    <div class="row my-5">
                      <div class="col-lg-12 col-12">
                        <label class="mr-3 mb-lg-0 mb-3">
                          Do you want to tokenize this property?
                        </label>
                        <div class="form-check form-check-inline mr-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="tokenize-property"
                            id="tokenize-property-true"
                            value="buy"
                          />
                          <label
                            class="form-check-label"
                            for="tokenize-property-true">
                            Yes
                          </label>
                        </div>
                        <div class="form-check form-check-inline mr-3">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="tokenize-property"
                            id="tokenization-property-false"
                            value="rent"
                          />
                          <label
                            class="form-check-label"
                            for="tokenization-property-false">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row my-4">
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label for="property-name-title">
                            Property Name / Title
                          </label>
                          <input
                            type="text"
                            class="form-control secondary-input"
                            id="property-name-title"
                            placeholder="Enter Property Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row my-4">
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label for="property-owner-name">
                            Property Owner Name
                          </label>
                          <input
                            type="text"
                            class="form-control secondary-input"
                            id="property-owner-name"
                            placeholder="Enter Property Owner Name"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6 col-12">
                        <div class="form-group">
                          <label for="ownership">Ownership %</label>
                          <input
                            type="number"
                            class="form-control secondary-input"
                            id="ownership"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row my-5">
                      <div class="col-lg-4 col-md-6 col-12">
                        <button class="btn btn-gradient-secondary w-100">
                          Add Owners
                        </button>
                      </div>
                    </div>
                    <span>
                      <p>Upload Property Ownership Document</p>
                    </span>
                    <div class="row my-5">
                      <div class="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label class="dashed-border p-4" for="document-1">
                          <div class="image-upload">
                            <img
                              class="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              class="custom-file-input d-none"
                              accept="image/*"
                              id="document-1"
                            />
                            <p class="mt-3">Document Title 1</p>
                          </div>
                        </label>
                      </div>
                      <div class="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label class="dashed-border p-4" for="document-2">
                          <div class="image-upload">
                            <img
                              class="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              class="custom-file-input d-none"
                              accept="image/*"
                              id="document-2"
                            />
                            <p class="mt-3">Document Title 2</p>
                          </div>
                        </label>
                      </div>
                      <div class="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label class="dashed-border p-4" for="document-3">
                          <div class="image-upload">
                            <img
                              class="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              class="custom-file-input d-none"
                              accept="image/*"
                              id="document-3"
                            />
                            <p class="mt-3">Document Title 3</p>
                          </div>
                        </label>
                      </div>
                      <div class="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label
                          class="dashed-border p-4"
                          for="add-more-document">
                          <div class="image-upload">
                            <img
                              class="mx-auto cursor"
                              src="public/images/icon-add-more-files.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              class="custom-file-input d-none"
                              accept="image/*"
                              id="add-more-document"
                            />
                            <p class="mt-3">Add More Document</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="row my-4">
                      <div class="col-lg-6 col-12">
                        <label>Property Valuation</label>
                        <div class="form-group form-inline">
                          <input
                            type="number"
                            class="form-control secondary-input mr-lg-2"
                            id="property-valuation"
                            placeholder="Property Valuation"
                          />
                          <select
                            class="form-control secondary-select"
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
                    <div class="row my-5">
                      <div class="col-lg-12 col-md-12 col-12">
                        <span>
                          <p>Property Valuation Certificate</p>
                        </span>
                        <label
                          class="dashed-border p-4"
                          for="property-valuation-certificate">
                          <div class="image-upload">
                            <img
                              class="mx-auto cursor"
                              src="public/images/Upload.svg"
                              style={{width: '30px'}}
                            />
                            <input
                              type="file"
                              class="custom-file-input d-none"
                              accept="image/*"
                              id="property-valuation-certificate"
                            />
                            <p class="mt-3">Click here to upload</p>
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="row my-5">
                      <div class="col-lg-4 col-md-6 col-12">
                        <button
                          class="btn btn-gradient-secondary w-100"
                          data-toggle="modal"
                          data-target="#myModal">
                          Submit For Verification
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

export default TokenizationProcess;
