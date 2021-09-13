// import React from 'react';
// import {Card, Loading} from '../../common';
// import {
//   deletePropertyType,
//   updatePropertyType,
//   getPropertyType,
//   getFeatureTypeList,
// } from '../../../redux/actions';
// import {connect} from 'react-redux';
// import {confirmAlert} from 'react-confirm-alert'; // Import
// import {ToastContainer, toast} from 'react-toastify';
// import {toasterSetting} from '../../../theme';

// class View extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       type_title: '',
//       type_slug: '',
//       features: [],
//       data: [],
//       loading: false,
//     };
//   }

//   componentDidMount() {
//     const {id} = this.props.match.params;
//     this.props
//       .getPropertyType(id)
//       .then(result => {
//         this.setState({...result.data, id: id});
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     this.props
//       .getFeatureTypeList()
//       .then(result => {
//         this.setState({data: result.data});
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   handleChange = e => {
//     var options = e.target.options;
//     var value = [];
//     for (var i = 0, l = options.length; i < l; i++) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     this.setState({features: value});
//   };
//   handleSubmit = () => {
//     const {type_title, type_slug, features} = this.state;
//     if (type_title === '') {
//       alert('Feature Name should not be empty');
//       return true;
//     }
//     if (type_slug === '') {
//       alert('Status should not be empty');
//       return true;
//     }
//     if (features.length === 0) {
//       alert('Fatures should not be empty');
//       return true;
//     }
//     this.setState({loading: true});
//     this.props
//       .updatePropertyType(this.state)
//       .then(result => {
//         console.log(result);
//         this.setState({loading: false});
//         toast.success('Feature updated', toasterSetting);
//         //this.props.history.push("/role/");
//       })
//       .catch(error => {
//         this.setState({loading: false});
//         toast.error('Something Wrong!', toasterSetting);
//         console.log(error);
//       });
//   };

//   handleDelete = () => {
//     confirmAlert({
//       title: 'Delete Property Type',
//       message: 'Are you sure to do this.',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => {
//             this.props
//               .deletePropertyType(this.state.id)
//               .then(result => {
//                 console.log(result);
//                 this.props.history.push('/propertytype/');
//               })
//               .catch(error => {
//                 console.log(error);
//               });
//           },
//         },
//         {
//           label: 'No',
//           onClick: () => {},
//         },
//       ],
//     });
//   };
//   render() {
//     const {type_title, type_slug, features, data, loading} = this.state;
//     return (
//       <>
//         {loading ? <Loading /> : null}
//         <ToastContainer />
//         <Card title="Feature">
//           <div className="p-5">
//             <div className="row mb-2">
//               <div className="form-group col-md-5">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="feature"
//                   value={type_title}
//                   onChange={event =>
//                     this.setState({type_title: event.target.value})
//                   }
//                   placeholder="Title"
//                 />
//               </div>
//             </div>
//             <div className="row mb-2">
//               <div className="form-group col-md-5">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="type_slug"
//                   value={type_slug}
//                   onChange={event =>
//                     this.setState({type_slug: event.target.value})
//                   }
//                   placeholder="slug"
//                 />
//               </div>
//             </div>
//             <div className="row mb-2">
//               <div className="form-group col-md-5">
//                 <label for="exampleFormControlSelect2">Feature Types</label>
//                 <select
//                   multiple
//                   className="form-control"
//                   value={features}
//                   onChange={e => this.handleChange(e)}
//                   id="exampleFormControlSelect2">
//                   {data.map(item => {
//                     return (
//                       <option key={item._id} value={item._id}>
//                         {item.feature}
//                       </option>
//                     );
//                   })}
//                 </select>
//               </div>
//             </div>

//             <div className="row mt-4">
//               <div className="d-flex">
//                 <button
//                   type="button"
//                   className="btn btn-warning mx-4 px-4"
//                   onClick={() => this.handleSubmit()}>
//                   Update
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger mx-4 px-4"
//                   onClick={() => this.handleDelete()}>
//                   Delete
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-outline-dark px-4"
//                   onClick={() => this.props.history.push('/propertytype/')}>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </Card>
//       </>
//     );
//   }
// }

// export default connect(null, {
//   deletePropertyType,
//   updatePropertyType,
//   getPropertyType,
//   getFeatureTypeList,
// })(View);
