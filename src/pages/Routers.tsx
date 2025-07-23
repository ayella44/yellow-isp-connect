import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Router as RouterIcon,
  Plus,
  Wifi,
  Activity,
  Users,
  HardDrive,
  Cpu,
  AlertTriangle,
  CheckCircle,
  Settings
} from "lucide-react";

interface RouterInfo {
  id: number;
  name: string;
  ipAddress: string;
  location: string;
  model: string;
  status: "online" | "offline";
  uptime: string;
  activeUsers: number;
  totalUsers: number;
  cpuUsage: number;
  memoryUsage: number;
  interface: string;
  lastSeen: string;
}

const Routers = () => {
  const routers: RouterInfo[] = [
    {
      id: 1,
      name: "Main Router - Kampala Central",
      ipAddress: "192.168.1.1",
      location: "Kampala Central Office",
      model: "MikroTik CCR1036-12G-4S",
      status: "online",
      uptime: "45 days, 12 hours",
      activeUsers: 847,
      totalUsers: 1200,
      cpuUsage: 35,
      memoryUsage: 68,
      interface: "ether1-gateway",
      lastSeen: "2024-07-23 14:30"
    },
    {
      id: 2,
      name: "Backup Router - Entebbe",
      ipAddress: "192.168.2.1",
      location: "Entebbe Branch",
      model: "MikroTik RB4011iGS+",
      status: "offline",
      uptime: "0 days, 0 hours",
      activeUsers: 0,
      totalUsers: 450,
      cpuUsage: 0,
      memoryUsage: 0,
      interface: "ether1-gateway",
      lastSeen: "2024-07-22 18:45"
    },
    {
      id: 3,
      name: "Hotspot Router - Nakawa",
      ipAddress: "192.168.3.1",
      location: "Nakawa Industrial Area",
      model: "MikroTik RB2011UiAS-2HnD",
      status: "online",
      uptime: "12 days, 8 hours",
      activeUsers: 156,
      totalUsers: 200,
      cpuUsage: 42,
      memoryUsage: 55,
      interface: "wlan1",
      lastSeen: "2024-07-23 14:29"
    },
    {
      id: 4,
      name: "Branch Router - Jinja",
      ipAddress: "192.168.4.1",
      location: "Jinja Branch Office",
      model: "MikroTik RB3011UiAS-RM",
      status: "online",
      uptime: "23 days, 15 hours",
      activeUsers: 324,
      totalUsers: 600,
      cpuUsage: 28,
      memoryUsage: 62,
      interface: "ether1-gateway",
      lastSeen: "2024-07-23 14:31"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === "online" 
      ? <Badge className="bg-status-active text-white"><CheckCircle className="w-3 h-3 mr-1" />Online</Badge>
      : <Badge className="bg-status-blocked text-white"><AlertTriangle className="w-3 h-3 mr-1" />Offline</Badge>;
  };

  const getUsageColor = (usage: number) => {
    if (usage > 80) return "text-destructive";
    if (usage > 60) return "text-warning";
    return "text-success";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">MikroTik Router Management</h1>
          <p className="text-muted-foreground">Monitor and manage all your network routers</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="w-4 h-4 mr-2" />
          Add Router
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <RouterIcon className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Total Routers</p>
                <p className="text-2xl font-bold text-foreground">{routers.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Online</p>
                <p className="text-2xl font-bold text-foreground">
                  {routers.filter(r => r.status === "online").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold text-foreground">
                  {routers.reduce((sum, router) => sum + router.activeUsers, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Uptime</p>
                <p className="text-2xl font-bold text-foreground">98.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Router Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {routers.map((router) => (
          <Card key={router.id} className="bg-card border-border">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg font-semibold text-foreground">{router.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{router.model}</p>
                  <div className="flex gap-2 mt-2">
                    {getStatusBadge(router.status)}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">IP Address</p>
                  <p className="font-medium text-foreground">{router.ipAddress}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">{router.location}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Interface</p>
                  <p className="font-medium text-foreground">{router.interface}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Last Seen</p>
                  <p className="font-medium text-foreground">{router.lastSeen}</p>
                </div>
              </div>

              {/* Status Info */}
              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Uptime</p>
                    <p className="font-medium text-foreground">{router.uptime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Active Users</p>
                    <p className="font-medium text-foreground">{router.activeUsers} / {router.totalUsers}</p>
                  </div>
                </div>
              </div>

              {/* Resource Usage */}
              <div className="border-t pt-4">
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">CPU Usage</span>
                      <span className={`font-medium ${getUsageColor(router.cpuUsage)}`}>
                        {router.cpuUsage}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          router.cpuUsage > 80 ? "bg-destructive" : 
                          router.cpuUsage > 60 ? "bg-warning" : "bg-success"
                        }`}
                        style={{ width: `${router.cpuUsage}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Memory Usage</span>
                      <span className={`font-medium ${getUsageColor(router.memoryUsage)}`}>
                        {router.memoryUsage}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          router.memoryUsage > 80 ? "bg-destructive" : 
                          router.memoryUsage > 60 ? "bg-warning" : "bg-success"
                        }`}
                        style={{ width: `${router.memoryUsage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Activity className="w-4 h-4 mr-2" />
                  Monitor
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Users className="w-4 h-4 mr-2" />
                  Users
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Wifi className="w-4 h-4 mr-2" />
                  Config
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Routers;