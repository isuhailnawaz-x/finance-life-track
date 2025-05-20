
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  PieChart,
  BarChart,
  Wallet,
  CreditCard,
  DollarSign,
  Settings,
  FileChartLine,
  LucideIcon,
  Home
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, to }) => {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink to={to} className={({ isActive }) => 
          isActive ? "text-finance-primary font-medium" : "text-gray-600 hover:text-finance-primary"
        }>
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="px-6 py-3">
        <div className="flex items-center gap-2">
          <DollarSign className="h-6 w-6 text-finance-primary" />
          <span className="font-bold text-xl">FinTrack</span>
        </div>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavItem icon={Home} label="Dashboard" to="/" />
              <NavItem icon={CreditCard} label="Transactions" to="/transactions" />
              <NavItem icon={Wallet} label="Accounts" to="/accounts" />
              <NavItem icon={PieChart} label="Budget" to="/budget" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Reports</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavItem icon={BarChart} label="Spending Analysis" to="/reports/spending" />
              <NavItem icon={FileChartLine} label="Monthly Report" to="/reports/monthly" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <NavItem icon={Settings} label="Settings" to="/settings" />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
