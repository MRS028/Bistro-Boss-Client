import React, { useRef, useState, useEffect, useContext } from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Providers/AuthProvider";
import { BiPhotoAlbum } from "react-icons/bi";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/Social Login/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    
      updateUserProfile(data?.name, data?.photoURL)
        .then(() => {
          
          const userInfo = {
            name: data.name, // Include name field
            email: data.email,
            photoURL: data.photoURL, // Include photoURL field
          };
          console.log(userInfo)
    
          axiosPublic
            .post("/users", userInfo)
            .then((res) => {
              console.log(res.data);
    
              if (res.data.insertedId) {
                console.log("User added to the database");
                reset();
                Swal.fire({
                  position: "top",
                  icon: "success",
                  title: "Sign Up Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
    
                navigate("/");
              }
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    });
    
  };

  // const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisable(false);
    } else {
      setDisable(true);
      alert("Invalid Captcha. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/2 max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
              Sign Up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* name Field */}
              <div className="form-control">
                <label
                  htmlFor="name"
                  className="label text-gray-600 font-medium"
                >
                  name
                </label>
                <div className="relative">
                  <FaUserAlt className="absolute top-4 left-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="Enter your name"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm">name is required</p>
                )}
              </div>
              {/* PhotURl */}
              <div className="form-control">
                <label
                  htmlFor="name"
                  className="label text-gray-600 font-medium"
                >
                  PhotoURL
                </label>
                <div className="relative">
                  <BiPhotoAlbum className="absolute top-4 left-3 text-gray-400"></BiPhotoAlbum>

                  <input
                    type="text"
                    id="name"
                    {...register("photoURL", { required: true })}
                    placeholder="Enter your name"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
                {errors.photoURL && (
                  <p className="text-red-500 text-sm">PhotoURL is Required</p>
                )}
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label
                  htmlFor="email"
                  className="label text-gray-600 font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute top-5 left-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Enter your email"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm pt-2">Email is required</p>
                )}
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label
                  htmlFor="password"
                  className="label text-gray-600 font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <FaLock className="absolute top-4 left-3 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
                      },
                    })}
                    placeholder="Enter your password"
                    className="input input-bordered w-full pl-10"
                  />
                </div>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 character</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 character
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must include at least one uppercase letter, one
                    lowercase letter, one number, and one special character.
                  </p>
                )}
              </div>

              {/* Captcha Field */}
              <div className="form-control">
                <label className="label text-gray-600 font-medium">
                  <LoadCanvasTemplate />
                </label>
                <input
                  // onBlur={handleValidateCaptcha}
                  // ref={captchaRef}
                  type="text"
                  placeholder="Type the Captcha"
                  className="input input-bordered w-full"
                  // required
                />
                {/* <button
                  type="button"
                  
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate Captcha
                </button> */}
              </div>

              {/* Submit Button */}
              <div className="form-control">
                <input
                  // disabled={disable}
                  type="submit"
                  className="btn btn-primary w-full"
                  value="Sign Up"
                />
              </div>
            </form>

            <p className="text-sm text-center text-gray-500 mt-4">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
            <div className="divider">X</div>
            <div className="mt-5">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
