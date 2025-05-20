
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and application settings.</p>
        </div>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
      
      <Tabs defaultValue="profile">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="(555) 123-4567" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>Manage your account security settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account.
                    </p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
              </div>
              
              <Button variant="outline" className="mt-2">Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Display Settings</CardTitle>
              <CardDescription>Customize how the application appears.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD - US Dollar</SelectItem>
                    <SelectItem value="eur">EUR - Euro</SelectItem>
                    <SelectItem value="gbp">GBP - British Pound</SelectItem>
                    <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                    <SelectItem value="aud">AUD - Australian Dollar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Use dark theme for the interface.
                    </p>
                  </div>
                  <Switch defaultChecked={false} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Compact View</Label>
                    <p className="text-sm text-muted-foreground">
                      Show more data with less spacing.
                    </p>
                  </div>
                  <Switch defaultChecked={false} />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Budget Settings</CardTitle>
              <CardDescription>Configure how budgets and goals work.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="budget-period">Budget Period</Label>
                <Select defaultValue="monthly">
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget-start">Budget Start Day</Label>
                <Select defaultValue="1">
                  <SelectTrigger>
                    <SelectValue placeholder="Select start day" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1st of month</SelectItem>
                    <SelectItem value="15">15th of month</SelectItem>
                    <SelectItem value="custom">Custom date</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Rollover Unspent Budget</Label>
                    <p className="text-sm text-muted-foreground">
                      Carry remaining budget amounts to the next period.
                    </p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control when and how you get notified.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email.
                    </p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
                
                <div className="pl-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Weekly Summary</Label>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Monthly Report</Label>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Low Balance Alerts</Label>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Budget Threshold Alerts</Label>
                    <Switch defaultChecked={true} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications in the app.
                    </p>
                  </div>
                  <Switch defaultChecked={true} />
                </div>
                
                <div className="pl-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Large Transactions</Label>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Upcoming Bills</Label>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Budget Alerts</Label>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Account Updates</Label>
                    <Switch defaultChecked={false} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Manage your connected financial accounts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">B</div>
                    </div>
                    <div>
                      <div className="font-medium">Bank of America</div>
                      <div className="text-sm text-muted-foreground">Connected on May 10, 2025</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">C</div>
                    </div>
                    <div>
                      <div className="font-medium">Chase Bank</div>
                      <div className="text-sm text-muted-foreground">Connected on May 12, 2025</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">A</div>
                    </div>
                    <div>
                      <div className="font-medium">American Express</div>
                      <div className="text-sm text-muted-foreground">Connected on May 14, 2025</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                
                <Button className="w-full">
                  Connect New Account
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>API Connections</CardTitle>
              <CardDescription>Manage third-party integrations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div className="space-y-0.5">
                    <div className="font-medium">Supabase Integration</div>
                    <div className="text-sm text-muted-foreground">Connect to your Supabase backend</div>
                  </div>
                  <Button>Connect</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div className="space-y-0.5">
                    <div className="font-medium">Export to Spreadsheets</div>
                    <div className="text-sm text-muted-foreground">Sync data with Google Sheets or Excel</div>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-md border">
                  <div className="space-y-0.5">
                    <div className="font-medium">Tax Software</div>
                    <div className="text-sm text-muted-foreground">Connect with tax preparation services</div>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
