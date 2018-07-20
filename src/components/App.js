import React from 'react';
import styled from 'styled-components'

import BannerContainer from './BannerContainer';

const bannerItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


export default class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <BannerContainer bannerItems={bannerItems}
                                itemWidth={70}/>    
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`
