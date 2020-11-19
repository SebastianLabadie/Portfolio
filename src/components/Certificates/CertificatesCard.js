import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
const CertificatesCardStyled = styled.div`


  width: 300px;
  cursor: pointer;
  position: relative;
  img {
    max-width: 100%;
    height:231px;
    display: block;
  }

  .certificatesCard__overlay {
    position: absolute;
    display:none;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:hover{
    .certificatesCard__overlay {
      display:grid;
      place-items:center;
      font-size:28px;
      color:#B0B0B0;
    }
  }

`;
function CertificatesCard({ title,img }) {
  const [show, setShow] = useState(false);

  return (
    <CertificatesCardStyled onClick={() => setShow(!show)}>
      <div className="certificatesCard__overlay">
        <i class="fas fa-plus"></i>

      </div>
      <img src={img} alt="asdasd" />
      <Modal show={show} setShow={() => setShow(!show)} title={title} />
    </CertificatesCardStyled>
  );
}

export default CertificatesCard;
