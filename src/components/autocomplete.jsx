var React = require("react/addons"),
    ComponentTree = require("react-component-tree"),
    _ = require("lodash"),
    ClassNameMixin = require("react-class-name");

/**
 * @param {Object[]} options
 * @param {String[]} searchableFields All option fields to search through.
 * @param {Function} onSelect
 * @param {Boolean} alwaysShowResultList
 * @param {Boolean} autoFocus Whether the input field should be focused on mount.
 * @param {String} placeholderText
 */
 module.exports = React.createClass({
  displayName: "Autocomplete",

  mixins: [ComponentTree.Mixin,
           React.addons.LinkedStateMixin,
           ClassNameMixin],

  getDefaultProps: function() {
    return {
      alwaysShowResultList: false,
      autoFocus: false,
      placeholderText: null
    };
  },

  getInitialState: function() {
    return {
      currentValue: "",
      resultListIsVisible: false
    };
  },

  children: {
    autocompleteItem: function(option) {
      return _.extend({}, option, {
        key: option.id,
        ref: "autocompleteItem" + option.id
      });
    }
  },

  render: function() {
    var eventProps = {},
        shouldDisplayResultList = this.props.alwaysShowResultList ||
                                  this.state.resultListIsVisible;

    if (!this.props.alwaysShowResultList) {
      eventProps.onFocus = this.showResultList;
      eventProps.onBlur = this.hideResultList;
    }

    return <div className={this.getClassName("autocomplete")}>
      <input className="filter-input"
             valueLink={this.linkState("currentValue")}
             type="text"
             placeholder={this.props.placeholderText}
             ref="filterInput"
             {...eventProps} />
      {shouldDisplayResultList ? this.renderResultList() : null}
    </div>;
  },

  renderResultList: function() {
    var filteredOptions =
        this.state.currentValue.length > 0 ? this._filterOptions()
                                           : this.props.options;

    return <ul className="result-list notCustomScroll">
      {filteredOptions.length > 0 ? this.renderResultItems(filteredOptions)
                                  : this.renderEmptyState()}
    </ul>;
  },

  renderResultItems: function(options) {
    // Trim results to max 100 items for better performance
    return options.slice(0, 100).map(function(option) {
      return <li className="result-item"
                 key={option.id}
                 onMouseDown={this.handleElementClick.bind(this, option)}>
        {this.loadChild("autocompleteItem", option)}
      </li>;
    }.bind(this));
  },

  renderEmptyState: function() {
    return <li className="empty-state">
      <p>No matching results were found</p>
    </li>;
  },

  componentDidMount: function() {
    if (this.props.autoFocus === true) {
      this.refs.filterInput.getDOMNode().focus();
    }
  },

  showResultList: function() {
    this.setState({resultListIsVisible: true});
  },

  hideResultList: function() {
    this.setState({resultListIsVisible: false});
  },

  handleElementClick: function(selectedOption) {
    this.props.onSelect(selectedOption);
  },

  _filterOptions: function() {
    var currentValue = this.state.currentValue.toLowerCase();

    return this.props.options.filter(function(option) {
      return this.props.searchableFields.some(function(field) {
        return option[field].toLowerCase().indexOf(currentValue) !== -1;
      });
    }.bind(this));
  }
});
