import React from "react";
import "./SubNav.scss";

const items = [
  { icon: "📱", label: "iPhone 16 Pro" },
  { icon: "📱", label: "iPhone 16" },
  { icon: "📱", label: "iPhone 16e" },
  { icon: "📱", label: "iPhone 15" },
  { icon: "🆚", label: "Compare" },
  { icon: "🎧", label: "AirPods" },
  { icon: "🎯", label: "AirTag" },
  { icon: "📦", label: "Accessories" },
  { icon: "💳", label: "Apple Card" },
  { icon: "📲", label: "iOS 18" },
  { icon: "🛍️", label: "Shop iPhone" },
];

const SubNav = () => {
  return (
    <div className="sub-nav">
      {items.map((item, index) => (
        <div className="sub-item" key={index}>
          <div className="icon">{item.icon}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SubNav;
