
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CreditCard, Wallet, Plus, PiggyBank, BarChart3, RefreshCw } from "lucide-react";

const Accounts = () => {
  const accounts = [
    {
      id: '1',
      name: 'Main Checking',
      type: 'checking',
      institution: 'Bank of America',
      balance: 5240.12,
      change: 240.50,
      positive: true
    },
    {
      id: '2',
      name: 'Savings Account',
      type: 'savings',
      institution: 'Bank of America',
      balance: 7340.13,
      change: 35.22,
      positive: true
    },
    {
      id: '3',
      name: 'Credit Card',
      type: 'credit',
      institution: 'American Express',
      balance: 1250.00,
      limit: 5000,
      dueDate: '2025-06-05',
      positive: false
    },
    {
      id: '4',
      name: 'Investment Account',
      type: 'investment',
      institution: 'Vanguard',
      balance: 24580.75,
      change: 305.25,
      changePercent: 1.25,
      positive: true
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Accounts</h1>
          <p className="text-muted-foreground">Manage your financial accounts and track balances.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh Balances
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Account
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Account Summary</CardTitle>
          <CardDescription>Your total assets and liabilities.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-sm font-medium text-muted-foreground">Total Assets</div>
              <div className="text-3xl font-bold mt-1">$37,160.00</div>
              <div className="text-xs text-green-600 mt-1">+$580.97 (1.6%) this month</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-sm font-medium text-muted-foreground">Total Liabilities</div>
              <div className="text-3xl font-bold mt-1">$1,250.00</div>
              <div className="text-xs text-red-600 mt-1">+$250.00 (25%) this month</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="text-sm font-medium text-muted-foreground">Net Worth</div>
              <div className="text-3xl font-bold mt-1">$35,910.00</div>
              <div className="text-xs text-green-600 mt-1">+$330.97 (0.9%) this month</div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <Card key={account.id} className="relative overflow-hidden">
            <div className={`absolute top-0 left-0 right-0 h-1 ${
              account.positive || account.type === 'credit' ? 'bg-finance-primary' : 
              account.type === 'savings' ? 'bg-finance-secondary' : 
              account.type === 'investment' ? 'bg-finance-accent' : 'bg-finance-info'
            }`}></div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  {account.type === 'checking' && <Wallet className="mr-2 h-5 w-5 text-finance-primary" />}
                  {account.type === 'savings' && <PiggyBank className="mr-2 h-5 w-5 text-finance-secondary" />}
                  {account.type === 'credit' && <CreditCard className="mr-2 h-5 w-5 text-finance-danger" />}
                  {account.type === 'investment' && <BarChart3 className="mr-2 h-5 w-5 text-finance-accent" />}
                  {account.name}
                </CardTitle>
                <Button variant="ghost" size="sm">View Details</Button>
              </div>
              <CardDescription>{account.institution}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  {account.type === 'credit' ? (
                    <>
                      <div className="text-sm font-medium text-muted-foreground">Current Balance</div>
                      <div className="text-2xl font-bold text-red-600">-${account.balance.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground mt-1">Due on {new Date(account.dueDate).toLocaleDateString()}</div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Credit Utilization</span>
                          <span>{Math.round((account.balance / account.limit) * 100)}%</span>
                        </div>
                        <Progress value={Math.round((account.balance / account.limit) * 100)} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-sm font-medium text-muted-foreground">Current Balance</div>
                      <div className="text-2xl font-bold">${account.balance.toFixed(2)}</div>
                      <div className={`text-xs ${account.positive ? 'text-green-600' : 'text-red-600'} mt-1`}>
                        {account.positive ? '+' : '-'}${Math.abs(account.change).toFixed(2)}
                        {account.changePercent && ` (${account.changePercent}%)`} today
                      </div>
                    </>
                  )}
                </div>
                
                {account.type === 'investment' && (
                  <div className="bg-muted rounded-md p-3">
                    <div className="text-sm font-medium">Portfolio Allocation</div>
                    <div className="grid grid-cols-4 gap-1 mt-2">
                      <div className="h-2 bg-blue-400 rounded-l"></div>
                      <div className="h-2 bg-green-400"></div>
                      <div className="h-2 bg-purple-400"></div>
                      <div className="h-2 bg-yellow-400 rounded-r"></div>
                    </div>
                    <div className="flex justify-between text-xs mt-2 text-muted-foreground">
                      <span>Stocks: 55%</span>
                      <span>Bonds: 25%</span>
                      <span>Cash: 15%</span>
                      <span>Other: 5%</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex gap-2 w-full">
                <Button variant="outline" size="sm" className="flex-1">
                  {account.type === 'credit' ? 'Make Payment' : 'Transfer'}
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  {account.type === 'investment' ? 'Trade' : 'Transactions'}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card>
        <div className="p-8 text-center">
          <Plus className="h-8 w-8 mx-auto text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Connect a new account</h3>
          <p className="mt-2 text-muted-foreground">
            Add your bank accounts, credit cards, investments, and other financial accounts.
          </p>
          <Button className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Add Account
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Accounts;
