import React from 'react'
import Title from './Title';
import { Menu, X, ArrowRight, Zap, BookUser, User2, Mail, Lock, Eye, EyeOff, CheckCircle2, XCircle, Shield } from 'lucide-react';
const Testimonial = () => {
  const cardsData = [
    {
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
      name: 'Briar Martin',
      handle: '@neilstellar',
      date: 'April 20, 2025',
      text: 'This resume builder helped me land my dream job! The AI suggestions were spot-on.'
    },
    {
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
      name: 'Avery Johnson',
      handle: '@averywrites',
      date: 'May 10, 2025',
      text: 'Super easy to use and the templates are modern and professional. Highly recommend!'
    },
    {
      image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
      name: 'Jordan Lee',
      handle: '@jordantalks',
      date: 'June 5, 2025',
      text: 'The export options are great. I was able to create multiple versions for different jobs.'
    },
    {
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
      name: 'Sam Rivera',
      handle: '@samdesigns',
      date: 'July 15, 2025',
      text: 'Clean interface and intuitive design. Made resume creation actually enjoyable!'
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-xl mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white border border-slate-100">
      <div className="flex gap-2">
        <img className="w-11 h-11 rounded-full object-cover" src={card.image} alt={card.name} />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold text-slate-800">{card.name}</p>
            <CheckCircle2 className="w-3.5 h-3.5 fill-green-500 text-white" />
          </div>
          <span className="text-xs text-slate-500">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-700">{card.text}</p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-green-500">
            <svg width="11" height="10" viewBox="0 0 11 10" fill="none">
              <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <div id="testimonials" className="flex flex-col items-center my-20 scroll-mt-12">
      <Badge icon={BookUser} text="Testimonials" color="green" />
      <Title title="Don't just take our word" description="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review." />
      
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Testimonial
