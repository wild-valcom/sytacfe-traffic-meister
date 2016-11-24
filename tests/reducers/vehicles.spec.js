import { expect } from 'chai';

import * as reducers from '../../client/reducers/vehicles';
import { FETCH_VEHICLES, TOGGLE_VEHICLE } from '../../client/constants';

describe('vehicles reducers', () => {
  describe('vehicle reducer', () => {
    it('should return the initial state', () => {
      expect(
        reducers.vehicles(undefined, {})
      ).to.eql([]);
    });

    it('should handle FETCH_VEHICLES_SUCCESS', () => {
      const vehicles = [{
        id: 1,
        type: 'string',
        brand: 'string',
        img: 'string'
      }];

      expect(
        reducers.vehicles([], {
          type: FETCH_VEHICLES.SUCCESS,
          vehicles
        })
      ).to.eql(vehicles);
    });

    it('should handle TOGGLE_VEHICLE', () => {
      const vehicles = [{
        id: 1,
        type: 'string',
        brand: 'string',
        img: 'string'
      }, {
        id: 2,
        type: 'string',
        brand: 'string',
        img: 'string',
        selected: true
      }];

      const expectedResult = [{
        id: 1,
        type: 'string',
        brand: 'string',
        img: 'string'
      }, {
        id: 2,
        type: 'string',
        brand: 'string',
        img: 'string',
        selected: false
      }];

      const id = 2;

      expect(
        reducers.vehicles(vehicles, {
          type: TOGGLE_VEHICLE,
          id
        })
      ).to.eql(expectedResult);
    });
  });

  describe('errorMessage reducer', () => {
    it('should return the initial state', () => {
      expect(
        reducers.errorMessage(undefined, {})
      ).to.equal(null);
    });
    it('should handle FETCH_VEHICLES_SUCCESS', () => {
      expect(
        reducers.errorMessage(undefined, {
          type: FETCH_VEHICLES.SUCCESS,
        })
      ).to.equal(null);
    });
    it('should handle FETCH_VEHICLES_FAILURE', () => {
      expect(
        reducers.errorMessage(undefined, {
          type: FETCH_VEHICLES.FAILURE,
          error: 'error message'
        })
      ).to.equal('error message');
    });
  });

  describe('loading reducer', () => {
    it('should return the initial state', () => {
      expect(
        reducers.loading(undefined, {})
      ).to.equal(true);
    });
    it('should handle FETCH_VEHICLES_REQUEST', () => {
      expect(
        reducers.loading(undefined, {
          type: FETCH_VEHICLES.REQUEST,
          loading: true
        })
      ).to.equal(true);
    });
    it('should handle FETCH_VEHICLES_SUCCESS', () => {
      expect(
        reducers.loading(undefined, {
          type: FETCH_VEHICLES.SUCCESS,
          loading: false
        })
      ).to.equal(false);
    });
    it('should handle FETCH_VEHICLES_FAILURE', () => {
      expect(
        reducers.loading(undefined, {
          type: FETCH_VEHICLES.FAILURE,
          loading: false
        })
      ).to.equal(false);
    });
  });
});
