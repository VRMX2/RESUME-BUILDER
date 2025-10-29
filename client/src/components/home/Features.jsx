import React from 'react';
import {Zap} from 'lucide-react';
import Title from './Title';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(0);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 stroke-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
          <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
        </svg>
      ),
      title: "AI-Powered Content",
      description: "Get intelligent suggestions and content generation for your resume sections.",
      color: "violet",
      bgColor: "bg-violet-100",
      borderColor: "border-violet-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 stroke-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </svg>
      ),
      title: "Easy Customization",
      description: "Customize templates with drag-and-drop interface and real-time preview.",
      color: "green",
      bgColor: "bg-green-100",
      borderColor: "border-green-300"
    },
    {
      icon: (
        <svg className="w-6 h-6 stroke-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 15V3" />
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <path d="m7 10 5 5 5-5" />
        </svg>
      ),
      title: "Export Options",
      description: "Download your resume in multiple formats including PDF, DOCX, and more.",
      color: "orange",
      bgColor: "bg-orange-100",
      borderColor: "border-orange-300"
    }
  ];

  return (
    <div id="features" className="flex flex-col items-center my-20 scroll-mt-12 px-4">
      <Badge icon={Zap} text="Simple Process" color="green" />
      <Title title="Build your resume" description="Our streamlined process helps you create a professional resume in minutes with intelligent AI-powered tools and features." />

      <div className="flex flex-col md:flex-row items-center mt-10 max-w-6xl">
        <img className="max-w-2xl w-full md:-ml-16" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/group-image-1.png" alt="Features showcase" />
        
        <div className="px-4 md:px-0 space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
              className="flex items-center justify-center gap-6 max-w-md group cursor-pointer"
            >
              <div className={`p-6 border transition-all rounded-xl ${hoveredIndex === index || (hoveredIndex === 0 && index === 0) ? `${feature.bgColor} ${feature.borderColor}` : 'border-transparent hover:bg-slate-50'}`}>
                <div className="flex gap-4">
                  {feature.icon}
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-700">{feature.title}</h3>
                    <p className="text-sm text-slate-600 max-w-xs">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features
