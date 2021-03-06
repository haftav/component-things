import React from "react";
import styled, { keyframes } from "styled-components";

import PropTypes from "prop-types";

class BannerRoll extends React.Component {
  render() {
    let bannerWidth;
    const { children, bannerItems, itemWidth, itemHeight, divider } = this.props;
    return (
      <Container id="banner-roll" itemWidth={itemWidth} count={bannerItems.length}>
        {children}
      </Container>
    );
  }
}

const looper = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-50%);
    }
`;


const Container = styled.div`
  display: inline-flex;
  height: 100%;
  flex: auto;
  justify-content: flex-start;
  border-left: none;
  border-right: none;
  overflow: hidden;
  animation: ${looper} 10s linear infinite;
  transition: 1s linear;
`;


export default BannerRoll;
