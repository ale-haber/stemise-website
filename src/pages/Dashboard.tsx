import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, LogOut } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import HeroShapes from "@/components/HeroShapes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    setIsSigningOut(true);
    const { error } = await signOut();
    setIsSigningOut(false);

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
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Dashboard"
        description="Your private STEMise dashboard."
        pathname="/dashboard"
      />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b-2 border-foreground bg-white">
          <HeroShapes variant="contact" />
          <div className="container relative py-16 md:py-20">
            <div className="page-hero-copy mx-auto max-w-2xl text-center">
              <span className="eyebrow">Private</span>
              <h1 className="display-title mt-6">Your dashboard</h1>
              <p className="lead mx-auto mt-6 max-w-xl">
                This route is protected. Only signed-in users can view it.
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="container">
            <Card className="hero-panel-enter offset-card mx-auto max-w-2xl rounded-[32px] bg-[#f7fbff]">
              <CardHeader>
                <CardTitle className="text-3xl">Welcome back</CardTitle>
                <CardDescription className="text-sm leading-6 text-muted-foreground">
                  You are signed in with a persisted Supabase session.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-[1.5rem] border-2 border-foreground/15 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Signed in as
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{user?.email}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    User ID: <span className="font-mono text-foreground/80">{user?.id}</span>
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant="outline" asChild>
                    <Link to="/">Back to home</Link>
                  </Button>
                  <Button onClick={handleSignOut} disabled={isSigningOut}>
                    {isSigningOut ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Signing out...
                      </>
                    ) : (
                      <>
                        <LogOut className="h-4 w-4" />
                        Log out
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
