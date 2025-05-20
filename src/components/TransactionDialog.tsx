
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface TransactionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  transaction?: any;
}

export const TransactionDialog: React.FC<TransactionDialogProps> = ({ 
  open, 
  onOpenChange,
  transaction 
}) => {
  const isEditing = !!transaction;
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here we would normally send data to Supabase
    toast({
      title: isEditing ? "Transaction updated" : "Transaction created",
      description: "Your transaction has been successfully saved.",
    });
    
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Transaction" : "Add Transaction"}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Update the details of your transaction."
              : "Enter the details of your transaction."
            }
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="expense">
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="expense">
              <div className="flex items-center">
                <ArrowDownRight className="mr-2 h-4 w-4" />
                Expense
              </div>
            </TabsTrigger>
            <TabsTrigger value="income">
              <div className="flex items-center">
                <ArrowUpRight className="mr-2 h-4 w-4" />
                Income
              </div>
            </TabsTrigger>
          </TabsList>
          
          <form onSubmit={handleSubmit}>
            <TabsContent value="expense" className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" defaultValue={transaction?.description || ''} placeholder="e.g., Grocery shopping" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Amount ($)</Label>
                <Input id="amount" type="number" step="0.01" min="0" defaultValue={transaction?.amount || ''} placeholder="0.00" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={transaction?.category || ''}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food & Dining</SelectItem>
                    <SelectItem value="transport">Transportation</SelectItem>
                    <SelectItem value="utilities">Bills & Utilities</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="housing">Housing</SelectItem>
                    <SelectItem value="shopping">Shopping</SelectItem>
                    <SelectItem value="personal">Personal Care</SelectItem>
                    <SelectItem value="health">Health & Medical</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="account">Account</Label>
                <Select defaultValue={transaction?.account || ''}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Main Checking</SelectItem>
                    <SelectItem value="savings">Savings Account</SelectItem>
                    <SelectItem value="credit">Credit Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Input id="notes" defaultValue={transaction?.notes || ''} placeholder="Add any additional details" />
              </div>
            </TabsContent>
            
            <TabsContent value="income" className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" defaultValue={transaction?.description || ''} placeholder="e.g., Salary payment" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Amount ($)</Label>
                <Input id="amount" type="number" step="0.01" min="0" defaultValue={transaction?.amount || ''} placeholder="0.00" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={transaction?.category || ''}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="salary">Salary & Wages</SelectItem>
                    <SelectItem value="freelance">Freelance Income</SelectItem>
                    <SelectItem value="business">Business Income</SelectItem>
                    <SelectItem value="investments">Investment Income</SelectItem>
                    <SelectItem value="gifts">Gifts</SelectItem>
                    <SelectItem value="refunds">Refunds</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="account">Account</Label>
                <Select defaultValue={transaction?.account || ''}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checking">Main Checking</SelectItem>
                    <SelectItem value="savings">Savings Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Input id="notes" defaultValue={transaction?.notes || ''} placeholder="Add any additional details" />
              </div>
            </TabsContent>
            
            <DialogFooter className="mt-6">
              <Button variant="outline" type="button" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit">
                {isEditing ? "Update Transaction" : "Save Transaction"}
              </Button>
            </DialogFooter>
          </form>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};
