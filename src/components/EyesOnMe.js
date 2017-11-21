import React from 'react';

class EyesOnMe extends React.Component {
  triggerFocus = () => {
    console.log('Good!');
  }

  triggerBlur = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button type="button" onFocus={this.triggerFocus} onBlur={this.triggerBlur}>Maximum Eye Contact</button>
    );
  }
};

export default EyesOnMe;
