
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, LineChart, BarChart } from "recharts";
import { ArrowUpRight, ArrowDownRight, Wallet, CreditCard, Plus, Download } from "lucide-react";
import { mockTransactions, mockBalanceData, mockSpendingData } from "@/lib/mockData";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Your financial overview and recent activity.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Transaction
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">$12,580.25</div>
              <div className="text-sm font-medium text-green-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +2.5%
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Across all accounts
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">$2,156.40</div>
              <div className="text-sm font-medium text-red-600 flex items-center">
                <ArrowDownRight className="mr-1 h-4 w-4" />
                +12.3%
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Compared to last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">$840.00</div>
              <div className="text-sm font-medium text-green-600 flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                +4.3%
              </div>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Towards your goals
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Spending by Category</CardTitle>
                <CardDescription>Your top spending categories this month.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full">
                  <PieChart width={400} height={300} data={mockSpendingData}>
                    {/* Chart components would go here */}
                  </PieChart>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Balance History</CardTitle>
                <CardDescription>Your account balance over the last 6 months.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[300px] w-full">
                  <LineChart width={400} height={300} data={mockBalanceData}>
                    {/* Chart components would go here */}
                  </LineChart>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your most recent financial activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${
                        transaction.type === 'expense' ? 'bg-red-100' : 'bg-green-100'
                      }`}>
                        {transaction.type === 'expense' ? (
                          <ArrowDownRight className="h-5 w-5 text-red-600" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-green-600" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-muted-foreground">{transaction.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${
                        transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
                      </div>
                      <div className="text-xs text-muted-foreground">{transaction.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="w-full">View All Transactions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accounts" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Accounts</CardTitle>
              <CardDescription>Overview of all linked financial accounts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-blue-100">
                      <CreditCard className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">Main Checking</div>
                      <div className="text-sm text-muted-foreground">Bank of America</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$5,240.12</div>
                    <div className="text-xs text-green-600">+$240.50 today</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-purple-100">
                      <Wallet className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium">Savings Account</div>
                      <div className="text-sm text-muted-foreground">Bank of America</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$7,340.13</div>
                    <div className="text-xs text-green-600">+$35.22 today</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md hover:bg-muted">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-red-100">
                      <CreditCard className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-medium">Credit Card</div>
                      <div className="text-sm text-muted-foreground">American Express</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-red-600">-$1,250.00</div>
                    <div className="text-xs text-red-600">Due in 15 days</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" /> Link New Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
