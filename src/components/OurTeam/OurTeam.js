import React from "react";
import { Card, Container, Row } from "react-bootstrap";

import temp_pic from "../../assets/committee_pics/temp.png";
import card_background from "../../assets/img/color-sharp.png";

const OurTeam = () => {
  const committeeArray = [
    {
      position: "President",
      personArray: [{ name: "Nathan Choo En Xi", pic: temp_pic }],
    },
    {
      position: "Vice President",
      personArray: [
        { name: "Ng Zi Yi", pic: temp_pic },
        { name: "Cheah Hao Yi", pic: temp_pic },
      ],
    },
    {
      position: "Admin Head",
      personArray: [{ name: "Michelle", pic: temp_pic }],
    },
    {
      position: "Event Head",
      personArray: [{ name: "Cheng Deren", pic: temp_pic }],
    },
    {
      position: "Public Relation and Outreach Head",
      personArray: [{ name: "Ng Yee Thern", pic: temp_pic }],
    },
    {
      position: "Public Rlation and Outreach Vice-Head",
      personArray: [
        { name: "Lew Hao Jun", pic: temp_pic },
        { name: "Lim Tze Wei", pic: temp_pic },
      ],
    },
    {
      position: "Publicity Head",
      personArray: [{ name: "Mok Ze Chun", pic: temp_pic }],
    },
    {
      position: "Welfare Head",
      personArray: [{ name: "Ang Yu Cong", pic: temp_pic }],
    },
  ];
  return (
    <div className="meet">
      <Container>
        {committeeArray?.map((mbr, index) => (
          <PositionRow key={index} positionDetail={mbr} />
        ))}
        <PositionRow />
      </Container>
    </div>
  );
};

export default OurTeam;

const PositionRow = ({ positionDetail }) => (
  <Row className="justify-content-center text-center">
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
    className="mx-5"
    style={{
      width: "200px",
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
