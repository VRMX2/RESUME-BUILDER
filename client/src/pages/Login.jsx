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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    if (state === "login") {
      showNotification("Login successful! Welcome back.", "success");
    } else {
      showNotification("Account created successfully!", "success");
    }
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
    <div id="login" className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl animate-in slide-in-from-top-5 ${
          notification.type === "success" 
            ? "bg-green-500/95 border-green-400/50 text-white" 
            : "bg-red-500/95 border-red-400/50 text-white"
        }`}>
          {notification.type === "success" ? (
            <CheckCircle2 size={22} className="flex-shrink-0" />
          ) : (
            <XCircle size={22} className="flex-shrink-0" />
          )}
          <span className="font-bold text-sm">{notification.message}</span>
        </div>
      )}

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl mb-6 shadow-2xl shadow-green-500/50 transform hover:scale-110 hover:rotate-6 transition-all duration-500">
            <Shield size={40} color="white" strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl font-black text-white mb-3 tracking-tight">
            {state === "login" ? "Welcome Back" : "Get Started"}
          </h1>
          <p className="text-green-100/90 text-lg font-medium">
            {state === "login" 
              ? "Sign in to build your resume" 
              : "Create your account in seconds"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-8 space-y-6">
          {/* Name Field (Register Only) */}
          {state === "register" && (
            <div className="space-y-2">
              <label className="block text-sm font-bold text-white ml-1">
                Full Name
              </label>
              <div className={`group flex items-center bg-white/5 border-2 rounded-2xl h-14 px-5 gap-3 transition-all duration-300 ${
                errors.name 
                  ? "border-red-400 shadow-lg shadow-red-500/20" 
                  : "border-white/10 hover:border-green-400/50 focus-within:border-green-500 focus-within:bg-white/10 focus-within:shadow-lg focus-within:shadow-green-500/20"
              }`}>
                <User2 size={20} className={`flex-shrink-0 transition-colors ${errors.name ? 'text-red-400' : 'text-green-400 group-focus-within:text-green-300'}`} />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-base"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-sm ml-1 flex items-center gap-1.5">
                  <XCircle size={14} />
                  {errors.name}
                </p>
              )}
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-white ml-1">
              Email Address
            </label>
            <div className={`group flex items-center bg-white/5 border-2 rounded-2xl h-14 px-5 gap-3 transition-all duration-300 ${
              errors.email 
                ? "border-red-400 shadow-lg shadow-red-500/20" 
                : "border-white/10 hover:border-green-400/50 focus-within:border-green-500 focus-within:bg-white/10 focus-within:shadow-lg focus-within:shadow-green-500/20"
            }`}>
              <Mail size={20} className={`flex-shrink-0 transition-colors ${errors.email ? 'text-red-400' : 'text-green-400 group-focus-within:text-green-300'}`} />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-base"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm ml-1 flex items-center gap-1.5">
                <XCircle size={14} />
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-bold text-white ml-1">
              Password
            </label>
            <div className={`group flex items-center bg-white/5 border-2 rounded-2xl h-14 px-5 gap-3 transition-all duration-300 ${
              errors.password 
                ? "border-red-400 shadow-lg shadow-red-500/20" 
                : "border-white/10 hover:border-green-400/50 focus-within:border-green-500 focus-within:bg-white/10 focus-within:shadow-lg focus-within:shadow-green-500/20"
            }`}>
              <Lock size={20} className={`flex-shrink-0 transition-colors ${errors.password ? 'text-red-400' : 'text-green-400 group-focus-within:text-green-300'}`} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-base"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-green-400 hover:text-green-300 transition-colors p-1 hover:bg-white/10 rounded-lg"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-400 text-sm ml-1 flex items-center gap-1.5">
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
                className="text-sm text-green-300 hover:text-green-200 font-bold transition-colors hover:underline decoration-2 underline-offset-2"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="relative w-full h-14 rounded-2xl text-white font-bold text-base bg-gradient-to-r from-green-600 via-green-600 to-emerald-600 hover:from-green-500 hover:via-green-500 hover:to-emerald-500 transition-all duration-300 shadow-xl shadow-green-500/30 hover:shadow-2xl hover:shadow-green-500/50 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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

          {/* Social Login Options */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/10 text-white/60 font-semibold">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white font-semibold"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Google</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-white font-semibold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </button>
          </div>

          {/* Toggle State */}
          <div className="text-center pt-4 border-t border-white/10">
            <p className="text-white/80 text-base">
              {state === "login" 
                ? "Don't have an account? " 
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleState}
                className="text-green-300 hover:text-green-200 font-bold hover:underline decoration-2 underline-offset-2 transition-colors"
              >
                {state === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-center gap-6 text-green-100/60 text-sm font-medium">
            <button className="hover:text-green-100 transition-colors">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-green-100 transition-colors">Terms of Service</button>
          </div>
          <div className="flex items-center justify-center gap-2 text-green-100/80 text-sm font-bold">
            <Shield size={16} className="text-green-400" />
            <span>Secured with 256-bit SSL encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;