
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
import { Download, Share2 } from "lucide-react";
import { mockCategorySummary, mockMonthlyComparison } from "@/lib/mockData";

const SpendingAnalysis = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Spending Analysis</h1>
          <p className="text-muted-foreground">Analyze and understand your spending patterns.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" /> Share Report
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle>Spending Overview</CardTitle>
            <div className="flex gap-2">
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
          </div>
          <CardDescription>Total spent in May 2025: $2,940.00</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="categories">
            <TabsList>
              <TabsTrigger value="categories">By Category</TabsTrigger>
              <TabsTrigger value="monthly">Monthly Trend</TabsTrigger>
              <TabsTrigger value="merchants">Top Merchants</TabsTrigger>
            </TabsList>
            
            <TabsContent value="categories" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="h-[300px] flex items-center justify-center">
                  <PieChart width={250} height={250} data={mockCategorySummary}>
                    {/* Chart components would go here */}
                  </PieChart>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Category Breakdown</h3>
                  <div className="space-y-4">
                    {mockCategorySummary.map((category, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{category.category}</div>
                          <div className="text-sm text-muted-foreground">{category.percent}% of total</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${category.amount.toFixed(2)}</div>
                          <Button variant="outline" size="sm" className="text-xs mt-1">View Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Insights</CardTitle>
                  <CardDescription>Analysis of your spending patterns.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="min-w-4 min-h-4 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                      <p>Housing costs make up 40% of your monthly expenses, which is above the recommended 30%.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-4 min-h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                      <p>Your food spending decreased by 5% compared to last month.</p>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-4 min-h-4 rounded-full bg-amber-500 mt-1.5 mr-2"></div>
                      <p>Entertainment expenses are within your budget goals.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="monthly" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Income vs. Expenses</CardTitle>
                    <CardDescription>5-month comparison of your financial flow.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full">
                      <BarChart width={800} height={300} data={mockMonthlyComparison}>
                        {/* Chart components would go here */}
                      </BarChart>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Spending Trend</CardTitle>
                    <CardDescription>How your spending has evolved.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockMonthlyComparison.map((month, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{month.month} 2025</div>
                            <div className="text-sm text-muted-foreground">
                              {month.income > month.expenses ? 'Net Saving' : 'Net Deficit'}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">${month.expenses.toFixed(2)}</div>
                            <div className={`text-sm ${month.income > month.expenses ? 'text-green-600' : 'text-red-600'}`}>
                              {month.income > month.expenses ? '+' : '-'}$
                              {Math.abs(month.income - month.expenses).toFixed(2)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Key Observations</CardTitle>
                    <CardDescription>Trends in your financial behavior.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="min-w-4 min-h-4 rounded-full bg-blue-500 mt-1.5 mr-2"></div>
                        <p>Your monthly income has increased by an average of 2.5% over the past 5 months.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-4 min-h-4 rounded-full bg-green-500 mt-1.5 mr-2"></div>
                        <p>Your savings rate has improved from 5% to 8% since January.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="min-w-4 min-h-4 rounded-full bg-amber-500 mt-1.5 mr-2"></div>
                        <p>Expenses have grown slightly in April and May due to seasonal factors.</p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="merchants" className="mt-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Merchants</CardTitle>
                    <CardDescription>Places where you spend the most.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { name: 'Amazon', amount: 324.56, count: 5, category: 'Shopping' },
                        { name: 'Costco', amount: 245.78, count: 2, category: 'Food & Dining' },
                        { name: 'Uber', amount: 189.45, count: 8, category: 'Transportation' },
                        { name: 'Netflix', amount: 45.97, count: 3, category: 'Entertainment' },
                        { name: 'Starbucks', amount: 37.85, count: 9, category: 'Food & Dining' },
                      ].map((merchant, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{merchant.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {merchant.count} transactions · {merchant.category}
                            </div>
                          </div>
                          <div className="text-right font-medium">
                            ${merchant.amount.toFixed(2)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Spending Frequency</CardTitle>
                      <CardDescription>How often you spend at different places.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px]">
                        <BarChart width={300} height={200}>
                          {/* Chart would go here */}
                        </BarChart>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Transaction Size</CardTitle>
                      <CardDescription>Average spending per merchant.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px]">
                        <BarChart width={300} height={200}>
                          {/* Chart would go here */}
                        </BarChart>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SpendingAnalysis;
