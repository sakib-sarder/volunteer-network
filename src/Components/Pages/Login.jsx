import { useContext, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import google from "../../assets/google.png";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const { singInWithGoogle, signInWithFacebook, logingWithEmailAndPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);

  // google login
  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   facebook login
  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // email password login
  const handleLoginWithEmailPassword = (e) => {
    e.preventDefault();
    logingWithEmailAndPassword(email, password)
      .then((result) => {
          console.log(result.user);
          navigate("/")
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="w-full md:w-2/3 lg:w-2/4 mx-auto mt-12">
      <form>
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={() => setEmail(event.target.value)}
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              onChange={() => setPassword(event.target.value)}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <button
                onClick={handleLoginWithEmailPassword}
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
            <p className="text-sm mt-2">
              Do not have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
      <div className="divider text-sm">OR</div>
      <div className="flex flex-col items-center gap-5">
        <button
          onClick={handleGoogleLogin}
          className="bg-gray-200 rounded-lg w-full py-2"
        >
          <img src={google} className="w-12 mx-auto " />
        </button>
        <button
          onClick={handleFacebookLogin}
          className="bg-gray-200 rounded-lg w-full py-2"
        >
          <BsFacebook className="text-5xl mx-auto text-blue-700" />
        </button>
        <button className="bg-gray-200 rounded-lg w-full py-2">
          <AiFillGithub className="text-5xl mx-auto text-black" />
        </button>
      </div>
    </div>
  );
};

export default Login;
