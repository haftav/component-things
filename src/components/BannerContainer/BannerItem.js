import React from 'react';
import styled from 'styled-components';

const BannerItem = ( { number, width, fontStyles } ) => {
    console.log(width);
    return (
        <Item width={width} style={fontStyles}>
            <p>{ number }</p>
        </Item>
    )
}

const Item = styled.div`
    width: ${props => props.width ? `${props.width}px` : '30px'};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`

export default BannerItem;