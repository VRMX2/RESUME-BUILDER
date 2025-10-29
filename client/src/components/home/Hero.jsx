import React from 'react'
import {Link} from 'react-router-dom';

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const logos = [
    'https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg',
    'https://saasly.prebuiltui.com/assets/companies-logo/framer.svg',
    'https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg',
    'https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg',
    'https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg',
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="font-bold text-slate-800 text-lg">Resume Builder</span>
        </a>

        <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
          <a href="#" className="hover:text-green-600 transition font-medium">Home</a>
          <a href="#features" className="hover:text-green-600 transition font-medium">Features</a>
          <a href="#testimonials" className="hover:text-green-600 transition font-medium">Testimonials</a>
          <a href="#cta" className="hover:text-green-600 transition font-medium">Contact</a>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-600 active:scale-95 transition-all rounded-full text-white font-medium"
          >
            Get started
          </button>
          <button
            onClick={() => document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block px-6 py-2 border border-slate-300 active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 font-medium"
          >
            Login
          </button>
        </div>

        <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <a href="#" className="text-white font-medium">Home</a>
        <a href="#features" className="text-white font-medium">Features</a>
        <a href="#testimonials" className="text-white font-medium">Testimonials</a>
        <a href="#cta" className="text-white font-medium">Contact</a>
        <button onClick={() => setMenuOpen(false)} className="flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 transition text-white rounded-md font-bold">
          <X size={20} />
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
        <div className="absolute top-28 xl:top-10 -z-10 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-green-300 blur-3xl opacity-30"></div>

        {/* Avatars + Stars */}
        <div className="flex items-center mt-24">
          <div className="flex -space-x-3 pr-3">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user" className="w-8 h-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]" />
            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user" className="w-8 h-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[2]" />
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user" className="w-8 h-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]" />
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200" alt="user" className="w-8 h-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]" />
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]" />
          </div>

          <div>
            <div className="flex">
              {Array(5).fill(0).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-transparent fill-green-600" viewBox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              ))}
            </div>
            <p className="text-sm text-gray-700 font-medium">Used by 10,000+ users</p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-tight">
          Land your dream job with <span className="bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent whitespace-nowrap">AI-powered</span> resumes.
        </h1>

        <p className="max-w-md text-center text-base my-7 text-slate-600">
          Create, edit and download professional resumes with AI-powered assistance.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 ring-offset-2 ring-1 ring-green-400 flex items-center transition-all font-medium"
          >
            Get started
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700 font-medium">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
              <rect x="2" y="6" width="14" height="12" rx="2"></rect>
            </svg>
            <span>Try demo</span>
          </button>
        </div>

        <p className="py-6 text-slate-600 mt-14 font-medium">Trusted by leading brands, including</p>

        <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4">
          {logos.map((logo, index) => <img key={index} src={logo} alt="logo" className="h-6 w-auto max-w-xs opacity-60 hover:opacity-100 transition" />)}
        </div>
      </div>
    </div>
  );
};


export default Hero
