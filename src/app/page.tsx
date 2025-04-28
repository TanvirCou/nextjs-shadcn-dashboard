import AppAreaChart from "@/components/charts/AppAreaChart";
import AppPieChart from "@/components/charts/AppPieChart";
import AppBarChart from "@/components/charts/BarChart";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2">
      <div className="bg-primary-foreground p-4 rounded-md xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md"></div>
      <div className="bg-primary-foreground p-4 rounded-md">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md"></div>
      <div className="bg-primary-foreground p-4 rounded-md xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-md"></div>
    </div>
  );
}
