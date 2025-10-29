import React, { useState } from 'react';
import { User2, Mail, Lock, Eye, EyeOff, CheckCircle2, XCircle, Shield, ArrowRight } from 'lucide-react';

const Login = () => {
  const [state, setState] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const validateForm = () => {
    const newErrors = {};

    if (state === "register" && !formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (state === "register" && formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    
    if (state === "login") {
      showNotification("Login successful!", "success");
    } else {
      showNotification("Account created successfully!", "success");
    }
    
    console.log("Form submitted:", { state, formData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const toggleState = () => {
    setState(prev => prev === "login" ? "register" : "login");
    setErrors({});
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white p-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100/60 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100/60 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-md animate-in slide-in-from-top-5 ${
          notification.type === "success" 
            ? "bg-emerald-500/90 border-emerald-400/50 text-white" 
            : "bg-red-500/90 border-red-400/50 text-white"
        }`}>
          {notification.type === "success" ? (
            <CheckCircle2 size={22} className="flex-shrink-0" />
          ) : (
            <XCircle size={22} className="flex-shrink-0" />
          )}
          <span className="font-semibold text-sm">{notification.message}</span>
        </div>
      )}

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl mb-6 shadow-2xl shadow-emerald-500/30 transform hover:scale-105 transition-transform duration-300">
            <Shield size={40} color="white" strokeWidth={2} />
          </div>
          <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
            {state === "login" ? "Welcome Back" : "Get Started"}
          </h1>
          <p className="text-emerald-200 text-lg">
            {state === "login" 
              ? "Sign in to access your dashboard" 
              : "Create your account in seconds"}
          </p>
        </div>

        {/* Form Card */}
        <form 
          onSubmit={handleSubmit} 
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 space-y-6"
        >
          {/* Name Field (Register Only) */}
          {state === "register" && (
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 ml-1">
                Full Name
              </label>
              <div className={`group flex items-center bg-gray-50/80 border-2 rounded-2xl h-14 px-5 gap-3 transition-all duration-300 ${
                errors.name 
                  ? "border-red-400 shadow-sm shadow-red-200" 
                  : "border-gray-200 hover:border-emerald-300 focus-within:border-emerald-500 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-emerald-100"
              }`}>
                <User2 size={20} className={`flex-shrink-0 transition-colors ${errors.name ? 'text-red-400' : 'text-gray-400 group-focus-within:text-emerald-600'}`} />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-base"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm ml-1 flex items-center gap-1.5 animate-in slide-in-from-top-1">
                  <XCircle size={14} />
                  {errors.name}
                </p>
              )}
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 ml-1">
              Email Address
            </label>
            <div className={`group flex items-center bg-gray-50/80 border-2 rounded-2xl h-14 px-5 gap-3 transition-all duration-300 ${
              errors.email 
                ? "border-red-400 shadow-sm shadow-red-200" 
                : "border-gray-200 hover:border-emerald-300 focus-within:border-emerald-500 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-emerald-100"
            }`}>
              <Mail size={20} className={`flex-shrink-0 transition-colors ${errors.email ? 'text-red-400' : 'text-gray-400 group-focus-within:text-emerald-600'}`} />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-base"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm ml-1 flex items-center gap-1.5 animate-in slide-in-from-top-1">
                <XCircle size={14} />
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 ml-1">
              Password
            </label>
            <div className={`group flex items-center bg-gray-50/80 border-2 rounded-2xl h-14 px-5 gap-3 transition-all duration-300 ${
              errors.password 
                ? "border-red-400 shadow-sm shadow-red-200" 
                : "border-gray-200 hover:border-emerald-300 focus-within:border-emerald-500 focus-within:bg-white focus-within:shadow-lg focus-within:shadow-emerald-100"
            }`}>
              <Lock size={20} className={`flex-shrink-0 transition-colors ${errors.password ? 'text-red-400' : 'text-gray-400 group-focus-within:text-emerald-600'}`} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-base"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-emerald-600 transition-colors p-1 hover:bg-emerald-50 rounded-lg"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm ml-1 flex items-center gap-1.5 animate-in slide-in-from-top-1">
                <XCircle size={14} />
                {errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password (Login Only) */}
          {state === "login" && (
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-emerald-600 hover:text-emerald-700 font-semibold transition-colors hover:underline decoration-2 underline-offset-2"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 rounded-2xl text-white font-bold text-base bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 transition-all duration-300 shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>{state === "login" ? "Sign In" : "Create Account"}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Toggle State */}
          <div className="text-center pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-base">
              {state === "login" 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleState}
                className="text-emerald-600 hover:text-emerald-700 font-bold hover:underline decoration-2 underline-offset-2 transition-colors"
              >
                {state === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-6 text-emerald-200/60 text-sm">
            <button className="hover:text-emerald-200 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-emerald-200 transition-colors">Terms of Service</button>
          </div>
          <p className="text-center text-sm text-emerald-200/80 font-medium">
            Secured with 256-bit SSL encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;