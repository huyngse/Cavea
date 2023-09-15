import React, { useState } from "react";

import {
  CustomBackGround,
  CustomLeadText,
  CustomSlogan,
} from "./style_component";
import { CustomButtonForHomePage } from "../Button/style_component";

function Header() {
  return (
    <CustomBackGround>
      <CustomLeadText>
        <div> Home Sweet Cage: </div>
        <div> Where Birds Soar in Style!</div>
        <CustomSlogan>
          Every bird deserves a beautiful home to return to
        </CustomSlogan>
        <a href="/sign-up">
          <CustomButtonForHomePage>Sign up</CustomButtonForHomePage>
        </a>
      </CustomLeadText>
    </CustomBackGround>
  );
}
export default Header;
