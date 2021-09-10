import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPropertyTypeList} from '../../../redux/actions';

// import { anotherName, addWish } from "./redux/actions/actions";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.props
      .getPropertyTypeList()
      .then(result => {
        console.log('result', result);
        this.setState({data: result.data, loading: false});
      })
      .catch(err => {
        console.log(err);
        this.setState({loading: false});
      });
  }

  render() {
    //console.log('props', this.props);
    const {data} = this.state;
    return (
      <section className=" exchange position-relative property-list">
        <div className="col-lg-12 third-exchange">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 ">
              <div className=" bg-white outer_radius border mx-3">
                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="row header_text px-4 py-2 m-0 d-flex justify-content-between">
                      <div>
                        <h5 className="text-center mt-1">Property Types</h5>
                      </div>
                      <div>
                        <div className="d-flex">
                          <h6 className="mx-3 pt-2"> Show</h6>
                          <div className="header-drop">
                            <select
                              className="custom-select px-4  mr-sm-2"
                              id="inlineFormCustomSelect">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                          <h6 className="mx-3 pt-2"> Entries </h6>
                        </div>
                      </div>
                    </div>

                    <div className=" mx-1 pt-3">
                      <div className="table-responsive custom_table">
                        <table className="table  table-sm border table-bordered text-center">
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Property Type ID </th>
                              <th scope="col">Title </th>
                              <th scope="col">Slug</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.length > 0
                              ? data.map((item, index) => {
                                  return (
                                    <tr key={item._id}>
                                      <td>{index}</td>
                                      <td>{item.type_title} </td>
                                      <td>{item.type_slug}</td>
                                      <td>
                                        <div className="btn-group">
                                          <button
                                            type="button"
                                            className="btn btn-primary btn-1 btn-sm"
                                            onClick={() =>
                                              this.props.history.push(
                                                '/propertytype/view/' +
                                                  item._id,
                                              )
                                            }>
                                            View
                                          </button>
                                          <button
                                            type="button"
                                            className="btn btn-outline-dark btn-2 btn-sm dropdown-toggle dropdown-toggle-split"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false">
                                            <div className="dropdown-menu">
                                              <a
                                                href="#"
                                                className="dropdown-item">
                                                Action
                                              </a>
                                              <a
                                                href="#"
                                                className="dropdown-item">
                                                Another action
                                              </a>
                                            </div>
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })
                              : null}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="ml-2 my-3 pb-4 bottom-btn">
                      <Link
                        className="btn btn-primary px-4"
                        to="/propertytype/add">
                        Click here to Add New User
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({app}) => {
  const {configData} = app;
  return {
    configData: configData,
  };
};

export default connect(mapStateToProps, {getPropertyTypeList})(Listing);
