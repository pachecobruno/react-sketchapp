// @flow
import React from 'react';
import PropTypes from 'prop-types';

// $FlowFixMe
export default class ClipPath extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    return <svg_clipPath id={this.props.id}>{this.props.children}</svg_clipPath>;
  }
}
