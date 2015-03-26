var React = require('react');

var ViewboxSVG = React.createClass({
  render: function() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        width={this.props.width + 'px'}
        height={this.props.height + 'px'}
        viewBox={this.props.viewboxMinX + ', ' + this.props.viewboxMinY + ', ' + this.props.viewboxWidth + ', ' + this.props.viewboxHeight}
        preserveAspectRatio={this.props.align + ' ' + this.props.meetOrSlice}
        version="1.1">
        <rect xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="100" height="100" fill="black"/>
        <g xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" fill="yellow"/>
          <circle cx="40" cy="40" r="4" fill="black"/>
          <circle cx="60" cy="40" r="4" fill="black"/>
          <path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" stroke-width="2"/>
        </g>
      </svg>
    );
  }
});

module.exports = ViewboxSVG;
