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
      spacing,
      icon,
      iconStyles
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
                {icon && (
                  <DividerItem
                    icon={icon}
                    iconStyles={iconStyles}
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
`;

const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

BannerContainer.propTypes = {
  bannerItems: PropTypes.array.isRequired,
  bannerWidth: PropTypes.number,
  fontStyles: PropTypes.object,
  bannerStyles: PropTypes.object,
  iconStyles: PropTypes.object,
  divider: PropTypes.string,
  spacing: PropTypes.number,
};

export default BannerContainer;
