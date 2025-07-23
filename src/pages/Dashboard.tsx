import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  DollarSign, 
  Activity, 
  Router, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const Dashboard = () => {
  // Mock data for KPIs
  const kpis = [
    {
      title: "Total Revenue",
      value: "UGX 12,450,000",
      change: "+12%",
      icon: DollarSign,
      trend: "up"
    },
    {
      title: "Active Customers",
      value: "2,847",
      change: "+5%",
      icon: Users,
      trend: "up"
    },
    {
      title: "Network Uptime",
      value: "99.8%",
      change: "+0.2%",
      icon: Activity,
      trend: "up"
    },
    {
      title: "Active Routers",
      value: "24/25",
      change: "1 offline",
      icon: Router,
      trend: "stable"
    }
  ];

  const recentCustomers = [
    { id: 1, name: "John Mukasa", plan: "Premium 20Mbps", status: "active", amount: "UGX 150,000" },
    { id: 2, name: "Sarah Nakato", plan: "Business 50Mbps", status: "pending", amount: "UGX 300,000" },
    { id: 3, name: "David Okello", plan: "Basic 10Mbps", status: "active", amount: "UGX 80,000" },
    { id: 4, name: "Grace Anyango", plan: "Premium 20Mbps", status: "blocked", amount: "UGX 150,000" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-status-active text-white"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case "pending":
        return <Badge className="bg-status-pending text-white"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "blocked":
        return <Badge className="bg-status-blocked text-white"><AlertCircle className="w-3 h-3 mr-1" />Blocked</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to YellowTech ISP Management</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-accent/20 border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.title}
              </CardTitle>
              <kpi.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-success" />
                {kpi.change} from last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Customers */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCustomers.map((customer) => (
                <div key={customer.id} className="flex items-center justify-between p-3 border rounded-lg bg-accent/50">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{customer.name}</h4>
                    <p className="text-sm text-muted-foreground">{customer.plan}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-foreground">{customer.amount}</span>
                    {getStatusBadge(customer.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Network Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Network Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg bg-accent/50">
                <div>
                  <h4 className="font-medium text-foreground">Main Router - Kampala Central</h4>
                  <p className="text-sm text-muted-foreground">192.168.1.1</p>
                </div>
                <Badge className="bg-status-active text-white">Online</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg bg-accent/50">
                <div>
                  <h4 className="font-medium text-foreground">Backup Router - Entebbe</h4>
                  <p className="text-sm text-muted-foreground">192.168.2.1</p>
                </div>
                <Badge className="bg-status-blocked text-white">Offline</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg bg-accent/50">
                <div>
                  <h4 className="font-medium text-foreground">Hotspot Router - Nakawa</h4>
                  <p className="text-sm text-muted-foreground">192.168.3.1</p>
                </div>
                <Badge className="bg-status-active text-white">Online</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 text-center border rounded-lg hover:bg-accent/50 transition-colors">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Add Customer</span>
            </button>
            <button className="p-4 text-center border rounded-lg hover:bg-accent/50 transition-colors">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Record Payment</span>
            </button>
            <button className="p-4 text-center border rounded-lg hover:bg-accent/50 transition-colors">
              <Router className="h-8 w-8 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">Check Routers</span>
            </button>
            <button className="p-4 text-center border rounded-lg hover:bg-accent/50 transition-colors">
              <Activity className="h-8 w-8 mx-auto mb-2 text-primary" />
              <span className="text-sm font-medium">View Reports</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;