import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;

const TopBarContainer = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media(min-width: 1280px){
    width: 1280px;
  }
`;

const TopBarContainerLeft = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`;

const TopBarContainerLeftSpan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`;

const TopBarContainerContainerCenter = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`;

const TopBarContainerContainerCenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;

&:hover{
  text-decoration: underline;
}
`;

const TopBarContainerContainerCenterSpanLastChild = styled.span`
margin-right: 0;

&:hover{
  text-decoration: underline;
}
`;

const TopBarContainerContainerRight = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`;

const TopBarContainerContainerRightSpan = styled.span`
cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainer>
        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeft>
        <TopBarContainerContainerCenter>
          <TopBarContainerContainerCenterSpan>GENERAL</TopBarContainerContainerCenterSpan><TopBarContainerContainerCenterSpan>BROWNBAG</TopBarContainerContainerCenterSpan><TopBarContainerContainerCenterSpan>RANDOM</TopBarContainerContainerCenterSpan><TopBarContainerContainerCenterSpan>MUSIC</TopBarContainerContainerCenterSpan><TopBarContainerContainerCenterSpanLastChild>ANNOUNCEMENTS</TopBarContainerContainerCenterSpanLastChild>
        </TopBarContainerContainerCenter>
        <TopBarContainerContainerRight>
          <TopBarContainerContainerRightSpan>LOG IN</TopBarContainerContainerRightSpan>
        </TopBarContainerContainerRight>
      </TopBarContainer>
    </TopBarDiv>
  )
}

export default TopBar;