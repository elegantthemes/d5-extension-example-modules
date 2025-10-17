// External Dependencies
import React, { Component } from 'react';


class Divi4Module extends Component {
  static slug = 'd4_module';

  render() {
    const HeaderLevel = this.props.header_level ? this.props.header_level : 'h2';
    return (
      <div className="example_d4_module_inner">
        <HeaderLevel className="example_d4_module_title">{this.props.title}</HeaderLevel>
        <div className="example_d4_module_content">{this.props.content()}</div>
      </div>
    );
  }
}

export default Divi4Module;
