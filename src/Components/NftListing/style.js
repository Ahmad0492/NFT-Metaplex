import styled from "styled-components";

export const NftBoxDiv = styled.div`
/* nft listing */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 12px;
gap: 18px;

position: relative;
width: 388px;
background: #000000;
backdrop-filter: blur(20px);
border-radius: 20px;

`;

export const NftName  = styled.div`
/* nft name */


font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

export const OptionsImg = styled.img`
/* more options */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`;

export const NftImg = styled.img`
/* nft_illustration */

width: 364px;
height: 364px;

border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`;

export const DetailsText = styled.div`
/* 72UGr...YdD */

font-family: 'SF Pro Text';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 143% */
letter-spacing: 0.03em;

color: #FFFFFF;

opacity: 0.5;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`;

export const BottomDiv = styled.div`
/* info tab */

box-sizing: border-box;
margin-top: 18px;
width: 100%;
/* Auto layout */
display: flex;
flex-direction: column;
align-items: center;
padding: 8px 8px 20px;
gap: 12px;


background: #18191D;
border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;

`;

export const BottomDivContent = styled.div`
/* owner info */

box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 12px 8px 10px;
gap: 116px;

width: 100%;

background: #131417;
border-radius: 8px;

/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

`;