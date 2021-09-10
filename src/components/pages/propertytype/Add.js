import React from 'react';
import {Card} from '../../common';
import {
  getRoleList,
  addPropertyType,
  getFeatureTypeList,
} from '../../../redux/actions';
import {connect} from 'react-redux';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type_title: '',
      type_slug: '',
      features: [],
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
    const {type_title, type_slug, features} = this.state;
    if (type_title === '') {
      alert('Feature Name should not be empty');
      return true;
    }
    if (type_slug === '') {
      alert('Status should not be empty');
      return true;
    }
    if (features.length === 0) {
      alert('Fatures should not be empty');
      return true;
    }
    this.props
      .addPropertyType(this.state)
      .then(result => {
        console.log(result);
        this.props.history.push('/propertytype/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const {type_title, type_slug, features, data} = this.state;
    console.log(this.state);
    return (
      <Card title="Add Property Type">
        <div className="p-5">
          <div className="row mb-2">
            <div className="form-group col-md-5">
              <input
                type="text"
                className="form-control"
                name="feature"
                value={type_title}
                onChange={event =>
                  this.setState({type_title: event.target.value})
                }
                placeholder="Title"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="form-group col-md-5">
              <input
                type="text"
                className="form-control"
                name="type_slug"
                value={type_slug}
                onChange={event =>
                  this.setState({type_slug: event.target.value})
                }
                placeholder="slug"
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="form-group col-md-5">
              <label for="exampleFormControlSelect2">Feature Types</label>
              <select
                multiple
                className="form-control"
                value={features}
                onChange={e => this.handleChange(e)}
                id="exampleFormControlSelect2">
                {data.map(item => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.feature}
                    </option>
                  );
                })}
              </select>
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
                onClick={() => this.props.history.push('/propertytype/')}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default connect(null, {
  getRoleList,
  addPropertyType,
  getFeatureTypeList,
})(Add);
