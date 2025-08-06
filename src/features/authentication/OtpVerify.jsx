import React, { useState, useRef, useEffect } from 'react';
import { FaLock, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import otpImage from './assets/otpv.svg'; // Replace with your image path

const OtpVerify = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = countdown > 0 && setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate verification
    setTimeout(() => {
      setIsVerified(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const resendOtp = () => {
    setCountdown(30);
    // Add resend OTP logic here
    console.log('Resending OTP...');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 bg-gradient-to-br bg-[#3045e0] p-8 text-white flex flex-col justify-between">
          <Link to="/login" className="flex items-center text-blue-200 hover:text-white mb-8">
            <FaArrowLeft className="mr-2" />
            Back to Login
          </Link>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Secure Verification</h2>
            <p className="text-blue-100 mb-6">We've sent a 6-digit code to your email</p>
          </div>
          
          <div className="hidden md:block relative h-96 rounded-lg overflow-hidden ">
            <div className="absolute  bg-blue-800 opacity-20"></div>
            <img 
              src={otpImage} 
              alt="OTP verification illustration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 bg-opacity-30 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">One-Time Password</h3>
                <p className="text-blue-100 text-sm">Valid for 10 minutes only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          {isVerified ? (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                <FaCheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Verified Successfully!</h1>
              <p className="text-gray-600 mb-8">Your account has been successfully verified</p>
              <Link
                to="/dashboard"
                className="w-full md:w-auto inline-flex justify-center py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                Continue to Dashboard
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-4">
                  <FaLock className="h-6 w-6 text-blue-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Verify Your Account</h1>
                <p className="text-gray-600">Enter the 6-digit code sent to your email</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* OTP Input Fields */}
                <div className="flex justify-center space-x-3">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength="1"
                      value={otp[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center text-2xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                      required
                    />
                  ))}
                </div>

                {/* Countdown and Resend */}
                <div className="text-center">
                  {countdown > 0 ? (
                    <p className="text-sm text-gray-600">
                      Resend code in <span className="font-medium">{countdown}s</span>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={resendOtp}
                      className="text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
                    >
                      Resend OTP
                    </button>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || otp.some(digit => digit === '')}
                  className={`w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg transition duration-200 shadow-md hover:shadow-lg ${
                    isSubmitting || otp.some(digit => digit === '') ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : (
                    'Verify Account'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Didn't receive the code? Check your spam folder or{' '}
                  <button
                    onClick={resendOtp}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    resend
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerify;