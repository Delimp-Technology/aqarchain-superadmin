import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getAgentCount} from '../../redux/actions/Agents';

const SuperAdminCard = props => {
  const [agentcount, setAgentCount] = useState({});
  const {getAgentCount} = props;
  useEffect(() => {
    getAgentCount().then(
      repsonse => {
        setAgentCount(repsonse);
      },
      error => {
        console.log('error', error);
      },
    );
  }, [getAgentCount]);

  return (
    <div className="row mb-3 mb-lg-5">
      <div className="col-xl-4 mb-3 mb-xl-0">
        <div className="superadmin-card bg-gradient has-box-shadow has-border-radius">
          <div className="superadmin-card-header py-3 px-4">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="mr-auto mb-0 font-weight-bold">{'Properties'}</h3>
              <span className="btn btn-xs ">100+ new</span>
            </div>
          </div>
          <div className="superadmin-card-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="mr-auto mb-0 font-weight-bold">
                3850 <span className="btn btn-xs text-left p-0">For Rent</span>
              </h2>
              <span className="btn btn-xs ml-auto">200 Rented</span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="mr-auto mb-0 font-weight-bold">
                3850 <span className="btn btn-xs text-left p-0">For Sell</span>
              </h2>
              <span className="btn btn-xs ml-auto">200 Rented</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 mb-3 mb-xl-0">
        <div className="superadmin-card bg-gradient-secondary text-white has-box-shadow has-border-radius">
          <div className="superadmin-card-header py-3 px-4">
            <div className="d-flex justify-content-center align-items-center">
              <h3 className="mb-0 text-center font-weight-bold">Agents</h3>
            </div>
          </div>
          <div className="superadmin-card-body p-4">
            <h2 className="mb-3 text-center font-weight-bold">
              {!agentcount.count ? 'NA' : agentcount.count}
            </h2>
            <div className="d-flex justify-content-center align-items-center">
              <span className="btn btn-xs text-white mr-3">
                {!agentcount.data || agentcount.data.active === 0
                  ? 'NA'
                  : agentcount.data.active}{' '}
                Active
              </span>
              <span className="btn btn-xs text-white">
                {!agentcount.data || agentcount.data.inactive === 0
                  ? 'NA'
                  : agentcount.data.inactive}{' '}
                Inactive
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="superadmin-card has-box-shadow bg-gradient has-border-radius">
          <div className="superadmin-card-header py-3 px-4">
            <div className="d-flex justify-content-center align-items-center">
              <h3 className="mb-0 text-center font-weight-bold">Users</h3>
            </div>
          </div>
          <div className="superadmin-card-body p-4">
            <h2 className="mb-3 text-center font-weight-bold">400</h2>
            <div className="d-flex justify-content-center align-items-center">
              <span className="btn btn-xs mr-3">370 Active</span>
              <span className="btn btn-xs">30 Inactive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {getAgentCount})(SuperAdminCard);
