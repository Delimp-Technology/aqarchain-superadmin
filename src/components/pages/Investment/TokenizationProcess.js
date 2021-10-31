import React, { useState } from 'react';
import { SearchForm } from '../../common/Search';
// import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
// import AddInvestmentProperty from './AddInvestmentProperty';
import { useDispatch } from 'react-redux';
import { initiaPropertySubmit, uploadImage } from '../../../redux/actions/SuperAdmin';
import { ToastContainer, toast } from 'react-toastify';

const TokenizationProcess = () => {
  let location = useLocation();
  let history = useHistory();
  if(!location.state?.property?._id) history.replace('/addProperty');
  const [PropertyData, setPropertyData] = useState({
    TokenizationStatus: false,
    propertyTitle: location.state?.property?.title || '',
    ownershipDocuments: [],
    owners: [],
    valuation: 0,
    valuationCertificate: '',
    id: location.state?.property?._id || '',
    ROI: null
  });
  const [OwnerData, setOwnerData] = useState({
    name: '',
    ownership: 0
  });
  const [uploads, setUploads] = useState({
    ownershipDocuments: [],
    valuationCertificate: {}
  });

  const dispatch = useDispatch();
  const addOwner = () => {
    if (OwnerData.name && OwnerData.ownership) {
      toast.success(`Owner ${OwnerData.name} added`);
      setPropertyData({ ...PropertyData, owners: [...PropertyData.owners, OwnerData] });
    } else if (OwnerData.name) toast.error('Ownership % not filled');
    else toast.error('Empty owner name');
    setOwnerData({ name: null, ownership: null });
  };
  const handleImageUploads = (e) => {
    const formData = new FormData();
    setUploads({ ...uploads, ownershipDocuments: [...uploads.ownershipDocuments, e.target.files[0]] });
    formData.append(
      'image',
      e.target.files[0],
      e.target.files[0].name
    );
    dispatch(uploadImage(formData)).then((response) => {
      toast.success(response.message);
      setPropertyData({ ...PropertyData, ownershipDocuments: [...PropertyData.ownershipDocuments, response.data] });
    }, (error) => {
      if (Array.isArray(error.message) && error.message.length) {
        error.message.map(message => toast.error(message));
      } else if (Array.isArray(error.data) && error.data.length) {
        error.data.map(message => toast.error(message));
      } else toast.error(error.message);
    });
  };

  const valuationCertificateUploader = (e) => {
    const formData = new FormData();
    setUploads({ ...uploads, valuationCertificate: e.target.files[0] });
    formData.append(
      'image',
      e.target.files[0],
      e.target.files[0].name
    );
    dispatch(uploadImage(formData)).then((response) => {
      setPropertyData({ ...PropertyData, valuationCertificate: response.data });
      toast.success(response.message);
    }, (error) => {
      if (Array.isArray(error.message) && error.message.length) {
        error.message.map(message => toast.error(message));
      } else if (Array.isArray(error.data) && error.data.length) {
        error.data.map(message => toast.error(message));
      } else toast.error(error.message);
    });
  };

  const formHandler = () => {
    dispatch(initiaPropertySubmit(PropertyData))
      .then(
        response => {
          toast.success('Tokenization initiated');
          history.push({
            pathname: '/dashboard/add-tokenization-property',
            state: { property: response.data }
          })
        },
        err => {
          if(err.status === 400){
            err.data.message.map(msg=>toast.error(msg));
          }else if(err.status === 401){
            toast.error("Please re-login")
          }else{
            toast.error(err.response.data.message);
          }
        }
      );
  };

  const valuationHTML = () => {
    if (uploads.valuationCertificate.name) {
      return <p className="mt-3">{uploads.valuationCertificate.name}</p>;
    } else {
      return <p className="mt-3">Click here to upload</p>;
    }
  };

  const DocHTML = (val) => {

    if (val === 1) {
      if (uploads.ownershipDocuments.length && uploads.ownershipDocuments[0]) {
        return <p className="mt-3">{uploads.ownershipDocuments[0].name}</p>;
      } else {
        return <p className="mt-3">Document Title 1</p>;
      }
    } else if (val === 2) {
      if (uploads.ownershipDocuments.length && uploads.ownershipDocuments[1]) {
        return <p className="mt-3">{uploads.ownershipDocuments[1].name}</p>;
      } else {
        return <p className="mt-3">Document Title 2</p>;
      }
    } else if (val === 3) {
      if (uploads.ownershipDocuments.length && uploads.ownershipDocuments[2]) {
        return <p className="mt-3">{uploads.ownershipDocuments[2].name}</p>;
      } else {
        return <p className="mt-3">Document Title 3</p>;
      }
    } else {
      if (uploads.ownershipDocuments.length > 2) {
        return <p className="mt-3">+{uploads.ownershipDocuments.length} Documents</p>;
      } else {
        return <p className="mt-3">Add More Document</p>;
      }
    }
  };
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
                            onChange={() =>
                              setPropertyData({ ...PropertyData, TokenizationStatus: true })
                            }
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
                            onChange={() =>
                              setPropertyData({ ...PropertyData, TokenizationStatus: false })
                            }
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
                            readOnly = {true}
                            placeholder={location.state?.property?.title || ''}
                            onChange={e =>
                              setPropertyData({ ...PropertyData, propertyTitle: e.target.value })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label htmlFor="property-name-title">
                            Property ROI
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-roi"
                            placeholder="Enter Property ROI"
                            onChange={e =>
                              setPropertyData({ ...PropertyData, ROI: Number(e.target.value) })
                            }
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
                            onChange={e =>
                              setOwnerData({ ...OwnerData, name: e.target.value })
                            }
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
                            onChange={e => setOwnerData({ ...OwnerData, ownership: parseInt(e.target.value) })
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-4 col-md-6 col-12">
                        <button className="btn btn-gradient-secondary w-100" onClick={addOwner}>
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
                              style={{ width: '30px' }}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="document-1"
                              multiple={false}
                              onChange={handleImageUploads}
                            />
                            {DocHTML(1)}
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
                              style={{ width: '30px' }}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              multiple={false}
                              id="document-2"
                              onChange={handleImageUploads}
                            />
                            {DocHTML(2)}
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
                              style={{ width: '30px' }}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              multiple={false}
                              id="document-3"
                              onChange={handleImageUploads}
                            />
                            {DocHTML(3)}
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
                              style={{ width: '30px' }}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="add-more-document"
                              multiple={true}
                            />
                            {DocHTML()}
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
                            onChange={e =>
                              setPropertyData({ ...PropertyData, valuation: parseInt(e.target.value) })
                            }
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
                              style={{ width: '30px' }}
                            />
                            <input
                              type="file"
                              className="custom-file-input d-none"
                              accept="image/*"
                              id="property-valuation-certificate"
                              multiple={false}
                              onChange={valuationCertificateUploader}
                            />
                            {valuationHTML()}
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-4 col-md-6 col-12">
                        {/* <Link to="/dashboard/add-tokenization-property"> */}
                          <button
                            className="btn btn-gradient-secondary w-100"
                            data-toggle="modal"
                            data-target="#myModal"
                            onClick={formHandler}>
                            Submit For Verification
                          </button>
                        {/* </Link> */}
                      </div>
                    </div>
                  </div>
                  <ToastContainer />
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
