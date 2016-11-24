import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from 'actions';
import { filterItems, getFilterBy, getUniqDataByType } from 'utils';

import Header from 'components/Header';
import Panel from 'components/Panel';
import ErrorPanel from 'components/ErrorPanel';
import Loader from 'components/Loader';
import VehiclesPanel from 'components/VehiclesPanel';
import Select from 'components/Select';

import { VISIBILITY_FILTERS } from '../../constants';

import './style.css';
import '../../styles/core.css';

const { bool, string, arrayOf, object, shape, func } = PropTypes;

class Home extends Component {
  componentWillMount() {
    const { actions } = this.props;
    actions.fetchVehicles();
  }

  render() {
    const {
      actions,
      loading,
      errorMessage,
      vehicles,
      visibilityFilter,
    } = this.props;

    if (loading) {
      return (<Loader />);
    }

    if (!loading && errorMessage) {
      return (
        <div className="page">
          <Header addTodo={actions.addTodo} />
          <ErrorPanel errorMessage={errorMessage} />
        </div>
      );
    }

    // click handler for selecting and deselecting vehicles
    const handleSelectClick = (id) => {
      actions.toggleVehicle(id);
    };

    // Generate onChange handler for each select which is based on select type
    const getOnChangeHandler = actionType => event =>
      actions.changeSelectValue(actionType, event.target.value);

    // Get Filters for filtering vehicles and select options
    const filterByType = getFilterBy('type', visibilityFilter.TYPE);
    const filterByBrand = getFilterBy('brand', visibilityFilter.BRAND);
    const filterByColor = getFilterBy('colors', visibilityFilter.COLOR);

    // Filters dependency map for select block
    const typeFilter = [filterByBrand, filterByColor];
    const brandFilter = [filterByType, filterByColor];
    const colorFilter = [filterByType, filterByBrand];

    // Vehicles and select options filtering
    const types = getUniqDataByType('type', filterItems(vehicles, typeFilter));
    const brands = getUniqDataByType('brand', filterItems(vehicles, brandFilter));
    const colors = getUniqDataByType('colors', filterItems(vehicles, colorFilter));

    const selectedItems = vehicles.filter(item => item.selected);
    const filteredItems = filterItems(vehicles, [
      item => !item.selected,
      filterByType,
      filterByBrand,
      filterByColor
    ]);

    // Display empty block if nothing to select in right sidebar
    const emptyBlock = filteredItems.length ? false : (
      <Panel className="sidebar">
        <p className="panel-text panel-text--empty">
          Nothing to select
        </p>
      </Panel>
    );

    return (
      <div className="page">
        <Header />

        <Panel className="main">
          <Select
            label="Vehicle"
            value={visibilityFilter.TYPE}
            items={types}
            onChange={getOnChangeHandler(VISIBILITY_FILTERS.CHANGE_TYPE)}
          />
          <Select
            label="Brand"
            value={visibilityFilter.BRAND}
            items={brands}
            onChange={getOnChangeHandler(VISIBILITY_FILTERS.CHANGE_BRAND)}
          />
          <Select
            label="Colors"
            value={visibilityFilter.COLOR}
            items={colors}
            onChange={getOnChangeHandler(VISIBILITY_FILTERS.CHANGE_COLOR)}
          />
        </Panel>

        <VehiclesPanel
          className="sidebar"
          selectedItems={filteredItems}
          buttonText="Select"
          handleSelectClick={handleSelectClick}
        />

        {emptyBlock}

        <VehiclesPanel
          className="footer"
          title="Selected Vehicles"
          selectedItems={selectedItems}
          buttonText="Deselect"
          handleSelectClick={handleSelectClick}
        />
      </div>
    );
  }
}

Home.propTypes = {
  actions: shape({
    changeSelectValue: func,
    fetchVehicles: func,
    receiveVehicles: func,
    receiveVehiclesError: func,
    requestVehicles: func,
    toggleVehicle: func,
  }),
  loading: bool,
  errorMessage: string,
  vehicles: arrayOf(object),
  visibilityFilter: shape({
    BRAND: string,
    COLOR: string,
    TYPE: string
  }),
};

function mapStateToProps({ vehicles, visibilityFilter, errorMessage, loading }) {
  return {
    vehicles,
    loading,
    errorMessage,
    visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
