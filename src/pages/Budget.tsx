
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Settings, 
  ArrowUpRight, 
  ArrowDownRight,
  AlertCircle
} from "lucide-react";

const Budget = () => {
  const currentMonth = new Date().toLocaleDateString('default', { month: 'long', year: 'numeric' });
  
  const budgetSummary = {
    totalBudget: 3000,
    totalSpent: 2156.40,
    leftToSpend: 843.60,
    daysLeft: 13
  };
  
  const categories = [
    {
      id: '1',
      name: 'Food & Dining',
      budgeted: 600,
      spent: 560,
      progress: 93,
      icon: '🍕',
      status: 'on-track' // on-track, warning, exceeded
    },
    {
      id: '2',
      name: 'Housing',
      budgeted: 1200,
      spent: 1200,
      progress: 100,
      icon: '🏠',
      status: 'on-track'
    },
    {
      id: '3',
      name: 'Transportation',
      budgeted: 300,
      spent: 340,
      progress: 113,
      icon: '🚗',
      status: 'exceeded'
    },
    {
      id: '4',
      name: 'Bills & Utilities',
      budgeted: 350,
      spent: 280,
      progress: 80,
      icon: '🔌',
      status: 'on-track'
    },
    {
      id: '5',
      name: 'Entertainment',
      budgeted: 250,
      spent: 240,
      progress: 96,
      icon: '🎬',
      status: 'warning'
    },
    {
      id: '6',
      name: 'Shopping',
      budgeted: 300,
      spent: 182,
      progress: 61,
      icon: '🛍️',
      status: 'on-track'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Budget</h1>
          <p className="text-muted-foreground">Manage your monthly spending plan.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" /> Budget Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Category
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <span>Budget for {currentMonth}</span>
          </CardTitle>
          <CardDescription>Your spending progress for this month.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Budget</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${budgetSummary.totalBudget.toFixed(2)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Spent So Far</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${budgetSummary.totalSpent.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {Math.round(budgetSummary.totalSpent / budgetSummary.totalBudget * 100)}% of total budget
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Left to Spend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">${budgetSummary.leftToSpend.toFixed(2)}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    ${(budgetSummary.leftToSpend / budgetSummary.daysLeft).toFixed(2)} per day for {budgetSummary.daysLeft} days
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <div>Progress</div>
                <div className="font-medium">{Math.round(budgetSummary.totalSpent / budgetSummary.totalBudget * 100)}%</div>
              </div>
              <Progress value={Math.round(budgetSummary.totalSpent / budgetSummary.totalBudget * 100)} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Budget Categories</CardTitle>
          <CardDescription>Track spending across different categories.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{category.icon}</div>
                    <div>
                      <div className="font-medium">{category.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ${category.spent.toFixed(2)} of ${category.budgeted.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">
                      ${(category.budgeted - category.spent).toFixed(2)} left
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {category.progress}% used
                    </div>
                  </div>
                </div>
                
                <div className="mt-3">
                  <Progress 
                    value={category.progress} 
                    className={`h-2 ${
                      category.status === 'exceeded' ? 'bg-red-200' : 
                      category.status === 'warning' ? 'bg-amber-200' : 
                      'bg-gray-200'
                    }`}
                    indicatorClassName={
                      category.status === 'exceeded' ? 'bg-red-600' : 
                      category.status === 'warning' ? 'bg-amber-500' : 
                      'bg-finance-primary'
                    }
                  />
                </div>
                
                {category.status === 'exceeded' && (
                  <div className="mt-2 text-xs flex items-center text-red-600">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>Exceeded by ${(category.spent - category.budgeted).toFixed(2)}</span>
                  </div>
                )}
                
                {category.status === 'warning' && (
                  <div className="mt-2 text-xs flex items-center text-amber-600">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    <span>Almost at budget limit</span>
                  </div>
                )}
                
                <div className="mt-3 flex gap-2">
                  <Button variant="outline" size="sm" className="text-xs">View Transactions</Button>
                  <Button variant="outline" size="sm" className="text-xs">Adjust Budget</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Budget;
