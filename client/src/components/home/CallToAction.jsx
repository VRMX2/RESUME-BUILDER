import React from 'react'

const CallToAction = () => {
  return (
    <div id="cta" className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-28">
      <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
        <p className="text-xl font-medium max-w-md text-slate-800">
          Build a Professional Resume That Helps You Stand Out and Get Hired
        </p>
        
        <button
          onClick={() => document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center gap-2 rounded-full py-3 px-8 bg-green-600 hover:bg-green-700 transition text-white font-medium"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4.5 h-4.5" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction
