import React, {useState, useEffect} from 'react';
import {SearchForm} from '../../common/Search';
import { useDispatch} from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { getPropertyTypeList, submitProperty } from '../../../redux/actions/SuperAdmin';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { toast} from 'react-toastify';

const center = {
		lat: 25.22960510781439,
		lng: 55.31871779754595
	} ,containerStyle = {
		width: '100%',
		height: '480px',
		padding: '7px'
	};

const AddInvestmentProperty = () => {
  let location = useLocation();
  let history = useHistory();
  if(!location.state?.property?._id) history.replace('/addProperty');
	const [propertyData, setPropertyData] = useState({
    AnnualRental: 0,
    Fee: 0,
    Discount: 0,
		propertyType: '',
		propertyValue: 0,
		propertySize: {
			total: 0,
			available: 0
		},
		tokenName: '',
		'tokenAbbreviation': '',
		'totalTokenSupply': 0,
		'tokenPrice': 0,
		'decimalPlaces': 0,
		'fundingAimingToRaise': 0,
		'minfundToAccept': 0,
		'maxForFundRaise': 0,
		'numberOfTokenForFundRaise': 0,
		'perForFundRaise': 0,
		'walletTokens': 0,
		'MinDurForTokenSale': new Date(),
		'MaxDurForTokenSale': new Date(),
		'ExtentionDurationForTokenSale': new Date(),
		'longitude': center.lng,
		'latitude': center.lat
	});
  const [propertyType, setpropertyType] = useState([]);
	const [propertySize, setPropertySize] = useState({size1: 0, size2: 0});

	//Maps
	const [currentPosition, setCurrentPosition] = useState({lat: 25.22960510781439,	lng: 55.31871779754595});
	const onMarkerDragEnd = (e) => {
		const lat = e.latLng.lat();
		const lng = e.latLng.lng();
		setCurrentPosition({ lat, lng});
		setPropertyData({...propertyData, latitude: Number(lat),longitude: Number(lng)});
	};

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyA3lp_UtCAE2SFYcsW5QyqAcEiEdbvDEv8'
	});
	// eslint-disable-next-line no-unused-vars
	const [map, setMap] = useState(null);
	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(
			new window.google.maps.LatLng(25.22960510781439, 55.31871779754595),//south west
			new window.google.maps.LatLng(25.23960510781439, 55.41871779754595) //north east
		);
		map.fitBounds(bounds);
		setMap(map);
	}, []);
	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	//Amentites handling
	const [propTypes, setpropTypes] = useState([]);
	const dispatch = useDispatch();
	const setPropertyType = ({target}) =>{
		let new_type = propertyType.filter(type => type.type_title === target.value);
		setPropertyData({...propertyData, propertyType: new_type[0]._id});
	};
	const propTypesBody = propertyType.map((item, i) => {
		return (
			<option key={item._id} value={item.type_title}>
				{item.type_title}
			</option>
		);
	});
	
	useEffect(() => {
		dispatch(getPropertyTypeList())
			.then(({data})=>{
				let propertyTypesArray = data.map(({type_title}) => type_title);
				setpropertyType(data);
				setpropTypes(propertyTypesArray);
			});
	},[dispatch, propertyData]);

	//Submit property to server
	const submitPropertyHandler = () =>{
		propertyData.propertySize.total = propertySize.size1;
		dispatch(submitProperty(propertyData, location.state?.property?._id || ''))
			.then(()=>{
				toast.success('Property Tokenized');
        history.push('/dashboard/property-listing');
			},err=>{
        if(err.response.status === 400){
          if(Array.isArray(err.response?.data?.message)){
            err.response.data.message.map(msg=>toast.error(msg))
          }else toast.error(err.response.data.message)
        }else if(err.response.status === 401){
          toast.error("Please re-login")
        }else{
          toast.error(err.response.data.message);
        }
			});
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
                            readOnly= {true}
														value = {location.state?.property?.propertyTitle || ''}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="property-type">Property Type</label>
                          <select className="form-control secondary-select" onChange = {setPropertyType}>
                            <option>Select your Property Type</option>
                            {propTypesBody}
                            {/* <option>Residential #1</option>
                            <option>Residential #2</option>
                            <option>Residential #3</option>
                            <option>Residential #4</option>
                            <option>Residential #5</option> */}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="property-admin-fee">
                            Admin Fee
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-admin-fee"
                            placeholder="Enter Admin Fee"
                            onChange = {(e)=>setPropertyData({...propertyData, Fee: Number(e.target.value)})}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="property-user-discount">
                            User Discount
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-user-discount"
                            placeholder="Enter User discount"
                            onChange = {(e)=>setPropertyData({...propertyData, Discount: Number(e.target.value)})}
                          />
                        </div>
                      </div>
                    </div>
                    <div id="search-results-map">
                      <div className="row my-4">
                        <div className="col-lg-12 col-12">
                          <span>
                            <label>Property Location</label>
                          </span>
                          {/* <iframe
                            src="https://www.google.com/maps/d/embed?mid=1kbKceIQ_9WA5qYSCD8YrH4BGgx1pJZHZ&z=12"
                            width="100%"
                            height="480"
                            style={{padding: '7px'}}></iframe> */}
                            {isLoaded ? <GoogleMap
														mapContainerStyle={containerStyle}
														center={center}
														zoom={16}
														onLoad={onLoad}
														onUnmount={onUnmount}
													>
														<Marker
															position={currentPosition}
															onDragEnd={onMarkerDragEnd}
															draggable={true}
														/>
													</GoogleMap> : <></> }
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
                            onChange={(e) =>
															setPropertyData({...propertyData, propertyValue: e.target.value})
														}
                          />
                        </div>
                      </div>
                      <div className="col-lg-7 col-12">
                        <label for="property-size">Toal Property Size</label>
                        <div className="form-group form-inline">
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-size-1"
                            placeholder="127 Sq. Mtr"
                            onChange={(e) =>
															setPropertySize({...propertySize, size1: Number(e.target.value)})
														}
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
                            onChange={(e) =>
															setPropertyData({...propertyData, propertySize:{ available: e.target.value, total: propertyData.total}})
														}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label for="property-annual-rental">
                            Property Annual Rental
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="property-annual-rental"
                            placeholder="Enter Property Annual Rental"
                            onChange={(e) =>
															setPropertyData({...propertyData, AnnualRental: Number(e.target.value)})
														}
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
                            onChange={(e) =>
															setPropertyData({...propertyData, tokenName: e.target.value})
														}
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
                            onChange={(e) =>
															setPropertyData({...propertyData, tokenAbbreviation: e.target.value})
														}
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
                            onChange={(e) =>
															setPropertyData({...propertyData, totalTokenSupply: parseInt(e.target.value)})
														}
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
                            onChange={(e) =>
															setPropertyData({...propertyData, tokenPrice: parseInt(e.target.value)})
														}
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
                            onChange={(e) =>
															setPropertyData({...propertyData, decimalPlaces: parseInt(e.target.value)})
														}
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
                          onChange={(e) =>
														setPropertyData({...propertyData, fundingAimingToRaise: parseInt(e.target.value)})
													}
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
                          onChange={(e) =>
														setPropertyData({...propertyData, minfundToAccept: parseInt(e.target.value)})
													}
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
                          onChange={(e) =>
														setPropertyData({...propertyData, maxForFundRaise: parseInt(e.target.value)})
													}
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
                          onChange={(e) =>
														setPropertyData({...propertyData, numberOfTokenForFundRaise: parseInt(e.target.value)})
													}
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
                          onChange={(e) =>
														setPropertyData({...propertyData, perForFundRaise: parseInt(e.target.value)})
													}
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
                          onChange={(e) =>
														setPropertyData({...propertyData, walletTokens: parseInt(e.target.value)})
													}
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
                            type="date"
                            className="form-control secondary-input"
                            id="min-duration-token-sale"
                            onChange={(e) =>
															setPropertyData({...propertyData, MinDurForTokenSale: new Date(e.target.value)})
														}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <label for="max-duration-token-sale">
                          What is the Maximum Duration of the Token Sale
                        </label>
                        <input
                          type="date"
                          className="form-control secondary-input"
                          id="max-duration-token-sale"
                          onChange={(e) =>
														setPropertyData({...propertyData, MaxDurForTokenSale: new Date(e.target.value)})
													}
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
                          type="date"
                          className="form-control secondary-input"
                          id="extension-of-token-sale"
                          onChange={(e) =>
														setPropertyData({...propertyData, ExtentionDurationForTokenSale: new Date(e.target.value)})
													}
                        />
                      </div>
                    </div>
                    <div className="row my-5">
                      <div className="col-lg-3 col-md-6 col-12">
                        <button
                          className="btn btn-gradient-secondary w-100"
                          data-toggle="modal"
                          data-target="#submitModal"
                          onClick = {submitPropertyHandler}>
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
