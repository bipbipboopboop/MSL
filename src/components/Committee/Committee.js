import React from "react";
import { Card, Container, Row } from "react-bootstrap";

import card_background from "../../assets/img/color-sharp.png";
import committeeArray from "./committee_array";

const CommitteeTeam = () => {
  return (
    <div className="meet">
      {committeeArray?.map((mbr, index) => (
        <PositionRow key={index} positionDetail={mbr} />
      ))}
    </div>
  );
};

export default CommitteeTeam;

const PositionRow = ({ positionDetail }) => (
  <Row className="d-flex justify-content-center mb-5">
    <div className="w-100">
      <h1>{positionDetail?.position}</h1>
    </div>
    {positionDetail?.personArray?.map((personDetail, index) => (
      <PersonCard key={index} personDetail={personDetail} />
    ))}
  </Row>
);

const PersonCard = ({ personDetail }) => (
  <div
    className="sm-mx-0 mx-5 pb-5 mb-3"
    style={{
      minWidth: "20em",
      width: "20em",
      backgroundColor: "purple",
      backgroundImage: `url(${card_background})`,
    }}
  >
    <Card.Img className="mt-3" src={personDetail?.pic} />
    <Card.Body>
      <p>{personDetail?.name}</p>
    </Card.Body>
  </div>
);
