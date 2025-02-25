"use client";
import Link from "next/link";
import { Bell } from "lucide-react";
import { BookOpen } from "lucide-react";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const NonDashboardNavbar = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link scroll={false} href="/" className="nondashboard-navbar__brand">
            DESIRECUTIECOURSES
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                scroll={false}
                href="/search"
                className="nondashboard-navbar__search-input"
              >
                <span className="hidden sm:inline">Search courses</span>
                <span className="sm:hidden"></span>
              </Link>
              <BookOpen
                className="nondashboard-navbar__search-icon"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="nondashboard-navbar__actions">
        <button className="nondashboard-navbar__notifications-button">
          <span className="nondashboard-navbar__notifications-indicatior"></span>
          <Bell className="nondashboard-navbar__notifications-icon" />
        </button>
        <SignedIn>
          <UserButton
            appearance={{
              baseTheme: dark,
            }}
            showName={true}
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? "/teacher/profile" : "/user/profile"
            }
          />
        </SignedIn>
        <SignedOut>
          <Link
            scroll={false}
            href="/signin"
            className="nondashboard-navbar__auth-button--login"
          >
            Log In
          </Link>
          <Link
            scroll={false}
            href="/signin"
            className="nondashboard-navbar__auth-button--signup"
          >
            Sign Up
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};
export default NonDashboardNavbar;
