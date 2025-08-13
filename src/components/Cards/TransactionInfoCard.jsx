import React from "react";
import {
  LuUtensils,
  LuTrendingUp,
  LuTrendingDown,
  LuTrash2,
} from "react-icons/lu";

const TransactionInfoCard = ({
  title,
  icon,
  date,
  amount,
  type,
  hideDeleteBtn,
  onDelete,
}) => {
  const getAmountStyles = () =>
    type === "income" ? "text-green-600" : "text-red-600";

  return (
    <tr className="group hover:bg-gray-50 transition-colors border-b border-gray-200">
      {/* Icon Column */}
      <td className="py-3 px-4">
        <div className="w-10 h-10 flex items-center justify-center text-lg text-gray-600 bg-gray-100 rounded-full">
          {icon ? (
            <img src={icon} alt={title} className="w-5 h-5" />
          ) : (
            <LuUtensils />
          )}
        </div>
      </td>

      {/* Category Column */}
      <td className="py-3 px-4">
        <p className="text-sm font-medium text-gray-900 truncate max-w-32">
          {title}
        </p>
      </td>

      {/* Date Column */}
      <td className="py-3 px-4">
        <p className="text-sm text-gray-600 whitespace-nowrap">{date}</p>
      </td>

      {/* Amount Column */}
      <td className="py-3 px-4 text-right">
        <div
          className={`flex items-center justify-end gap-1 font-medium ${getAmountStyles()}`}
        >
          <span className="text-sm whitespace-nowrap">
            {type === "income" ? "+" : "-"} ${amount}
          </span>
          {type === "income" ? (
            <LuTrendingUp size={14} />
          ) : (
            <LuTrendingDown size={14} />
          )}
        </div>
      </td>

      {/* Actions Column */}
      <td className="py-3 px-4 text-center">
        {!hideDeleteBtn && (
          <button
            className="text-gray-400 hover:text-red-500 cursor-pointer p-1 rounded transition-colors"
            onClick={onDelete}
            title="Delete"
          >
            <LuTrash2 size={16} />
          </button>
        )}
      </td>
    </tr>
  );
};

export default TransactionInfoCard;
