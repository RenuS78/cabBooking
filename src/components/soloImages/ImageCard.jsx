import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ImageCard = (props) => {
  // const navigate = useNavigate();
  const filterImage = () => {
    alert("driver selected");
    // navigate("/collection");
  };
  return (
    <StyledImageCard onClick={filterImage}>
      <img src={props.image} alt="" className="imageCard_images" />
      <div className="name">{props.title}</div>
      <i class="bi bi-caret-right-fill"></i>
    </StyledImageCard>
  );
};

export default ImageCard;

const StyledImageCard = styled.div`
  /* height:68.5px;
        width: 68.5px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dottoed purple;
  border-radius: 15px;
  width: 40%;
  box-shadow: 3px 3px 10px purple;
  height: 68.5px;
  font-weight: bold;
  background-color: white;
  &:hover {
    width: 45%;
    height: 70px;

    .bi {
      font-size: xx-large;
    }
  }
  .bi {
    font-size: larger;
  }

  /* 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; */
  row-gap: 3px;

  .imageCard_images {
    height: 68.5px;
    width: 68.5px;
    border-radius: 15px;
    /* box-shadow: 3px 3px 10px purple; */
  }

  .name {
    margin-left: 20px;
  }
`;
