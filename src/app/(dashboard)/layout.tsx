"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [courseId, setCourseId] = useState<Course | null>(null);
  const { user, isLoaded } = useUser();

  //handle use effect isCoursePage

  if (!isLoaded) return <Loading />;
  if (!user) return <div>Please sign in to access this page.</div>;
  return (
    <SidebarProvider>
      <div className="dashboard">
        <AppSidebar />
        <div className="dashboard__content">
          {/* chapter sidebar will go  */}
          <div className={cn("dashboard__main")} style={{ height: "100vh" }}>
            <Navbar />
            <main className="dashboard__body">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
