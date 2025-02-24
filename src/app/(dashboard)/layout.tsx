"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ChaptersSidebar from "./user/courses/[courseId]/ChaptersSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [courseId, setCourseId] = useState<Course | null>(null);
  const { user, isLoaded } = useUser();
  const isCoursePage = /^\/user\/courses\/[^\/]+(?:\/chapters\/[^\/]+)?$/.test(
    pathname
  );
  
  //handle use effect isCoursePage
  useEffect(() => {
    if (isCoursePage) {
      const match = pathname.match(/\/user\/courses\/([^\/]+)/);
      setCourseId(match ? match[1] : null);
    } else {
      setCourseId(null);
    }
  }, [isCoursePage, pathname]);

  if (!isLoaded) return <Loading />;
  if (!user) return <div>Please sign in to access this page.</div>;
  return (
    <SidebarProvider>
      <div className="dashboard">
        <AppSidebar />
        <div className="dashboard__content">
          {courseId && <ChaptersSidebar />}
          <div className={cn("dashboard__main",
            isCoursePage && "dashboard__main--not-course"
          )} style={{ height: "100vh" }}>
            <Navbar isCoursePage={isCoursePage}/>
            <main className="dashboard__body">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
