import Link from "next/link";
import { Bell } from "lucide-react";
import { BookOpen } from "lucide-react";
const NonDashboardNavbar = () => {
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link href="/" className="nondashboard-navbar__brand">
            DESIRECUTIECOURSES
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
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
        {/* SIGN IN BUTTONS */}
      </div>
    </nav>
  );
};
export default NonDashboardNavbar;
