import { expect } from 'chai';

import * as types from '../../client/constants';
import * as actions from '../../client/actions';

describe('actions', () => {
  it('should create an action to toogle vehicle', () => {
    const id = 4;
    const expectedAction = {
      type: types.TOGGLE_VEHICLE,
      id
    };

    expect(actions.toggleVehicle(id)).to.eql(expectedAction);
  });

  it('should create an action to change select value', () => {
    const value = 'red';
    const expectedAction = {
      type: types.VISIBILITY_FILTERS.CHANGE_COLOR,
      value
    };

    expect(
      actions.changeSelectValue(types.VISIBILITY_FILTERS.CHANGE_COLOR, value)
    ).to.eql(expectedAction);
  });

  it('should create an action to request vehicles', () => {
    const expectedAction = {
      type: types.FETCH_VEHICLES.REQUEST,
      loading: true
    };

    expect(
      actions.requestVehicles()
    ).to.eql(expectedAction);
  });
  it('should create an action to return fetch error', () => {
    const error = 'Failed';
    const expectedAction = {
      type: types.FETCH_VEHICLES.FAILURE,
      loading: false,
      error
    };

    expect(actions.receiveVehiclesError(error)).to.eql(expectedAction);
  });
  it('should create an action to return fetch result', () => {
    const vehicles = [{
      id: 1,
      type: 'string',
      brand: 'string',
      img: 'string'
    }];

    const expectedAction = {
      type: types.FETCH_VEHICLES.SUCCESS,
      loading: false,
      vehicles
    };

    expect(actions.receiveVehicles(vehicles)).to.eql(expectedAction);
  });
});
