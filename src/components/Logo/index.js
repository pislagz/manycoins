import React from "react";
import { Wrapper, Link, Image, Text } from "./styled";
import logoImage from "../../assets/icons/coinM.png";
// import Switch from "./Switch/Switch";

export const Logo = (props) => (
  <Wrapper>
    <Link href="/">
      <Image src={logoImage} alt={"manycoins logo"}></Image>
      <Text>Manycoins</Text>
    </Link>
    {/* <Switch handleThemeSwitch={props.handleThemeSwitch} /> */}
  </Wrapper>
);
