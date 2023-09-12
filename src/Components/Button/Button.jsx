import { CustomButton } from "./style_component";
// this button will use for login and sign up
export default function Buttons({ children }) {
  return <CustomButton type="submit">{children}</CustomButton>;
}
