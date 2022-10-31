import temp_pic from "../../assets/committee_pics/temp.png";

import president from "../../assets/committee_pics/Presidential/Nathan.png";
import vice_president1 from "../../assets/committee_pics/Presidential/Zi Yi.png";
import vice_president2 from "../../assets/committee_pics/Presidential/Hao Yi.png";

const gallery = { president, vice_president1, vice_president2 };

const committeeArray = [
  {
    position: "President",
    personArray: [{ name: "Nathan Choo En Xi", pic: gallery?.president }],
  },
  {
    position: "Vice President",
    personArray: [
      { name: "Ng Zi Yi", pic: gallery?.vice_president1 },
      { name: "Cheah Hao Yi", pic: gallery?.vice_president2 },
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

export default committeeArray;
