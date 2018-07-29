import React from "react";
import styled from "styled-components";

const DividerItem = ({ content, dividerStyles, icon }) => {
  return (
    <Item style={dividerStyles}>
      <i className={icon} />
    </Item>
  );
};

const Item = styled.div`
  height: 100%;
  width: initial;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 0px;
  white-space: nowrap;
  font-size: 5px;
  color: white;
  position: relative;
  z-index: 6;
`;

export default DividerItem;
