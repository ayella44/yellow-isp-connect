import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  Clock,
  AlertCircle,
  Pause
} from "lucide-react";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  connectionType: "PPPoE" | "Hotspot";
  plan: string;
  status: "active" | "inactive" | "pending" | "blocked";
  monthlyFee: string;
  lastPayment: string;
  balance: string;
}

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const customers: Customer[] = [
    {
      id: 1,
      name: "John Mukasa",
      email: "john.mukasa@email.com",
      phone: "+256 701 234 567",
      location: "Kampala Central",
      connectionType: "PPPoE",
      plan: "Premium 20Mbps",
      status: "active",
      monthlyFee: "UGX 150,000",
      lastPayment: "2024-07-15",
      balance: "UGX 0"
    },
    {
      id: 2,
      name: "Sarah Nakato",
      email: "sarah.nakato@business.com",
      phone: "+256 702 345 678",
      location: "Entebbe",
      connectionType: "PPPoE",
      plan: "Business 50Mbps",
      status: "pending",
      monthlyFee: "UGX 300,000",
      lastPayment: "2024-06-20",
      balance: "UGX 300,000"
    },
    {
      id: 3,
      name: "David Okello",
      email: "david.okello@gmail.com",
      phone: "+256 703 456 789",
      location: "Nakawa",
      connectionType: "Hotspot",
      plan: "Basic 10Mbps",
      status: "active",
      monthlyFee: "UGX 80,000",
      lastPayment: "2024-07-10",
      balance: "UGX 0"
    },
    {
      id: 4,
      name: "Grace Anyango",
      email: "grace.anyango@company.co.ug",
      phone: "+256 704 567 890",
      location: "Jinja",
      connectionType: "PPPoE",
      plan: "Premium 20Mbps",
      status: "blocked",
      monthlyFee: "UGX 150,000",
      lastPayment: "2024-05-15",
      balance: "UGX 450,000"
    },
    {
      id: 5,
      name: "Peter Ssemakula",
      email: "peter.ssemakula@email.com",
      phone: "+256 705 678 901",
      location: "Mbarara",
      connectionType: "Hotspot",
      plan: "Standard 15Mbps",
      status: "inactive",
      monthlyFee: "UGX 120,000",
      lastPayment: "2024-07-01",
      balance: "UGX 120,000"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-status-active text-white"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case "pending":
        return <Badge className="bg-status-pending text-white"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "blocked":
        return <Badge className="bg-status-blocked text-white"><AlertCircle className="w-3 h-3 mr-1" />Blocked</Badge>;
      case "inactive":
        return <Badge className="bg-status-inactive text-white"><Pause className="w-3 h-3 mr-1" />Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getConnectionTypeBadge = (type: string) => {
    return type === "PPPoE" 
      ? <Badge variant="outline" className="border-primary text-primary">PPPoE</Badge>
      : <Badge variant="outline" className="border-secondary text-secondary">Hotspot</Badge>;
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Customer Management</h1>
          <p className="text-muted-foreground">Manage all your ISP customers</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Customer
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search customers by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCustomers.map((customer) => (
          <Card key={customer.id} className="bg-card border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">{customer.name}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    {getStatusBadge(customer.status)}
                    {getConnectionTypeBadge(customer.connectionType)}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{customer.location}</span>
                </div>
              </div>

              {/* Plan and Payment Info */}
              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Plan</p>
                    <p className="font-medium text-foreground">{customer.plan}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Monthly Fee</p>
                    <p className="font-medium text-foreground">{customer.monthlyFee}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Payment</p>
                    <p className="font-medium text-foreground">{customer.lastPayment}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Balance</p>
                    <p className={`font-medium ${customer.balance === "UGX 0" ? "text-success" : "text-destructive"}`}>
                      {customer.balance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Record Payment
                </Button>
                {customer.status === "blocked" && (
                  <Button variant="outline" size="sm" className="flex-1 text-success hover:text-success">
                    Unblock
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCustomers.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">No customers found matching your search.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Customers;