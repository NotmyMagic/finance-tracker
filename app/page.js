import { currencyFormatter } from "@/Lib/utils";
import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Entertainment",
    color: "#000",
    amount: "500",
  },
  {
    id: 2,
    title: "transportaion",
    color: "#050",
    amount: "100",
  },
  {
    id: 3,
    title: "Magic",
    color: "#303",
    amount: "600",
  },
  {
    id: 4,
    title: "Hobby's",
    color: "#629",
    amount: "400",
  },
  {
    id: 5,
    title: "Holiday's",
    color: "#558",
    amount: "800",
  },
];

export default function Home() {
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <section className="py-3">
        <small className="text-gray-400 text-md">My balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(10000)}</h2>
      </section>

      <section className="flex items-center gap-2 py-3">
        <button className="btn btn-primary">+ Expenses</button>
        <button className="btn btn-primary-outline">+ Income</button>
      </section>

      {/* expenses */}
      <section className="py-6">
        <h3 className="text-2xl">My Expenses</h3>
        <div className="flex flex-col gap-4 mt-6">
          {DUMMY_DATA.map((expense) => {
            return (
              <ExpenseCategoryItem
                color={expense.color}
                title={expense.title}
                amount={expense.amount}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
