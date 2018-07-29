import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BannerRoll from "./BannerContainer/BannerRoll";
import BannerItem from "./BannerContainer/BannerItem";
import DividerItem from "./BannerContainer/DividerItem";

//required props:
//bannerItems
//possible props:
//bannerStyles, bannerWidth, fontStyles, divider, dividerStyles, spacing, *speed*

class BannerContainer extends React.Component {
  render() {
    const extraItems = this.props.bannerItems.concat(this.props.bannerItems);
    const {
      bannerStyles,
      bannerWidth,
      fontStyles,
      width,
      spacing,
      divider,
      dividerStyles
    } = this.props;
    return (
      <Container id="banner-container" style={bannerStyles} width={bannerWidth}>
        <BannerRoll {...this.props}>
          {extraItems.map((item, i) => {
            return (
              <ChildrenContainer key={`${item}.${i}`}>
                <BannerItem
                  content={item}
                  fontStyles={fontStyles}
                  margin={spacing}
                />
                {divider && (
                  <DividerItem
                    icon={divider}
                    dividerStyles={dividerStyles}
                  />
                )}
              </ChildrenContainer>
            );
          })}
        </BannerRoll>
      </Container>
    );
  }
}

const Container = styled.div`
  width: ${props => (props.width ? `${props.width}px` : "100%")};
  margin: auto;
  overflow: hidden;
  position: relative;
  z-index: 4;
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 5;
`;

BannerContainer.propTypes = {
  bannerItems: PropTypes.array.isRequired,
  itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bannerStyles: PropTypes.object,
  fontStyles: PropTypes.object
};

export default BannerContainer;
