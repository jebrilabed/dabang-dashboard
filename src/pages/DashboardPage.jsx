import React from 'react'
import TodaySales from '../components/widgets/TodaySales'
import VisitorInsights from '../components/charts/VisitorInsights'
import TotalRevenue from '../components/charts/TotalRevenue'
import CustomerSatisfaction from '../components/charts/CustomerSatisfaction'
import TargetVsReality from '../components/charts/TargetVsReality'
import TopProducts from '../components/tables/TopProducts'
import SalesByCountry from '../components/charts/SalesByCountry'
import VolumeVsService from '../components/charts/VolumeVsService'

const DashboardPage = () => {
  return (
    <div className="p-4 md:p-6 space-y-5">

      {/* Row 1: Today's Sales + Visitor Insights */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2">
          <TodaySales />
        </div>
        <div className="xl:col-span-1">
          <VisitorInsights />
        </div>
      </div>

      {/* Row 2: Total Revenue + Customer Satisfaction + Target vs Reality */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="md:col-span-2 xl:col-span-1">
          <TotalRevenue />
        </div>
        <div>
          <CustomerSatisfaction />
        </div>
        <div>
          <TargetVsReality />
        </div>
      </div>

      {/* Row 3: Top Products + Sales by Country + Volume vs Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="md:col-span-2 xl:col-span-1">
          <TopProducts />
        </div>
        <div>
          <SalesByCountry />
        </div>
        <div>
          <VolumeVsService />
        </div>
      </div>

    </div>
  )
}

export default DashboardPage
