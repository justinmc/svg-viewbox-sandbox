var React = require('react');

var rootElement = document.querySelector('.app');

var ViewboxSandbox = React.createClass({
  getInitialState: function() {
    return {
      secondsElapsed: 0,
      width: 100,
      height: 100,
      viewboxMinX: 0,
      viewboxMinY: 0,
      viewboxWidth: 100,
      viewboxHeight: 100,
      align: 'none',
      alignPossibleValues: [
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
      meetOrSlice: 'meet',
      meetOrSlicePossibleValues: [
        'meet',
        'slice'
      ]
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

  selectAlign: function(e) {
    this.setState({align: e.target.value});
  },

  selectMeetOrSlice: function(e) {
    this.setState({meetOrSlice: e.target.value});
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
          <br />
          preserveAspectRatio
          <select onInput={this.selectAlign}>
            {this.state.alignPossibleValues.map(function(el) {
              return (<option value={el}>{el}</option>);
            })}
          </select>
          <select onInput={this.selectMeetOrSlice}>
            {this.state.meetOrSlicePossibleValues.map(function(el) {
              return (<option value={el}>{el}</option>);
            })}
          </select>
          <br /><br />
        </form>
        <div class="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg"
            width={this.state.width + 'px'}
            height={this.state.height + 'px'}
            viewBox={this.state.viewboxMinX + ', ' + this.state.viewboxMinY + ', ' + this.state.viewboxWidth + ', ' + this.state.viewboxHeight}
            preserveAspectRatio={this.state.align + ' ' + this.state.meetOrSlice}
            version="1.1">
            <rect xmlns="http://www.w3.org/2000/svg" x="0" y="0" width={this.state.width + 'px'} height={this.state.height + 'px'} fill="black"/>
            <g xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" fill="yellow"/>
              <circle cx="40" cy="40" r="4" fill="black"/>
              <circle cx="60" cy="40" r="4" fill="black"/>
              <path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" stroke-width="2"/>
            </g>
          </svg>
        </div>
      </div>
    );
  }
});

React.render(<ViewboxSandbox />, rootElement);
