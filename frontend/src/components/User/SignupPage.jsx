import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignupPage() {
  const navigator3 = useNavigate();

  const navigateToLogin = () => {
    navigator3("/LoginPage");
  };

  const [formData, setFormData] = useState({
    fullName: "",
    surName: "",
    dop: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    foodType: "",
  });

  const [showPassword, setShowPassword] = useState(false); // New state to toggle password visibility

  const handleFromInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate the form
  const validateForm = () => {
    const { fullName, surName, dop, gender, email, password, confirmPassword, address, foodType } = formData;
    if (!fullName || !surName || !dop || !gender || !email || !password || !confirmPassword || !address || !foodType) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }
    return true;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Send form data to backend API
    fetch("http://localhost:8080/HostelFinder/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Successfully signed up!");
          setTimeout(() => {
            navigateToLogin();
          }, 2000); // Redirect to login page after 2 seconds
        } else {
          toast.error("Failed to sign up. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("Error: Unable to process your request.");
        console.error("Error:", error);
      });

    setFormData({
      fullName: "",
      surName: "",
      dop: "",
      gender: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      foodType: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <ToastContainer />
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">Sign Up</h1>
        <form onSubmit={onSubmitForm} className="space-y-6">
          {/* Name Inputs */}
          <div className="space-y-2">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleFromInput}
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
            <input
              type="text"
              name="surName"
              value={formData.surName}
              onChange={handleFromInput}
              placeholder="Surname"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
          </div>
          {/* Date of Birth */}
          <div className="space-y-2">
            <label className="block text-gray-600">Date of Birth</label>
            <input
              type="date"
              name="dop"
              value={formData.dop}
              onChange={handleFromInput}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
          </div>
          {/* Gender */}
          <div className="space-y-2">
            <label className="block text-gray-600">Gender</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleFromInput}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleFromInput}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          {/* Email & Password */}
          <div className="space-y-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFromInput}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleFromInput}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleFromInput}
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
          </div>
          {/* Show Password Toggle */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="form-checkbox text-blue-500"
            />
            <label htmlFor="showPassword" className="text-gray-600">
              Show Password
            </label>
          </div>
          {/* Address & Food Type */}
          <div className="space-y-2">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleFromInput}
              placeholder="Address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 outline-none transition-colors duration-300"
            />
            <label className="block text-gray-600">Food Type</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="foodType"
                  value="Veg"
                  checked={formData.foodType === "Veg"}
                  onChange={handleFromInput}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Veg</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="foodType"
                  value="Non-Veg"
                  checked={formData.foodType === "Non-Veg"}
                  onChange={handleFromInput}
                  className="form-radio text-blue-500"
                />
                <span className="ml-2">Non-Veg</span>
              </label>
            </div>
          </div>
          {/* Login Link */}
          <div className="text-center text-sm text-gray-500 mb-4">
            Already have an account?{" "}
            <a onClick={navigateToLogin} className="text-blue-500 hover:underline cursor-pointer">
              Login
            </a>
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-[#25274D] text-white rounded-lg hover:bg-[#25274D] transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
