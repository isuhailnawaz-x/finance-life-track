
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { PieChart, BarChart, LineChart } from "recharts";
import { Printer, Download, Mail, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { mockCategorySummary, mockMonthlyComparison } from "@/lib/mockData";

const MonthlyReport = () => {
  const currentDate = new Date().toLocaleDateString('default', { month: 'long', year: 'numeric' });
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Monthly Report</h1>
          <p className="text-muted-foreground">Your financial summary for {currentDate}.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" /> Print
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Email Report
          </Button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 justify-end">
        <Select defaultValue="may">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="may">May 2025</SelectItem>
            <SelectItem value="apr">April 2025</SelectItem>
            <SelectItem value="mar">March 2025</SelectItem>
            <SelectItem value="feb">February 2025</SelectItem>
            <SelectItem value="jan">January 2025</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Monthly Summary</CardTitle>
          <CardDescription>Overview of your financial activity in May 2025.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Total Income</div>
              <div className="text-2xl font-bold text-green-600">$4,300.00</div>
              <div className="text-sm text-green-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +5% from last month
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Total Expenses</div>
              <div className="text-2xl font-bold text-red-600">$3,500.00</div>
              <div className="text-sm text-red-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +1.5% from last month
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Net Savings</div>
              <div className="text-2xl font-bold text-finance-primary">$800.00</div>
              <div className="text-sm text-green-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +21% from last month
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Saving Rate</div>
              <div className="text-2xl font-bold text-finance-accent">18.6%</div>
              <div className="text-sm text-green-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +2.5% from last month
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Income Sources</CardTitle>
            <CardDescription>Breakdown of your income for May 2025.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center">
              <PieChart width={200} height={200}>
                {/* Chart components would go here */}
              </PieChart>
            </div>
            <div className="space-y-4 mt-4">
              {[
                { source: 'Primary Salary', amount: 3200, percent: 74.4 },
                { source: 'Freelance Work', amount: 650, percent: 15.1 },
                { source: 'Investment Dividends', amount: 280, percent: 6.5 },
                { source: 'Other Income', amount: 170, percent: 4.0 }
              ].map((income, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{income.source}</div>
                    <div className="text-sm text-muted-foreground">{income.percent}% of total</div>
                  </div>
                  <div className="text-right font-medium">
                    ${income.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Expense Categories</CardTitle>
            <CardDescription>How you spent your money in May 2025.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center">
              <PieChart width={200} height={200}>
                {/* Chart components would go here */}
              </PieChart>
            </div>
            <div className="space-y-4 mt-4">
              {mockCategorySummary.map((category, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{category.category}</div>
                    <div className="text-sm text-muted-foreground">{category.percent}% of expenses</div>
                  </div>
                  <div className="text-right font-medium">
                    ${category.amount.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Year-to-Date Progress</CardTitle>
          <CardDescription>Your financial trend throughout 2025.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <LineChart width={800} height={300}>
              {/* Chart components would go here */}
            </LineChart>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">YTD Income</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$21,350.00</div>
                <div className="text-sm text-green-600 flex items-center">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +4.2% from 2024
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">YTD Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$16,700.00</div>
                <div className="text-sm text-red-600 flex items-center">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +2.8% from 2024
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">YTD Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,650.00</div>
                <div className="text-sm text-green-600 flex items-center">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  +9.5% from 2024
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Financial Insights</CardTitle>
          <CardDescription>Key observations and recommendations based on your data.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">Positive Trends</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <p>Your saving rate has improved to 18.6%, which is above the recommended 15%.</p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <p>You've diversified your income sources, with freelance work now contributing 15% of total income.</p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                  <p>Food expenses have decreased by 5% compared to last month, showing good budget discipline.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg">Areas for Improvement</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-red-500 mt-1.5 mr-2"></div>
                  <p>Housing expenses at 40% of total spending are above the recommended 30%.</p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-red-500 mt-1.5 mr-2"></div>
                  <p>Transportation costs exceeded your budget by 13% this month.</p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-red-500 mt-1.5 mr-2"></div>
                  <p>Entertainment spending is approaching your monthly limit (96% used).</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg">Recommendations</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                  <p>Consider reviewing your transportation expenses to identify cost-saving opportunities.</p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                  <p>Your emergency fund currently covers 3 months of expenses. Aim to increase this to 6 months.</p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-4 min-h-4 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                  <p>Based on your income growth, consider increasing your retirement contributions.</p>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonthlyReport;
