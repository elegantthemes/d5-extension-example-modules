// External Dependencies
import React, { Component } from 'react';


class Divi4OnlyModule extends Component {
  static slug = 'd4_only_module';

  render() {
    const HeaderLevel = this.props.header_level ? this.props.header_level : 'h2';
    return (
      <div>
        <HeaderLevel className="d4_only_module_title">{this.props.title}</HeaderLevel>
        <div className="d4_only_module_content">{this.props.content()}</div>
      </div>
    );
  }
}

export default Divi4OnlyModule;
