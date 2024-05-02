import { BottomDiv, BottomDivContent, DetailsText, NftBoxDiv, NftImg, NftName, OptionsImg } from "./style";
import Option from '../../assets/options.svg'
import NftImage from '../../assets/nft_img.svg'
const NftBox = ({nftPicture, nftHeading}) => {

    return(
        <NftBoxDiv>
            <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                <NftName>{nftHeading}</NftName>
                <OptionsImg src={Option} alt=""/>
            </div>
            <div style={{marginTop:'2px'}}>
                <NftImg src={nftPicture}/>
            </div>
            <BottomDiv>
                <BottomDivContent>
                    <NftName>Owner</NftName>
                    <DetailsText>72UGr...YdD</DetailsText>
                </BottomDivContent>

                <BottomDivContent>
                    <NftName>Mint Address</NftName>
                    <DetailsText>72UGr...YdD</DetailsText>
                </BottomDivContent>

                <BottomDivContent>
                    <NftName>Token Address</NftName>
                    <DetailsText>72UGr...YdD</DetailsText>
                </BottomDivContent>
            </BottomDiv>
        </NftBoxDiv>
    );
};

export default NftBox