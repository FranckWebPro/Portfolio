import HeaderDashboard from "../ui/dashboard/headerDashboard";
import { ProjectProvider } from "../ui/dashboard/projectContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderDashboard login />
      <main className="w-full bg-glassmorphism2 bg-cover bg-fixed bg-center">
        <ProjectProvider>{children}</ProjectProvider>
      </main>
    </>
  );
}