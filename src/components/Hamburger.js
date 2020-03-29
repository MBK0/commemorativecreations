import React from "react";
import styled from "styled-components";

function Hmburger({ color }) {
  const Container = styled.div`
      b {
        display: block;
        right: 0px;
        position: relative;
        height: 3px;
        width: 25px;
        background: ${color ? color : "#fff"};
        border-radius: 4px;
        transform-origin: 0 50%;
        transform: scaleX(1);
        opacity: 1;
        margin-bottom: 4px;
      }

      &:hover {
        cursor: pointer;
        b {
          animation: menu-hover 0.3s forwards cubic-bezier(0, 0, 0.2, 1) 1;
        }
        b:nth-child(2) {
          animation-delay: 0.1s;
        }
        b:last-child {
          animation-delay: 0.2s;
        }
      }
    }
    @keyframes menu-hover {
      60% {
        transform: scaleX(1.4);
      }
      100% {
        transform: scaleX(1);
      }
  `;
  return (
    <Container>
      <div className="Hamburger">
        <b></b>
        <b></b>
        <b></b>
      </div>
    </Container>
  );
}

export default Hmburger;
