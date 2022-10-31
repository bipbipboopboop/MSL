import temp_pic from "../../assets/committee_pics/temp.png";

import president from "../../assets/committee_pics/Presidential/Nathan.png";
import vice_president1 from "../../assets/committee_pics/Presidential/Zi Yi.png";
import vice_president2 from "../../assets/committee_pics/Presidential/Hao Yi.png";
import admin from "../../assets/committee_pics/Admin/Michelle.png";
import event1 from "../../assets/committee_pics/Events/Deren.png";
import event2 from "../../assets/committee_pics/Events/Li Yang.png";
import outreach1 from "../../assets/committee_pics/Outreach/Yee Thern.png";
import outreach2 from "../../assets/committee_pics/Outreach/Tze Wei.png";
import outreach3 from "../../assets/committee_pics/Outreach/Hao Jun.png";
import publicity from "../../assets/committee_pics/Publicity/Ze Chun.png";
import welfare from "../../assets/committee_pics/Welfare/Yu Cong.png";

const committeeArray = [
  {
    position: "President",
    personArray: [{ name: "Nathan Choo En Xi", pic: president }],
  },
  {
    position: "Vice President",
    personArray: [
      { name: "Ng Zi Yi", pic: vice_president1 },
      { name: "Cheah Hao Yi", pic: vice_president2 },
    ],
  },
  {
    position: "Admin Head",
    personArray: [{ name: "Michelle", pic: admin }],
  },
  {
    position: "Event Head",
    personArray: [{ name: "Cheng Deren", pic: event1 }],
  },
  {
    position: "Event Vice Head",
    personArray: [{ name: "Lau Li Yang", pic: event2 }],
  },
  {
    position: "Public Relation and Outreach Head",
    personArray: [{ name: "Ng Yee Thern", pic: outreach1 }],
  },
  {
    position: "Public Rlation and Outreach Vice-Head",
    personArray: [
      { name: "Lim Tze Wei", pic: outreach2 },
      { name: "Lew Hao Jun", pic: outreach3 },
    ],
  },
  {
    position: "Publicity Head",
    personArray: [{ name: "Mok Ze Chun", pic: publicity }],
  },
  {
    position: "Welfare Head",
    personArray: [{ name: "Ang Yu Cong", pic: welfare }],
  },
];

export default committeeArray;
