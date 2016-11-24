import trafficMeister from 'service';
import { FETCH_VEHICLES, TOGGLE_VEHICLE } from '../constants';

export function requestVehicles() {
  return {
    type: FETCH_VEHICLES.REQUEST,
    loading: true
  };
}

export function receiveVehicles(vehicles) {
  return {
    type: FETCH_VEHICLES.SUCCESS,
    loading: false,
    vehicles
  };
}

export function receiveVehiclesError(error) {
  return {
    type: FETCH_VEHICLES.FAILURE,
    loading: false,
    error
  };
}

export function fetchVehicles() {
  return (dispatch) => {
    dispatch(requestVehicles());

    return trafficMeister.fetchData((error, response) => {
      if (!error) {
        dispatch(receiveVehicles(response));
      } else {
        dispatch(receiveVehiclesError(error));
      }
    });
  };
}

export function changeSelectValue(type, value) {
  return {
    type,
    value,
  };
}

export function toggleVehicle(id) {
  return {
    type: TOGGLE_VEHICLE,
    id,
  };
}
