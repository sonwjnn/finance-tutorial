"use client";

import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";

type DashboardPageProps = {};

const DashboardPage = ({}: DashboardPageProps) => {
  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <DataGrid />
      <DataCharts />
    </div>
  );
};

export default DashboardPage;
