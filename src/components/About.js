import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <AboutUsDescription />
        <OurVisionMission />
        <OurStory />
      </Container>
    </section>
  );
};

export default About;

const AboutUsDescription = () => (
  <>
    <h2>About Us</h2>
    <p>
      NUS MSL is short for National University of Singapore Malaysian Students’
      League. Founded in 2004, we are a community of Malaysian students offering
      each other the comfort of home at a place away from home.
    </p>
  </>
);
const OurVisionMission = () => (
  <>
    <h2>Our Vision and Mission</h2>
    <p>
      There is no better feeling than the feeling of home! In Mandarin Chinese,
      we call it “归宿感“ (The homely feels). Seniors from different batches are
      very willing to help, very kind and generous when offering help to juniors
      hailing from the same motherland.” ~ Chia Sing “Home Away from Home” -
      this statement reflects the primary goal for MSL of the past and present,
      as well as the years to come.
    </p>
  </>
);

const OurStory = () => (
  <>
    <h2>Our Story</h2>
    <p>
      Since the early 20th century, Malaysian graduates of the National
      University of Singapore (and the institutions that preceded it) have been
      active in altering the landscapes of Malaysia and the world at large, from
      the eternal power couple Tun Dr Mahathir Mohamad and Tun Dr. Siti Hasmah
      to the late unyielding "Tiger of Jelutong" Karpal Singh. The fortunes of
      Malaysia and Singapore are still inextricably linked, and since
      Singapore's independence in 1965, NUS has never been short of Malaysian
      students. However, there was no formal organization in NUS that
      represented Malaysian students; as a result, Malaysians frequently had to
      go alone and without much assistance from Malaysia to Singapore. Realizing
      this, five Malaysians made the decision in 2004 to assist the incoming
      class of Malaysian students by planning the inaugural University Freshmen
      Outreach, or UFO as it is more well known, for a group of four Malaysian
      freshmen. The Malaysian Students' League (MSL) was established a short
      while thereafter. Since our humble beginnings, our NUS MSL has grown to
      about 500 members, and we are still working to provide Malaysian students
      studying at NUS with a place where they may feel at home and where the
      Malaysian spirit can be seen burning brightly.
    </p>
  </>
);
