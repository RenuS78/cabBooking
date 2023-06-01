import React, { useState } from "react";
import styled from "styled-components";
import UploadForm from "./UploadForm";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import uploadIcon from "../../pictures/uploadIcon.png";
const HomeContent = () => {
  const [openSection, setOpenSection] = useState(false);
  const [openSection2, setOpenSection2] = useState(false);
  const openSectionContent = () => {
    setOpenSection(true);
    setOpenSection2(false);
  };
  const openSectionContent2 = () => {
    setOpenSection2(true);
    setOpenSection(false);
  };

  return (
    <StyledWrapperContainer>
      <StyledWrapper>
        <div>
          <StyledSection onClick={openSectionContent}>
            {/* <img src={uploadIcon} alt="upload solo" height="80%" /> */}
            <PersonIcon
              style={{
                height: "100px",
                width: "100%",
              }}
            />
            <h2 className="heading">solo rides</h2>
          </StyledSection>
        </div>

        <div>
          <StyledSection onClick={openSectionContent2}>
            {/* <img src={uploadIcon} alt="upload solo" height="80%" /> */}
            <GroupIcon
              style={{
                height: "100px",
                width: "100%",
              }}
            />
            <h2 className="heading">group rides</h2>
          </StyledSection>
        </div>
      </StyledWrapper>

      {openSection && <UploadForm name="solo" />}
      {openSection2 && <UploadForm name="collection" />}
    </StyledWrapperContainer>
  );
};

export default HomeContent;
const StyledWrapperContainer = styled.div`
  display: flex;
  height: 100%;

  /* flex-direction: column; */
  justify-content: flex-start;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const styledFolders = styled.img`
  /* &:hover{
    width: ; }*/
`;
const StyledSection = styled.div`
  height: 30vh;
  width: 20vw;
  background: linear-gradient(-135deg, #291928, #662a62, #c226b7);
  /* width:30vw; */
  margin: 5px;
  box-shadow: 5px 5px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  border-radius: 5px;
  padding: 20px;

  &:hover {
    /* width:30.5vw;
  height: 30.5vh; */
    box-shadow: 10px 10px 25px black;
  }
  .heading {
    color: white;
    text-transform: capitalize;
    font-weight: bold;
  }
`;
