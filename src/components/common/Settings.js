// import React from 'react';
// import {connect} from 'react-redux';
// import {logOut} from '../../redux/actions';

// const Settings = ({adminUser, logOut}) => {
//   console.log('adminuser ', adminUser);
//   const logOutUser = () => {
//     logOut();
//   };
//   return (
//     <div className="dropleft dropdown">
//       <a
//         className="nav-link"
//         href="#"
//         role="button"
//         id="dropdownMenuLink"
//         data-toggle="dropdown"
//         aria-haspopup="true"
//         aria-expanded="false">
//         <i className="fas fa-cog text-dark header_icon"></i>
//       </a>

//       <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//         <div className="dropdown-item">Welcome {adminUser.firstName}</div>
//         <div className="dropdown-item" onClick={logOutUser}>
//           Logout
//         </div>
//       </div>
//     </div>
//   );
// };
// const mapStateToProps = ({app}) => {
//   const {adminUser} = app;
//   return {
//     adminUser,
//   };
// };
// export default connect(mapStateToProps, {logOut})(Settings);
