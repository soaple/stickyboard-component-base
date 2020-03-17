// src/SampleComponent.js

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

class SampleComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return <Wrapper></Wrapper>;
    }
}

SampleComponent.propTypes = {};

export default SampleComponent;
