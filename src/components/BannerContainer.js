import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BannerRoll from './BannerContainer/BannerRoll';
import BannerItem from './BannerContainer/BannerItem';


//required props:
    //bannerItems
//possible props:
    //itemWidth, itemHeight, bannerStyles, fontColor


class BannerContainer extends React.Component {
    render() {
        const extraItems = this.props.bannerItems.concat(this.props.bannerItems);
        return (
            <Container style={this.props.bannerStyles} width={this.props.bannerWidth} >
                <BannerRoll {...this.props} >
                    {extraItems.map((item, i) => <BannerItem 
                                                    key={`${item}.${i}`} 
                                                    number={item} 
                                                    width={this.props.itemWidth}
                                                    fontStyles={this.props.fontStyles}/>)}
                </BannerRoll>
            </Container>
        )
    }
}

const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : "100%"};
    margin: auto;
    overflow: hidden;
`

BannerContainer.propTypes = {
    bannerItems: PropTypes.array.isRequired,
    itemWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    itemHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    bannerStyles: PropTypes.object
};


export default BannerContainer;