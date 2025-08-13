import React from "react";
import { LuUtensils, LuTrendingUp, LuTrendingDown } from "react-icons/lu";

const DashboardTransactionCard = ({ title, icon, date, amount, type }) => {
  const getAmountStyles = () =>
    type === "income" ? "text-green-600" : "text-red-600";

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
      {/* Left side - Icon and Details */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center text-lg text-gray-600 bg-gray-100 rounded-full">
          {icon ? (
            <img src={icon} alt={title} className="w-5 h-5" />
          ) : (
            <LuUtensils />
          )}
        </div>

        {/* Transaction Details */}
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>

      {/* Right side - Amount */}
      <div className="flex items-center gap-2">
        <span className={`text-sm font-semibold ${getAmountStyles()}`}>
          {type === "income" ? "+" : "-"} ${amount}
        </span>
        {type === "income" ? (
          <LuTrendingUp size={14} className="text-green-500" />
        ) : (
          <LuTrendingDown size={14} className="text-red-500" />
        )}
      </div>
    </div>
  );
};

export default DashboardTransactionCard;
