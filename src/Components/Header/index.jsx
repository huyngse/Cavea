import React from "react";

import {
  CustomBackGround,
  CustomLeadText,
  CustomSlogan,
} from "./style_component";
import { CustomButtonForHomePage } from "../Button/style_component";

function Header({ signUp, Order }) {
  return (
    <CustomBackGround>
      <CustomLeadText>
        <div> Home Sweet Cage: </div>
        <div> Where Birds Soar in Style!</div>
        <CustomSlogan>
          Every bird deserves a beautiful home to return to
        </CustomSlogan>
        {signUp && (
          <a href="/sign-up">
            <CustomButtonForHomePage>Sign up</CustomButtonForHomePage>
          </a>
        )}
        {Order && <CustomButtonForHomePage>Order now</CustomButtonForHomePage>}
      </CustomLeadText>
    </CustomBackGround>
  );
}
export default Header;
