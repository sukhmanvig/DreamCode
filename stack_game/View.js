'use strict';

const e = React.createElement;

class GameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        liked: false,
        pushed: 0,
    };
  }

  render() {
    if (this.state.liked) {
      return 'Button Pushed.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ pushed: this.state.pushed + 1 }) },
      'Pushed: #'.replace('#', this.state.pushed)
    );
  }
}

const domContainer = document.querySelector('#game_buttons');
ReactDOM.render(e(GameButton), domContainer);
ReactDOM.render(e(GameButton), domContainer);
ReactDOM.render(e(GameButton), domContainer);

/*
export default class View {
    
    constructor(ctx, ctxWidth, ctxHeight, model) {
        this.context = ctx;
        this.ctxWidth = ctxWidth;
        this.ctxHeight = ctxHeight;
        this.model = this.model;
    }

    redraw(ctx) {


        // for thing in this.game, redraw thing on context
    }
}
*/