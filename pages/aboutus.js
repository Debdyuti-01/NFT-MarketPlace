import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Debdyuti Das",
      position: "CFO",
      images: images.founder1,
    },
    {
      name: "Shriya B",
      position: "CFO",
      images: images.founder2,
    },
    {
      name: "Meghana BT",
      position: "Chairman",
      images: images.founder3,
    },
    {
      name: "Pooja Ravi",
      position: "Chief Strategy Officer",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 M",
      info: "Articles have been public around the world (as of January 30, 2022)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of January 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of January 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              At NFT Marketplace, we believe in the transformative power of digital art and the potential of blockchain technology to revolutionize the way we collect and trade it. Our mission is to create a platform that empowers artists and collectors to connect and exchange digital art in a decentralized and secure manner
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            Our team is made up of talented developers, designers, marketers, and other professionals who are dedicated to making our company the best NFT marketplace on the web. We're always looking for ways to improve our platform and provide our users with the best possible experience
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Quick Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programs and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
