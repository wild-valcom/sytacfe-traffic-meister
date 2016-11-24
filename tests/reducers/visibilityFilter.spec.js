import { expect } from 'chai';

import reducer from '../../client/reducers/visibilityFilter';
import { VISIBILITY_FILTERS } from '../../client/constants';

describe('visibilityFilter reducers', () => {
  it('should return the initial state', () => {
    const initialState = {
      COLOR: '',
      BRAND: '',
      TYPE: ''
    };

    expect(
      reducer(undefined, {})
    ).to.eql(initialState);
  });

  it('should handle CHANGE_TYPE', () => {
    const value = 'car';
    const initialState = {
      COLOR: '',
      BRAND: '',
      TYPE: ''
    };

    expect(
      reducer(initialState, {
        type: VISIBILITY_FILTERS.CHANGE_TYPE,
        value
      })
    ).to.eql({
      COLOR: '',
      BRAND: '',
      TYPE: value
    });
  });

  it('should handle CHANGE_BRAND', () => {
    const value = 'Bugatti Veyron';
    const initialState = {
      COLOR: 'red',
      BRAND: '',
      TYPE: 'car'
    };

    expect(
      reducer(initialState, {
        type: VISIBILITY_FILTERS.CHANGE_BRAND,
        value
      })
    ).to.eql({
      COLOR: 'red',
      BRAND: value,
      TYPE: 'car'
    });
  });

  it('should handle CHANGE_COLOR', () => {
    const value = 'red';
    const initialState = {
      COLOR: '',
      BRAND: '',
      TYPE: 'car'
    };

    expect(
      reducer(initialState, {
        type: VISIBILITY_FILTERS.CHANGE_COLOR,
        value
      })
    ).to.eql({
      COLOR: value,
      BRAND: '',
      TYPE: 'car'
    });
  });
});
