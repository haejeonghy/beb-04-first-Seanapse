import { NFT } from "../components/export";
//import styled from 'styled-components';

function Home({searchKeyword} ) {
  return (
    <NFT searchKeyword={searchKeyword} />
  );
}

export default Home;