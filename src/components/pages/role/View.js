// import React from 'react';
// import {Card, Loading} from '../../common';
// import CheckboxTree from 'react-checkbox-tree';
// import nodes from './defaultRole';
// import {updateRole, getRole, deleteRole} from '../../../redux/actions';
// import {connect} from 'react-redux';
// import {confirmAlert} from 'react-confirm-alert'; // Import
// import {ToastContainer, toast} from 'react-toastify';
// import {toasterSetting} from '../../../theme';

// class View extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onCheck = this.onCheck.bind(this);
//     this.onExpand = this.onExpand.bind(this);
//     this.state = {
//       checked: [],
//       expanded: ['/app'],
//       name: '',
//       roleType: 'admin',
//       id: '',
//       loading: false,
//     };
//   }

//   componentDidMount() {
//     const {id} = this.props.match.params;
//     this.props
//       .getRole(id)
//       .then(result => {
//         this.setState({...result.data, id: id});
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//   onCheck(checked) {
//     this.createPermissionArray(checked).then(result => {
//       this.setState({checked, resource: result});
//     });
//   }

//   onExpand(expanded) {
//     this.setState({expanded});
//   }

//   createPermissionArray = async checked => {
//     let path = '';
//     let resource = [];
//     for (let i = 0; i < checked.length; i++) {
//       path = checked[i].split('/')[0];
//       let value = checked[i].split('/')[1];
//       if (resource.length == 0) {
//         resource.push({
//           path: path,
//           action: {
//             [value]: true,
//           },
//         });
//       } else {
//         //console.log('resource', resource);
//         var indexValue = await Promise.all(
//           resource.map(async (item, index) => {
//             // console.log(item);
//             if (item.path == path) {
//               //console.log("found", path, index);
//               return index;
//             }
//           }),
//         );

//         const indexValueMain = indexValue[indexValue.length - 1];
//         if (indexValueMain === undefined) {
//           //  console.log('undined');
//           resource.push({
//             path: path,
//             action: {
//               [value]: true,
//             },
//           });
//         } else {
//           resource[indexValueMain].action = {
//             ...resource[indexValueMain].action,
//             [value]: true,
//           };
//           // console.log('test', indexValueMain);
//         }
//       }
//     }
//     return resource;
//   };
//   handleSubmit = () => {
//     if (this.state.checked.length === 0) {
//       alert('please select resourece');
//     }
//     if (this.state.name === '') {
//       alert('Name must not be empty');
//     }
//     this.setState({loading: true});
//     this.props
//       .updateRole(this.state)
//       .then(result => {
//         console.log(result);
//         this.setState({loading: false});
//         toast.success('Role updated', toasterSetting);
//         //this.props.history.push("/role/");
//       })
//       .catch(error => {
//         this.setState({loading: false});
//         toast.error('Something Wrong!', toasterSetting);
//         console.log(error);
//       });
//   };
//   handleDelete = () => {
//     console.log(this.state);
//     confirmAlert({
//       title: 'Delete Role',
//       message: 'Are you sure to do this.',
//       buttons: [
//         {
//           label: 'Yes',
//           onClick: () => {
//             this.props
//               .deleteRole(this.state.id)
//               .then(result => {
//                 console.log(result);
//                 this.props.history.push('/role/');
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
//     const {checked, expanded, name, loading} = this.state;
//     console.log(this.state);
//     return (
//       <>
//         {loading ? <Loading /> : null}
//         <ToastContainer />
//         <Card title="Role">
//           <div className="p-5">
//             <div className="row mb-2">
//               <div className="form-group col-md-5">
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="inputEmail4"
//                   value={name}
//                   onChange={event => this.setState({name: event.target.value})}
//                   placeholder="Role Name"
//                 />
//               </div>
//             </div>

//             <h5 className="mb-4 pb-3"> Select Resource </h5>
//             <CheckboxTree
//               checked={checked}
//               expanded={expanded}
//               iconsclassName="fa5"
//               nodes={nodes}
//               onCheck={this.onCheck}
//               onExpand={this.onExpand}
//             />
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
//                   onClick={() => this.props.history.push('/role/')}>
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

// export default connect(null, {updateRole, getRole, deleteRole})(View);
