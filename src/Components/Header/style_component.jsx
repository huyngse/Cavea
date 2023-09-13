import styled from "@emotion/styled";

import background from "../../images/background.png";

export const FormWrapper = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding-top: 5px;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const CustomBackGround = styled(FormWrapper)`
  height: 84vh;
`;
export const CustomLeadText = styled(FormWrapper)`
  font-size: 3.5rem;
  line-height: 4.125rem;
  margin-bottom: 1rem;
  color: #374151;
  font: 700 2.5rem/3.125rem "Open Sans", sans-serif;
  letter-spacing: -0.2px;
  padding: 15rem 51rem 0rem 9rem;
`;
export const CustomSlogan = styled.div`
  color: #374151;
  font: 700 1rem/0.125rem "Open Sans", sans-serif;
  letter-spacing: -0.2px;
  padding: 2rem 0rem 3rem 0rem;
`;
