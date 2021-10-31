import React, { useState, useEffect } from 'react';
import { SearchForm } from '../../common/Search';
import { addProperty, getPropertyTypeList, getAmenitiesList } from '../../../redux/actions/SuperAdmin';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: 25.22960510781439,
  lng: 55.31871779754595
}, containerStyle = {
  width: '100%',
  height: '480px',
  padding: '7px'
};

const AddProperty = () => {
  
  const [PropertyData, setPropertyData] = useState({
    title: '',
    property_for: '',
    property_type: '',
    currency: 'AED',
    price: 0,
    country: 'United Arad Emirates',
    state: '',
    city: 'Dubai',
    address1: '',
    address2: '',
    description: '',
    number_of_beds: 0,
    number_of_baths: 0,
    propertyArea: 0,
    areaType: 'Sq. ft',
    company_name: '',
    featured: false,
    longitude: center.lng,
    latitude: center.lat,
    tokenizationState: true,
    terms_acceptance: true
  });

  let history = useHistory();
  const dispatch = useDispatch();

  const [amenities, setAmenities] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const [uploads, setUploads] = useState({
    floorImages: [],
    cover: {},
    _360Image: {},
    video: {},
  });

  const submitProperty = () => {
    var data = new FormData();
    for (const [key, value] of Object.entries(PropertyData)) {
      data.append(key, value);
    }
    if (uploads.cover.name) data.append('cover', uploads.cover);
    if (uploads._360Image.name) data.append('_360View', uploads._360Image);
    if (uploads.video.name) data.append('video', uploads.video);
    if (uploads.floorImages.length) {
      for (let i = 0; i < uploads.floorImages.length; i++) {
        data.append('floorPlans', uploads.floorImages[i]);
      }
    }
    if(selectedAmenities.length){
      for(let i=0; i<selectedAmenities.length; i++){
        data.append('amenities', selectedAmenities[i]);
      }
    }
    dispatch(addProperty(data)).then((response)=>{
      toast.success('Property Added Successfully');
      history.push({
        pathname: '/dashboard/tokenization-process',
        state: { property: response.data }
      })
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
  }

  //Maps
  const [currentPosition, setCurrentPosition] = useState({ lat: 25.22960510781439, lng: 55.31871779754595 });
  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
    setPropertyData({ ...PropertyData, latitude: lat, longitude: lng });
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA3lp_UtCAE2SFYcsW5QyqAcEiEdbvDEv8'
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(25.22960510781439, 55.31871779754595),//south west
      new window.google.maps.LatLng(25.23960510781439, 55.41871779754595) //north east
    );
    map.fitBounds(bounds);
  }, []);

  const videoHTML = () => {
    if (uploads.video.name) {
      return <p className="mt-3">{uploads.video.name || `Click here to upload`}</p>;
    } else {
      return <p className="mt-3">Upload property video</p>;
    }
  }
  const _360HTML = () => {
    if (uploads._360Image.name) {
      return <p className="mt-3">{uploads._360Image.name || `Click here to upload`}</p>;
    } else {
      return <p className="mt-3">Upload 360 image</p>;
    }
  }
  const coverHTML = () => {
    if (uploads.cover.name) {
      return <p className="mt-3">{uploads.cover.name || `Click here to upload`}</p>;
    } else {
      return <p className="mt-3">Click here to upload</p>;
    }
  };

  const floorHTML = () => {
    if (uploads.floorImages.length) {
      return <p className="mt-3">{`${uploads.floorImages.length} items`}</p>;
    } else {
      return <p className="mt-3">Click here to upload</p>;
    }
  };

  //Property types and Amenities handling
  const [propTypes, setpropTypes] = useState([]);
  const setPropertyType = ({ target }) => {
    let new_type = propertyType.filter(type => type.type_title === target.value);
    console.log(new_type)
    setPropertyData({ ...PropertyData, property_type: new_type[0]._id });
  };
  const propTypesBody = propTypes.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });
  const [propertyType, setpropertyType] = useState([]);
  useEffect(() => {
    dispatch(getPropertyTypeList())
      .then(({ data }) => {
        let propertyTypesArray = data.map(({ type_title }) => type_title);
        setpropertyType(data);
        setpropTypes(propertyTypesArray);
      });
    dispatch(getAmenitiesList())
      .then(({ data }) => {
        let amenitiesArray = data.map(({ feature }) => feature);
        setAmenities(data);
      });
  }, [dispatch, PropertyData]);

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
                  <div className="text-lg-left p-4 p-lg-5 has-box-shadow">
                    <div className="row">
                      <div className="col-lg-2 col-12">
                        <label className="mb-lg-0 mb-3">Sale Type</label>
                      </div>
                      <div className="col-lg-9 col-12">
                        <div className="form-group">
                          <div className="form-check form-check-inline mr-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="interested-option"
                              id="interested_in_buy"
                              value="buy"
                              onChange={() =>
                                setPropertyData({ ...PropertyData, property_for: 'BUY' })
                              }
                            />
                            <label
                              className="form-check-label"
                              htmlFor="interested_in_buy">
                              Buy
                            </label>
                          </div>
                          <div className="form-check form-check-inline mr-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="interested-option"
                              id="interested_in_rent"
                              value="rent"
                              onChange={() => setPropertyData({ ...PropertyData, property_for: 'BUY' })}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="interested_in_rent">
                              Rent
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="company">
                            Your Company
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="company"
                            placeholder="Enter Your Company"
                            onChange={(e) => setPropertyData({ ...PropertyData, company_name: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="company">
                            Property Name
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="propertyName"
                            placeholder="Enter Property Name"
                            onChange={(e) => setPropertyData({ ...PropertyData, title: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="listedBy">
                            Select Property Type
                          </label>
                          <select className="form-control secondary-select" onChange={setPropertyType}>
                            {/* <option>Villa</option>
                            <option>Condo</option>
                            <option>Studio Apt</option> */}
                            {propTypesBody}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="country">
                            Currency
                          </label>
                          <select className="form-control secondary-select" onChange={(e) => setPropertyData({ ...PropertyData, currency: e.target.value })}>
                            <option>AED</option>
                            <option>BHD</option>
                            <option>HKD</option>
                            <option>JOD</option>
                            <option >USD</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="price">
                            Price
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="price"
                            placeholder="Enter Price"
                            onChange={(e) => setPropertyData({ ...PropertyData, price: Number(e.target.value) })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="country">
                            Country
                          </label>
                          <select className="form-control secondary-select" onChange={(e) => setPropertyData({ ...PropertyData, country: e.target.value })}>
                            <option>United Arad Emirates</option>
                            <option>KSA</option>
                          </select>
                        </div>
                        <label className="ml-2" htmlFor="state">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control secondary-input"
                          id="state"
                          placeholder="State"
                          onChange={(e) => setPropertyData({ ...PropertyData, state: e.target.value })}
                        />
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="city">
                            City
                          </label>
                          <select className="form-control secondary-select" onChange={(e) => setPropertyData({ ...PropertyData, city: e.target.value })}>
                            <option>Dubai</option>
                            <option>Abu Dhabi</option>
                            <option>Sharjah</option>
                            <option>Ajman</option>
                            <option>Al Ain</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-12">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            {/* <iframe
                              src="https://www.google.com/maps/d/embed?mid=1kbKceIQ_9WA5qYSCD8YrH4BGgx1pJZHZ&z=12"
                              width="100%"
                              height="480"
                              style="padding: 7px;"></iframe> */}
                            {isLoaded ? <GoogleMap
                              mapContainerStyle={containerStyle}
                              center={center}
                              zoom={20}
                              onLoad={onLoad}
                            >
                              <Marker
                                position={currentPosition}
                                onDragEnd={onMarkerDragEnd}
                                draggable={true}
                              />
                            </GoogleMap> : <></>}
                            <div id="map"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="address1">
                            Address
                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="address1"
                            placeholder="Address Line 1"
                            onChange={(e) => setPropertyData({ ...PropertyData, address1: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="address2">

                          </label>
                          <input
                            type="text"
                            className="form-control secondary-input"
                            id="address2"
                            placeholder="Address Line 2"
                            onChange={(e) => setPropertyData({ ...PropertyData, address2: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="description">
                            Property Description
                          </label>
                          <textarea
                            className="form-control secondary-input"
                            rows="5"
                            id="description"
                            onChange={(e) => setPropertyData({ ...PropertyData, description: e.target.value })}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-12">
                        <label className="ml-2">Property Features</label>
                      </div>
                    </div>
                    <div className="row my-3">
                      <div className="col-lg-4 col-md-6 col-12 my-lg-0 my-2">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="beds">
                            No. of Beds
                          </label>
                          <input
                            type="number"
                            className="form-control secondary-input"
                            id="beds"
                            placeholder="Enter number of beds"
                            onChange={(e) => setPropertyData({ ...PropertyData, number_of_beds: Number(e.target.value) })}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 my-lg-0 my-2">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="baths">
                            No. of Baths
                          </label>
                          <input
                            type="number"
                            className="form-control secondary-input"
                            id="baths"
                            placeholder="Enter number of baths"
                            onChange={(e) => setPropertyData({ ...PropertyData, number_of_baths: Number(e.target.value) })}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 my-lg-0 my-2">
                        <div className="form-group">
                          <label className="ml-2" htmlFor="area">
                            Total Property Area
                          </label>
                          <div className="row">
                            <div className="col-lg-6">
                              <input
                                type="number"
                                className="form-control secondary-input"
                                id="area"
                                onChange={(e) => setPropertyData({ ...PropertyData, propertyArea: Number(e.target.value) })}
                              />
                            </div>
                            <div className="col-lg-6 my-lg-0 my-2">
                              <select className="form-control secondary-select" onChange={(e) => setPropertyData({ ...PropertyData, areaType: e.target.value })}>
                                <option>Sq. ft</option>
                                <option>Sq. m</option>
                                <option>acre</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-12">
                        <label className="ml-2">Property Amenities</label>
                      </div>
                    </div>
                    {<div className="row my-4">
                      {amenities.map(item => {
                        return (
                          <div className="col-lg-3 col-md-6 col-12 mb-lg-0 my-3" key={item._id}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item.feature}
                                id={item._id}
                                onChange={(e)=>{console.log([...selectedAmenities, e.target.id]);setSelectedAmenities([...selectedAmenities, e.target.id]);}}
                              />
                              <label
                                className="form-check-label font-weight-bold text-dark"
                                htmlFor={item._id} id={item._id}>
                                {item.feature}
                              </label>
                            </div>
                          </div>
                        );
                      })}
                    </div>}
                    <div className="col-lg-12 col-md-12 col-12">
                      <span>
                        <p>Add Property Photos ( Main Cover Photo )</p>
                      </span>
                      <label
                        className="dashed-border p-4"
                        htmlFor="cover-photo">
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
                            id="cover-photo"
                            multiple={false}
                            onChange={(e) => setUploads({ ...uploads, cover: e.target.files[0] })}
                          />
                          {coverHTML()}
                        </div>
                      </label>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12">
                      <span>
                        <p>Add More Photos ( Adding More Photos can boost the lead )</p>
                      </span>
                      <label
                        className="dashed-border p-4"
                        htmlFor="floor-images">
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
                            id="floor-images"
                            multiple={true}
                            onChange={(e) => setUploads({ ...uploads, floorImages: e.target.files })}
                          />
                          {floorHTML()}
                        </div>
                      </label>
                    </div>
                    <span>
                      <p>Upload Property video and 360 image</p>
                    </span>
                    <div className="row my-5">
                      <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label
                          className="dashed-border p-4"
                          htmlFor="360-video">
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
                              id="360-video"
                              multiple={false}
                              onChange={(e) => setUploads({ ...uploads, _360Image: e.target.files[0] })}
                            />
                            {_360HTML()}
                          </div>
                        </label>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 my-lg-0 my-2">
                        <label
                          className="dashed-border p-4"
                          htmlFor="property-video">
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
                              id="property-video"
                              onChange={(e) => setUploads({ ...uploads, video: e.target.files[0] })}
                            />
                            {videoHTML()}
                          </div>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-7 col-12 my-2">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="termsAndConditions"
                          />
                          <label
                            className="form-check-label font-weight-bold text-dark"
                            htmlFor="termsAndConditions">
                            Agree to terms and conditions
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row my-4">
                      <div className="col-lg-4 col-md-6 col-12">
                        <button
                          id="signup-button"
                          className="btn btn-gradient-secondary w-100 my-5"
                          onClick={submitProperty}
                        >
                          Add Property
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddProperty;
