import styled from "styled-components";

export const SidebarDiv = styled.div`
/* side navigation */
position:relative;
box-sizing: border-box;

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 24px 0px 36px;

position: absolute;
width: 108px;
height: 120vh;
background:#000;


backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */

`;

export const LogoIcon = styled.img`
/* brand logo */

width: 36px;
height: 36px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

export const LogoDiv = styled.div`
/* company logo */

/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 28px 23px;
gap: 4px;



/* Inside auto layout */
flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;

`;

export const IconsDiv = styled.div`
/* home */
cursor: pointer;
/* Auto layout */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px 20px;
gap: 2px;

border-radius: 12px;

/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

export const Icon = styled.img`
/* icon */

width: 24px;
height: 24px;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;

`;

export const IconClicked = styled.div`
/* selection */
position:absolute;
left:0;
width:0.2rem;
height:24px;
/* primary text_selection */
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

/* Inside auto layout */
flex: none;
order: 1;
flex-grow: 0;
z-index: 1;

`;