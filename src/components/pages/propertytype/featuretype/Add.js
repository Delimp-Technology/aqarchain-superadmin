// import React from 'react';
// import {Card} from '../../common';
// import {getRoleList, addFeatureType} from '../../../redux/actions';
// import {connect} from 'react-redux';

// class Add extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       feature: '',
//       status: '',
//     };
//   }

//   handleSubmit = () => {
//     const {feature, status} = this.state;
//     if (feature === '') {
//       alert('Feature Name should not be empty');
//       return true;
//     }
//     if (status === '') {
//       alert('Status should not be empty');
//       return true;
//     }
//     this.props
//       .addFeatureType(this.state)
//       .then(result => {
//         console.log(result);
//         this.props.history.push('/featuretype/');
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   render() {
//     const {feature, status} = this.state;
//     return (
//       <Card title="Add Feature Type">
//         <div className="p-5">
//           <div className="row mb-2">
//             <div className="form-group col-md-5">
//               <input
//                 type="text"
//                 className="form-control"
//                 name="feature"
//                 value={feature}
//                 onChange={event => this.setState({feature: event.target.value})}
//                 placeholder="Feature Name"
//               />
//             </div>
//           </div>
//           <div className="row mb-2">
//             <div className="form-group col-md-5">
//               <select
//                 className="custom-select"
//                 id="inputGroupSelect02"
//                 value={status}
//                 onChange={event => this.setState({status: event.target.value})}>
//                 <option>Select Status</option>
//                 <option value="1">Enable</option>
//                 <option value="0">Disable</option>
//               </select>
//             </div>
//           </div>
//           <div className="row mt-4">
//             <div className="d-flex">
//               <button
//                 type="button"
//                 className="btn btn-warning mx-4 px-4"
//                 onClick={() => this.handleSubmit()}>
//                 Submit
//               </button>
//               <button type="button" className="btn btn-outline-dark px-4">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </Card>
//     );
//   }
// }

// export default connect(null, {getRoleList, addFeatureType})(Add);
