import styled from "styled-components";

export const HeaderDiv = styled.div`
/* eth live rate */

/* Auto layout */
display: flex;
flex-direction: row;
align-items: center;
padding: 3px 12px;
gap: 8px;

width: 254px;

/* grey level 2 */
background: #18191D;
border-radius: 14px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

export const HeaderText = styled.div`
/* ETH/USDT */

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

/* primary text_selection */
color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`;

export const HeaderSubText = styled.div`
/* 1137.62 +2.62%↑ */

width: 120px;
height: 20px;

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */

/* success */
color: #0AC18E;


/* Inside auto layout */
flex: none;
order: 2;
flex-grow: 0;

`;