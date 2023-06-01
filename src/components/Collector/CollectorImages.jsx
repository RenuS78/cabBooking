import React from "react";
import styled from "styled-components";

const CollectorImages = () => {
  return (
    <StyledCollectorContainer>
      {/* <button>return</button> */}

      {/* <!-- Gallery --> */}
      <Gallery>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </Gallery>

      {/* <!-- Gallery --> */}
    </StyledCollectorContainer>
  );
};

export default CollectorImages;

const StyledCollectorContainer = styled.div`
  padding: 20px;
  min-width: 80vh;
`;
const Gallery = styled.div`
  /* min-width: 80vw;
  height: 90vh;
  position:fixed;
  bottom:0px;
  right:0px;
  overflow-y: scroll; */
`;
const SideNav = styled.div`
  position: fixed;
  left: 0px;
`;
