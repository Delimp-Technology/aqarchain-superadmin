import React from 'react';
import {Card} from '../../common';
import {getRoleList, addUser, getFeatureTypeList} from '../../../redux/actions';
import {connect} from 'react-redux';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import {ToastContainer, toast} from 'react-toastify';
import {toasterSetting} from '../../../theme';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      password: '',
      password_confirm: '',
      email: '',
      biometric: '1',
      currentLang: 'en',
      cr_number: '',
      terms: true,
      roleId: '',
      mobile: '',
      country_code: '',
      vat_number: '',
      terms_acceptance: true,
      vatCertificate: '',
      data: [],
    };
  }

  componentDidMount() {
    this.props
      .getFeatureTypeList()
      .then(result => {
        this.setState({data: result.data});
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleChange = e => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({features: value});
  };

  handleSubmit = () => {
    const {first_name, email, last_name} = this.state;
    if (first_name === '') {
      alert('First Name should not be empty');
      return true;
    }
    if (last_name === '') {
      alert('Last Name should not be empty');
      return true;
    }
    if (email === '') {
      alert('Email should not be empty');
      return true;
    }
    this.props
      .addUser(this.state)
      .then(result => {
        console.log(result);
        this.props.history.push('/user/');
      })
      .catch(error => {
        toast.error(error.message, toasterSetting);
        console.log(error);
        error.data.map(item => {
          toast.error(item.msg);
        });
      });
  };
  render() {
    const {
      first_name,
      last_name,
      mobile,
      email,
      password,
      password_confirm,
      vat_number,
      cr_number,
      roleId,
    } = this.state;
    console.log(this.state);
    return (
      <>
        <ToastContainer />
        <Card title="Add User">
          <div className="p-5">
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="First Name"
                  value={first_name}
                  onChange={e => this.setState({first_name: e.target.value})}
                />
              </div>
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Last Name "
                  value={last_name}
                  onChange={e => this.setState({last_name: e.target.value})}
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="form-group col-md-5">
                {/* <PhoneInput
    							flags={flags}
    							defaultCountry="RU"
    							placeholder="Enter phone number"
    							value={mobile}
    							onChange={(e) => this.setState({mobile: e.target.value})}/> */}
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={mobile}
                  onChange={e => this.setState({mobile: e.target.value})}
                />
              </div>
              <div className="form-group col-md-5">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  value={email}
                  onChange={e => this.setState({email: e.target.value})}
                  placeholder="Email"
                />
              </div>
            </div>

            <h5 className="mb-4 pb-3"> Account Information </h5>
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <select
                  className="form-control"
                  id="inputPassword4"
                  onChange={e => this.setState({roleId: e.target.value})}
                  value={roleId}>
                  <option>Select User Type</option>
                  <option value="1">Individual</option>
                  <option value="2">Agent</option>
                </select>
              </div>
            </div>
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  value={cr_number}
                  onChange={e => this.setState({cr_number: e.target.value})}
                  placeholder="CR Number"
                />
              </div>
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  value={vat_number}
                  onChange={e => this.setState({vat_number: e.target.value})}
                  placeholder="Vat Number"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="form-group col-md-5">
                <input
                  type="password"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Password"
                  value={password}
                  onChange={e => this.setState({password: e.target.value})}
                />
              </div>
              <div className="form-group col-md-5">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Confirm Password"
                  value={password_confirm}
                  onChange={e =>
                    this.setState({password_confirm: e.target.value})
                  }
                />
              </div>
            </div>

            <div className="row mt-5 rounded-0  jumbotron">
              <div className="text-center w-100 mb-4">
                <img src="images/file-img.jpg" />
              </div>

              <div className="col-lg-6 offset-lg-4">
                <input
                  type="file"
                  className="form-control-file"
                  id="inputGroupFile02"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="d-flex">
                <button
                  type="button"
                  className="btn btn-warning mx-4 px-4"
                  onClick={() => this.handleSubmit()}>
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-4"
                  onClick={() => this.props.history.push('/user/')}>
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

export default connect(null, {getRoleList, addUser, getFeatureTypeList})(Add);
