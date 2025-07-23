import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import yellowtechLogo from "@/assets/yellowtech-logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-card flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-3">
                <img src={yellowtechLogo} alt="YellowTech Solutions" className="h-8 w-8" />
                <div>
                  <h1 className="text-lg font-bold text-foreground">YellowTech Billing System</h1>
                  <p className="text-xs text-muted-foreground">ISP Management Platform</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Powered by YellowTech Solutions
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}