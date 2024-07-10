import "./LoginForm.css";
import { CodesandBox } from "@/source/Assets/Icons";
import { CustomButton, CustomInput } from "@/source/components/input/input";
import Link from "next/link";

const LoginPage = () => (
  <div className="layout">
    <div className="form-heading">
      <CodesandBox />
      Serve With Ease
    </div>

    <div className="form-container">
      <div className="logo-container">Login</div>
      <form className="form">
        <CustomInput
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email"
        />
        <CustomInput
          id={"password"}
          label={"Password"}
          type={"password"}
          placeholder={"Enter Your Password"}
        />
        <Link href="/">
          <CustomButton text={"Sign In"} />
        </Link>
      </form>
    </div>

    <div className="eclipse"></div>
  </div>
);

export default LoginPage;
