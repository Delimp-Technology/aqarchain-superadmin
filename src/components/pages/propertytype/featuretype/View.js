import React from 'react';
import {Card, Loading} from '../../common';
import {
  deleteFeatureType,
  updateFeatureType,
  getFeatureType,
} from '../../../redux/actions';
import {connect} from 'react-redux';
import {confirmAlert} from 'react-confirm-alert'; // Import
import {ToastContainer, toast} from 'react-toastify';
import {toasterSetting} from '../../../theme';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feature: '',
      status: false,
      loading: false,
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.props
      .getFeatureType(id)
      .then(result => {
        this.setState({...result.data, id: id});
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleSubmit = () => {
    const {feature, status} = this.state;
    if (feature === '') {
      alert('Feature Name should not be empty');
      return true;
    }
    if (status === '') {
      alert('Status should not be empty');
      return true;
    }
    this.setState({loading: true});
    this.props
      .updateFeatureType(this.state)
      .then(result => {
        console.log(result);
        this.setState({loading: false});
        toast.success('Feature updated', toasterSetting);
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
      title: 'Delete Feature',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            this.props
              .deleteFeatureType(this.state.id)
              .then(result => {
                console.log(result);
                this.props.history.push('/featuretype/');
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
    const {feature, status, loading} = this.state;
    console.log(this.state);
    return (
      <>
        {loading ? <Loading /> : null}
        <ToastContainer />
        <Card title="Feature">
          <div className="p-5">
            <div className="row mb-2">
              <div className="form-group col-md-5">
                <input
                  type="text"
                  className="form-control"
                  name="feature"
                  value={feature}
                  onChange={event =>
                    this.setState({feature: event.target.value})
                  }
                  placeholder="Feature"
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="form-group col-md-5">
                <select
                  className="custom-select"
                  id="inputGroupSelect02"
                  value={status}
                  onChange={event =>
                    this.setState({status: event.target.value})
                  }>
                  <option>Select Status</option>
                  <option value="true">Enable</option>
                  <option value="false">Disable</option>
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
                  onClick={() => this.props.history.push('/featuretype/')}>
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
  deleteFeatureType,
  updateFeatureType,
  getFeatureType,
})(View);
