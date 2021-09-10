import React from 'react';
import {Card, Loading} from '../../common';
import {
  getRoleList,
  deleteAdminUser,
  updateAdminUser,
  getAdminUser,
} from '../../../redux/actions';
import {connect} from 'react-redux';
import {confirmAlert} from 'react-confirm-alert'; // Import
import {ToastContainer, toast} from 'react-toastify';
import {toasterSetting} from '../../../theme';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      roleId: '',
      roleData: [],
      loading: false,
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props
      .getAdminUser(id)
      .then(result => {
        this.setState({...result.data, id: id});
      })
      .catch(error => {
        console.log(error);
      });
    this.props
      .getRoleList()
      .then(result => {
        this.setState({roleData: result.data});
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleSubmit = () => {
    const {firstName, lastName, email, password, roleId} = this.state;
    if (firstName === '') {
      alert('First Name should not be empty');
      return true;
    }
    if (lastName === '') {
      alert('Last Name should not be empty');
      return true;
    }
    if (email === '') {
      alert('first name should not be empty');
      return true;
    }
    //  if(password === "") {
    // 	alert("Password should not be empty");
    // 	return true;
    //  }
    if (roleId === '') {
      alert('Please Select User Role');
      return true;
    }
    this.setState({loading: true});
    this.props
      .updateAdminUser(this.state)
      .then(result => {
        console.log(result);
        this.setState({loading: false});
        toast.success('Role updated', toasterSetting);
        //this.props.history.push("/role/");
      })
      .catch(error => {
        this.setState({loading: false});
        toast.error('Something Wrong!', toasterSetting);
        console.log(error);
      });
  };

  handleDelete = () => {
    console.log(this.state);
    confirmAlert({
      title: 'Delete User',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.props
              .deleteAdminUser(this.state.id)
              .then(result => {
                console.log(result);
                this.props.history.push('/adminuser/');
              })
              .catch(error => {
                console.log(error);
              });
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      roleData,
      roleId,
      loading,
    } = this.state;
    return (
      <>
        {loading ? <Loading /> : null}
        <ToastContainer />
        <Card title="Add User">
          <div className="p-5">
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={firstName}
                  onChange={event =>
                    this.setState({firstName: event.target.value})
                  }
                  placeholder="User Name"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={event =>
                    this.setState({lastName: event.target.value})
                  }
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  placeholder="Enter your mail id"
                  onChange={event => this.setState({email: event.target.value})}
                />
              </div>
            </div>
            {/* <div className="row mb-2">
    					<div className="form-group col-md-5">
    						<input
    							type="password"
    							className="form-control"
    							placeholder="Password"
    							password={password}
    							onChange={(event) => this.setState({password: event.target.value})}
    						/>
    					</div>
    				</div> */}
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <select
                  className="custom-select"
                  id="inputGroupSelect02"
                  value={roleId}
                  onChange={event =>
                    this.setState({roleId: event.target.value})
                  }>
                  <option>Select Role</option>
                  {roleData.length
                    ? roleData.map(item => {
                        return (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        );
                      })
                    : null}
                </select>
              </div>
            </div>
            <div className="row mt-4">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-warning mx-4 px-4"
                  onClick={() => this.handleSubmit()}>
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-4 px-4"
                  onClick={() => this.handleDelete()}>
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-4"
                  onClick={() => this.props.history.push('/adminuser/')}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Card>
      </>
    );
  }
}

export default connect(null, {
  getRoleList,
  deleteAdminUser,
  updateAdminUser,
  getAdminUser,
})(View);
