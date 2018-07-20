import React from 'react';
import styled, { keyframes } from 'styled-components';

import PropTypes from 'prop-types';


const BannerRoll = ({ children, bannerItems, itemWidth, itemHeight }) => {
    const bannerWidth = bannerItems.length * itemWidth * 2
    return (
        <Container width={bannerWidth} itemWidth={itemWidth} count={bannerItems.length}>
            {children}
        </Container>
    )
}

const looper = (props) => keyframes`
    from {
        transform: translate(0px,0px);
    }
    to {
        transform: translate(-50%, 0px);
    }
`

const Container = styled.div`
    display: flex;
    height: 100%;
    width: calc(100% * 2);
    justify-content: space-around;
    border-left: none;
    border-right: none;
    margin-left: 0px;
    animation: ${looper} 10s linear infinite;    
    
`

BannerRoll.defaultProps = {
    itemWidth: 25
  };


export default BannerRoll;