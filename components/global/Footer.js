import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  render() {
    const {copyright='&copy; BurguerQueen'} = this.props;
    return (
      <div className="Footer">
          <p dangerouslySetInnerHTML={{__html: copyright}} claseName="mb-4"/>
        </div>
    );
  }
}
export default Footer;

