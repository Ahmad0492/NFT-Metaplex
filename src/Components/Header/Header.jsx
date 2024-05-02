import { HeaderDiv, HeaderSubText, HeaderText } from "./style";
import HeaderIcon from '../../assets/header_icon.svg'
const Header = () => {
    return(
        <HeaderDiv>
            <img src={HeaderIcon} style={{width:'24px', height:'24px'}}/>
            <HeaderText>ETH/USDT</HeaderText>
            <HeaderSubText>1137.62  +2.62%↑</HeaderSubText>
        </HeaderDiv>
    );
};

export default Header;