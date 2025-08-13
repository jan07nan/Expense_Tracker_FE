import React, { useState } from "react";
import TransactionInfoCard from "../Cards/TransactionInfoCard";
import moment from "moment";

const IncomeList = ({ transactions, onDelete }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const getFilteredTransactions = () => {
    if (!fromDate && !toDate) return transactions;

    return (
      transactions?.filter((income) => {
        const incomeDate = moment(income.date);
        let isValid = true;

        if (fromDate) {
          isValid =
            isValid && incomeDate.isSameOrAfter(moment(fromDate), "day");
        }

        if (toDate) {
          isValid = isValid && incomeDate.isSameOrBefore(moment(toDate), "day");
        }

        return isValid;
      }) || []
    );
  };

  const clearFilters = () => {
    setFromDate("");
    setToDate("");
  };

  const filteredTransactions = getFilteredTransactions();

  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h5 className="text-lg">All Income Sources</h5>

        <div className="flex items-center gap-2">
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="w-32 px-2 py-1.5 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="From Date"
          />
          <span className="text-gray-500 text-sm">to</span>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="w-32 px-2 py-1.5 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="To Date"
          />
          {(fromDate || toDate) && (
            <button
              onClick={clearFilters}
              className="px-2 py-1.5 text-xs text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto mt-6">
        <table className="w-full min-w-[600px]">
          {/* Table Header */}
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Icon
                </p>
              </th>
              <th className="py-3 px-4 text-left">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Source
                </p>
              </th>
              <th className="py-3 px-4 text-left">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </p>
              </th>
              <th className="py-3 px-4 text-right">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Amount
                </p>
              </th>
              <th className="py-3 px-4 text-center">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Delete
                </p>
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {filteredTransactions?.map((income) => (
              <TransactionInfoCard
                key={income._id}
                title={income.source}
                icon={income.icon}
                date={moment(income.date).format("Do MMM YYYY")}
                amount={income.amount}
                type="income"
                onDelete={() => onDelete(income._id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeList;
