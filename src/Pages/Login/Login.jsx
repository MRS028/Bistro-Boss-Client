import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/Social Login/SocialLogin";

const Login = () => {
  // const captchaRef = useRef(null);
  const [disabele, setDisable] = useState(true);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace:true})

      // console.log(user);
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
      alert("Enter the Correct Captcha");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignIn</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse ">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2  max-w-sm  shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                onBlur={handleValidateCaptcha}
                  // ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="Type the Captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button
                  
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabele}
                  type="submit"
                  className="btn btn-primary bg-gray-900 hover:bg-gray-950 border-none"
                  value="Login"
                ></input>
              </div>
              <p className="text-center text-sm">
                Haven't Accout?{" "}
                <Link
                  to="/auth/signup"
                  className="text-blue-500 hover:underline"
                >
                  SignUp
                </Link>
              </p>
              <div className="divider">Or</div>
            </form>
            <div>
              <p className="text-sm text-center font-semibold">Sign In With</p>
            <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
