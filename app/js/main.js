var React = require('react');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      secondsElapsed: 0,
      width: 30,
      height: 40,
      viewboxMinX: 0,
      viewboxMinY: 0,
      viewboxWidth: 30,
      viewboxHeight: 40
    };
  },

  onSubmit: function(e) {
    e.preventDefault();
  },

  onChangeWidth: function(e) {
    this.setState({width: e.target.value});
  },

  onChangeHeight: function(e) {
    this.setState({height: e.target.value});
  },

  onChangeViewboxMinX: function(e) {
    this.setState({viewboxMinX: e.target.value});
  },

  onChangeViewboxMinY: function(e) {
    this.setState({viewboxMinY: e.target.value});
  },

  onChangeViewboxHeight: function(e) {
    this.setState({viewboxHeight: e.target.value});
  },

  onChangeViewboxWidth: function(e) {
    this.setState({viewboxWidth: e.target.value});
  },

  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          width
          <input type="number" placeholder="width" value={this.state.width} onChange={this.onChangeWidth} />
          px
          <br />
          height
          <input type="number" placeholder="height" value={this.state.height} onChange={this.onChangeHeight} />
          px
          <br /><br />
          viewbox
          <input type="number" placeholder="min-x" value={this.state.viewboxMinX} onChange={this.onChangeViewboxMinX} />,
          <input type="number" placeholder="min-y" value={this.state.viewboxMinY} onChange={this.onChangeViewboxMinY} />,
          <input type="number" placeholder="width" value={this.state.viewboxWidth} onChange={this.onChangeViewboxWidth} />,
          <input type="number" placeholder="height" value={this.state.viewboxHeight} onChange={this.onChangeViewboxHeight} />
          <br /><br />
        </form>
        <svg xmlns="http://www.w3.org/2000/svg" width={this.state.width + 'px'} height={this.state.height + 'px'} viewBox={this.state.viewboxMinX + ', ' + this.state.viewboxMinY + ', ' + this.state.viewboxWidth + ', ' + this.state.viewboxHeight} version="1.1">
          <rect xmlns="http://www.w3.org/2000/svg" x="0" y="0" width={this.state.width + 'px'} height={this.state.height + 'px'} fill="black"/>
          <g xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="20" r="10" fill="yellow"/>
            <circle cx="12" cy="17" r="1.5" fill="black"/>
            <circle cx="17" cy="17" r="1.5" fill="black"/>
            <path d="M 10 24 A 8 13 0 0 0 20 24" stroke="black" stroke-width="2"/>
          </g>
        </svg>
      </div>
    );
  }
});

React.render(<Timer />, document.body);
