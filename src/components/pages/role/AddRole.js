import React from 'react';
import {Card} from '../../common';
import CheckboxTree from 'react-checkbox-tree';
import nodes from './defaultRole';
import {addRole} from '../../../redux/actions';
import {connect} from 'react-redux';

class AddRole extends React.Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.onExpand = this.onExpand.bind(this);
    this.state = {
      checked: [],
      expanded: ['/app'],
      name: '',
      roleType: 'admin',
    };
  }

  onCheck(checked) {
    this.createPermissionArray(checked).then(result => {
      console.log(result);
      this.setState({checked, resource: result});
    });
  }

  onExpand(expanded) {
    this.setState({expanded});
  }

  createPermissionArray = async checked => {
    let path = '';
    let resource = [];
    for (let i = 0; i < checked.length; i++) {
      path = checked[i].split('/')[0];
      let value = checked[i].split('/')[1];
      if (resource.length == 0) {
        resource.push({
          path: path,
          action: {
            [value]: true,
          },
        });
      } else {
        //console.log('resource', resource);
        var indexValue = await Promise.all(
          resource.map(async (item, index) => {
            // console.log(item);
            if (item.path == path) {
              //console.log("found", path, index);
              return index;
            }
          }),
        );

        const indexValueMain = indexValue[indexValue.length - 1];
        if (indexValueMain === undefined) {
          //  console.log('undined');
          resource.push({
            path: path,
            action: {
              [value]: true,
            },
          });
        } else {
          resource[indexValueMain].action = {
            ...resource[indexValueMain].action,
            [value]: true,
          };
          // console.log('test', indexValueMain);
        }
      }
    }
    return resource;
  };
  handleSubmit = () => {
    console.log('submitt', this.state);
    if (this.state.checked.length === 0) {
      alert('please select resourece');
    }
    if (this.state.name === '') {
      alert('Name must not be empty');
    }

    this.props
      .addRole(this.state)
      .then(result => {
        console.log(result);
        this.props.history.push('/role/');
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const {checked, expanded, name} = this.state;
    return (
      <Card title="Add Role">
        <div className="p-5">
          <div className="row mb-2">
            <div className="form-group col-md-5">
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                value={name}
                onChange={event => this.setState({name: event.target.value})}
                placeholder="Role Name"
              />
            </div>
          </div>

          <h5 className="mb-4 pb-3"> Select Resource </h5>
          <CheckboxTree
            checked={checked}
            expanded={expanded}
            iconsclassName="fa5"
            nodes={nodes}
            onCheck={this.onCheck}
            onExpand={this.onExpand}
          />
          <div className="row mt-4">
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-warning mx-4 px-4"
                onClick={() => this.handleSubmit()}>
                Submit
              </button>
              <button type="button" className="btn btn-outline-dark px-4">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default connect(null, {addRole})(AddRole);
