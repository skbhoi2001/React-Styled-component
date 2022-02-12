import styled from "styled-components";

const Navbar = styled.div`
  background-color: #807891;
  width: 90%;
  height: 100px;
  padding: 20px;
  margin: auto;
`;
const Icon = styled.img`
  float: left;
  width: 100px;
  @media all and (max-width: 620px) {
    display: none;
  }
`;
const UseLink = styled.div`
  float: right;
  display: flex;
  gap: 20px;
  margin: 2.5%;
`;
const Content = styled.p`
  font-size: 25px;
  @media all and (max-width: 620px) {
    font-size: 20px;
  }
`;

export default function Fullnav() {
  return (
    <div>
      <Navbar>
        <Icon src="https://d27028dliefpk3.cloudfront.net/assets/icons/masaischool-discipline.svg" />
        <UseLink>
          <Content>Home</Content>
          <Content>About Us</Content>
          <Content>Gallery</Content>
          <Content>Other</Content>
        </UseLink>
      </Navbar>
    </div>
  );
}
