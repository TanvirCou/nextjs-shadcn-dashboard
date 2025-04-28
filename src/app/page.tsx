import CardList from "@/components/card/CardList";
import AppAreaChart from "@/components/charts/AppAreaChart";
import AppPieChart from "@/components/charts/AppPieChart";
import AppBarChart from "@/components/charts/BarChart";
import TodoList from "@/components/todo-list/TodoList";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2">
      <div className="bg-primary-foreground p-4 rounded-md xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md">
        <CardList title="latestTransactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md">
        <CardList title="popularContent" />
      </div>
    </div>
  );
}
