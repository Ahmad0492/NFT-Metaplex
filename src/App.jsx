// import '../init'
import "./init";
import React, { useState, useEffect } from "react";
import "./App.css";
import NftBox from "./Components/NftListing/NftBox";
import NFtimg1 from "./assets/nft_img.svg";
import Nftimg2 from "./assets/nft_img2.svg";
import Nftimg3 from "./assets/nft_img3.svg";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
// import { Metaplex, keypairIdentity, irysStorage } from "@metaplex-foundation/js";
// import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

function App() {
  // const [nfts, setNfts] = useState([]);
  // const connection = new Connection(clusterApiUrl("mainnet-beta"));
  // const wallet = Keypair.generate();

  // const metaplex = Metaplex.make(connection)
  //     .use(keypairIdentity(wallet))
  //     .use(irysStorage());
  // useEffect(() => {
  //   const fetchNFTs = async () => {
  //     try {
  //       const myNfts = await metaplex.nfts().findAllByOwner({
  //         owner: metaplex.identity().publicKey
  //     });
  //      setNfts(myNfts.slice(0, 3));
  //      console.log(myNfts)
  //     } catch (error) {
  //       console.error("Error fetching NFTs:", error);
  //     }
  //   };
  //   fetchNFTs();
  // }, []);
  const [position, setPosition] = useState(0); // State to keep track of the position of the visible NFT boxes

  const nftHeadings = ["zombies #7919", "Cyberlinx #2551", "The Eyedeas #1029"];

  const moveLeft = () => {
    setPosition((prevPosition) => (prevPosition + 1) % 3); // Update position to move NFT boxes to the left
  };

  const moveRight = () => {
    setPosition((prevPosition) => (prevPosition - 1 + 3) % 3); // Update position to move NFT boxes to the right
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10rem", height: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Sidebar />
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", width: "100%", padding: "20px 0px" }}>
            <Header />
          </div>
          <div
            style={{
              display: "flex",
              gap: "33px",
            }}
          >
            <NftBox
              nftPicture={
                [NFtimg1, Nftimg2, Nftimg3][(position + 2) % 3] // Left NFT box
              }
              nftHeading={nftHeadings[(position + 2) % 3]}
            />
            <NftBox
              nftPicture={
                [NFtimg1, Nftimg2, Nftimg3][position] // Center NFT box
              }
              nftHeading={nftHeadings[position]}
            />
            <NftBox
              nftPicture={
                [NFtimg1, Nftimg2, Nftimg3][(position + 1) % 3] // Right NFT box
              }
              nftHeading={nftHeadings[(position + 1) % 3]}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4rem",
            }}
          >
            <Slider moveLeft={moveLeft} moveRight={moveRight} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
