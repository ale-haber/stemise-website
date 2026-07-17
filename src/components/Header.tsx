import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loader2, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { externalLinks } from "@/lib/site-data";
import { useToast } from "@/hooks/use-toast";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isConfigured, isLoading, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    setIsSigningOut(true);
    const { error } = await signOut();
    setIsSigningOut(false);
    setIsMenuOpen(false);

    if (error) {
      toast({
        title: "Sign out failed",
        description: error,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Signed out",
      description: "You have been logged out.",
    });
    navigate("/");
  };

  const authActions = isLoading ? null : isAuthenticated ? (
    <>
      <Button variant="outline" asChild className="whitespace-nowrap px-4 xl:px-5">
        <Link to="/dashboard">Dashboard</Link>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="shrink-0"
        onClick={handleSignOut}
        disabled={isSigningOut}
        aria-label="Log out"
      >
        {isSigningOut ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogOut className="h-4 w-4" />}
      </Button>
    </>
  ) : isConfigured ? (
    <Button variant="outline" asChild className="whitespace-nowrap px-4 xl:px-5">
      <Link to="/login">Login</Link>
    </Button>
  ) : null;

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/10 bg-white/96 backdrop-blur-xl">
      <div className="container">
        <div className="grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4 xl:gap-6">
          <Link to="/" className="flex shrink-0 items-center">
            <img src="/stemise-logo-mini.png" alt="STEMise" className="h-10 w-auto xl:h-12" />
          </Link>

          <nav
            className="hidden min-w-0 items-center gap-1 rounded-full border-2 border-foreground bg-[#f5f7ff] px-3 py-2 lg:flex xl:gap-2 xl:px-4"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-semibold transition-colors xl:px-4 xl:text-sm ${
                    isActive
                      ? "bg-white text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center justify-end gap-2 xl:gap-3 lg:flex">
            {authActions}
            <Button variant="outline" asChild className="whitespace-nowrap px-4 xl:px-5">
              <a href={externalLinks.chapter} target="_blank" rel="noopener noreferrer">
                Start a Chapter
              </a>
            </Button>
            <Button variant="outline" asChild className="whitespace-nowrap px-4 xl:px-5">
              <a href={externalLinks.volunteer} target="_blank" rel="noopener noreferrer">
                Volunteer
              </a>
            </Button>
            <Button asChild className="whitespace-nowrap px-4 xl:px-5">
              <a href={externalLinks.donate} target="_blank" rel="noopener noreferrer">
                Donate
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="justify-self-end inline-flex rounded-2xl border-2 border-foreground/10 bg-[#f5f7ff] p-2 text-foreground lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="container py-5" aria-label="Mobile">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                      isActive ? "bg-secondary text-foreground" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              {authActions}
              <Button variant="outline" asChild className="mt-2">
                <a
                  href={externalLinks.chapter}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start a Chapter
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={externalLinks.volunteer}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Volunteer
                </a>
              </Button>
              <Button asChild>
                <a
                  href={externalLinks.donate}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Donate
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
