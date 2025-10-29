import React from 'react'

const Badge = ({ icon: Icon, text, color = "blue" }) => {
  const colorClasses = {
    blue: "text-blue-800 bg-blue-400/10 border-blue-200",
    green: "text-green-800 bg-green-400/10 border-green-200"
  };

  return (
    <div className={`flex items-center gap-2 text-sm ${colorClasses[color]} border rounded-full px-4 py-1`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{text}</span>
    </div>
  );
};

export default Badge

