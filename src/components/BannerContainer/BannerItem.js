import React from 'react';
import styled from 'styled-components';

const BannerItem = ( { number, width, fontStyles } ) => {
    return (
        <Item width={width} style={fontStyles}>
            <p>{ number }</p>
        </Item>
    )
}

const Item = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 0px;
    white-space: nowrap;
    border: 1px solid white;
`

export default BannerItem;