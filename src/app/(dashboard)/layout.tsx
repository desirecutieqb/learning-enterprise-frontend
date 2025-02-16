import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    
  return (
    <div className="nondashboard-layout">
      <main className="nondashboard-layout__main">{children}</main>
    </div>
  );
}
