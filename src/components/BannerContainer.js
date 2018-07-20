import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BannerRoll from './BannerContainer/BannerRoll';
import BannerItem from './BannerContainer/BannerItem';


class BannerContainer extends React.Component {
    render() {
        const extraItems = this.props.bannerItems.concat(this.props.bannerItems);
        return (
            <Container>
                <BannerRoll {...this.props} >
                    {extraItems.map((item, i) => <BannerItem 
                                                    key={`${item}.${i}`} 
                                                    number={item} 
                                                    width={this.props.itemWidth}/>)}
                </BannerRoll>
            </Container>
        )
    }
}

const Container = styled.div`
    width: ${props => props.width ? `${props.width}px` : "100%"};
    height: ${props => props.height ? `${props.height}px` : "100px"};
    background: skyblue;
    margin: auto;
    overflow: hidden;
    border: 3px solid steelblue;
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
};


export default BannerContainer;