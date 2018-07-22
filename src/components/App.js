import React from 'react';
import styled from 'styled-components'

import BannerContainer from './BannerContainer';

const bannerItems = [
    'NU-DISCO', 'BREAKBEAT', 'DRUM AND BASS',
    'DUBSTEP', 'TRAP', 'HIP HOP',
    'TECHNO', 'METAL', 'LOUNGE',
    'DEEP HOUSE', 'POP', 'PUNK',
    'JAZZ', 'AVANT-GARDE', 'REGGAE'];

const fontStyles = {
    color: '#85769A',
    fontFamily: 'sans-serif'
}

const bannerStyles = {
    backgroundColor: '#544666',
    height: '35px'
}

export default class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <BannerContainer bannerItems={bannerItems}
                                fontStyles={fontStyles}
                                bannerStyles={bannerStyles}
                                 />    
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`
