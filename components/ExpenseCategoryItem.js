import { useState } from "react";

import { currencyFormatter } from "@/Lib/utils";

import ViewExpenseModal from "./modals/ViewExpenseModal";

function ExpenseCategoryItem({ expense }) {
  const [showViewExpenseModal, setViewExpenseModal] = useState(false);
  return (
    <>
      <ViewExpenseModal
        show={showViewExpenseModal}
        onClose={setViewExpenseModal}
        expense={expense}
      />
      <button
        onClick={() => {
          setViewExpenseModal(true);
        }}
      >
        <div className="flex items-center justify-between px-4 py-4 bg-slate-700 rounded-3xl">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full"
              style={{ backgroundColor: expense.color }}
            />
            <h4 className="capitalize">{expense.title}</h4>
          </div>
          <p>{currencyFormatter(expense.total)}</p>
        </div>
      </button>
    </>
  );
}

export default ExpenseCategoryItem;
