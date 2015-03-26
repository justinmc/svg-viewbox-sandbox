var React = require('react');
var AttrInput = require('./attr_input.jsx');
var AttrSelect = require('./attr_select.jsx');

var ViewboxForm = React.createClass({
  getInitialState: function() {
    return {
      possibleValues: {
        align: [
          'none',
          'xMinYMin',
          'xMidYMin',
          'xMaxYMin',
          'xMinYMid',
          'xMidYMid',
          'xMaxYMid',
          'xMinYMax',
          'xMidYMax',
          'xMaxYMax'
        ],
        meetOrSlice: [
          'meet',
          'slice'
        ]
      }
    };
  },

  onSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        width
        <AttrInput name="width" value={this.props.width} onChange={this.props.onChange} />
        px
        <br />
        height
        <AttrInput name="height" value={this.props.height} onChange={this.props.onChange} />
        px
        <br /><br />
        viewbox
        <AttrInput name="viewboxMinX" value={this.props.viewboxMinX} onChange={this.props.onChange} />
        <AttrInput name="viewboxMinY" value={this.props.viewboxMinY} onChange={this.props.onChange} />
        <AttrInput name="viewboxWidth" value={this.props.viewboxWidth} onChange={this.props.onChange} />
        <AttrInput name="viewboxHeight" value={this.props.viewboxHeight} onChange={this.props.onChange} />
        <br />
        preserveAspectRatio
        <AttrSelect name="align" possibleValues={this.state.possibleValues.align} onChange={this.props.onChange} />
        <AttrSelect name="meetOrSlice" possibleValues={this.state.possibleValues.meetOrSlice} onChange={this.props.onChange} />
      </form>
    );
  }
});

module.exports = ViewboxForm;
