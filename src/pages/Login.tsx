import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import HeroShapes from "@/components/HeroShapes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

type Tab = "login" | "signup";

const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab: Tab = searchParams.get("tab") === "signup" ? "signup" : "login";
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Signup state
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirm, setSignupConfirm] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupRole, setSignupRole] = useState("");
  const [signupAgeGroup, setSignupAgeGroup] = useState("");
  const [signupInterests, setSignupInterests] = useState<string[]>([]);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const { signIn, signUp, isConfigured } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const redirectTo = searchParams.get("redirect") || "/dashboard";

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    setSearchParams(tab === "signup" ? { tab: "signup" } : {}, { replace: true });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      toast({ title: "Missing fields", description: "Enter your email and password.", variant: "destructive" });
      return;
    }
    setIsLoggingIn(true);
    const { error } = await signIn(loginEmail, loginPassword);
    setIsLoggingIn(false);
    if (error) {
      toast({ title: "Sign in failed", description: error, variant: "destructive" });
      return;
    }
    toast({ title: "Signed in", description: "Welcome back." });
    navigate(redirectTo, { replace: true });
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!signupEmail || !signupPassword || !signupConfirm || !signupName || !signupRole || !signupAgeGroup) {
      toast({ title: "Missing fields", description: "Complete all required fields to create your account.", variant: "destructive" });
      return;
    }
    if (signupPassword.length < 8) {
      toast({ title: "Password too short", description: "Use at least 8 characters.", variant: "destructive" });
      return;
    }
    if (signupPassword !== signupConfirm) {
      toast({ title: "Passwords do not match", description: "Confirm your password and try again.", variant: "destructive" });
      return;
    }
    setIsSigningUp(true);
    const { error, needsEmailConfirmation } = await signUp(signupEmail, signupPassword);
    setIsSigningUp(false);
    if (error) {
      toast({ title: "Sign up failed", description: error, variant: "destructive" });
      return;
    }
    if (needsEmailConfirmation) {
      toast({ title: "Check your email", description: "Confirm your email address before signing in." });
      switchTab("login");
      return;
    }
    toast({ title: "Account created", description: "Welcome to STEMise! Your account is ready." });
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={activeTab === "signup" ? "Sign up" : "Log in"}
        description="Access or create your STEMise account."
        pathname="/login"
      />
      <Header />
      <main>
        <section className="relative overflow-hidden border-b-2 border-foreground bg-white">
          <HeroShapes variant="contact" />
          <div className="container relative py-16 md:py-20">
            <div className="page-hero-copy mx-auto max-w-2xl text-center">
              <span className="eyebrow">Account</span>
              <h1 className="display-title mt-6">
                {activeTab === "login" ? "Welcome back." : "Join STEMise."}
              </h1>
              <p className="lead mx-auto mt-4 max-w-lg">
                {activeTab === "login"
                  ? "Log in to access your account."
                  : "Create a free account with your email."}
              </p>
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="container">
            <div className="hero-panel-enter offset-card mx-auto max-w-lg rounded-[2rem] border-2 border-foreground bg-white overflow-hidden">

              {/* Tab switcher */}
              <div className="grid grid-cols-2 border-b-2 border-foreground">
                <button
                  type="button"
                  onClick={() => switchTab("login")}
                  className={`py-4 text-sm font-semibold transition-colors ${
                    activeTab === "login"
                      ? "bg-foreground text-background"
                      : "bg-white text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Log in
                </button>
                <button
                  type="button"
                  onClick={() => switchTab("signup")}
                  className={`py-4 text-sm font-semibold transition-colors ${
                    activeTab === "signup"
                      ? "bg-foreground text-background"
                      : "bg-white text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign up
                </button>
              </div>

              <div className="p-8">
                {!isConfigured ? (
                  <p className="text-sm leading-6 text-muted-foreground">
                    Supabase is not configured. Add{" "}
                    <code className="font-mono text-xs">VITE_SUPABASE_URL</code> and{" "}
                    <code className="font-mono text-xs">VITE_SUPABASE_ANON_KEY</code>{" "}
                    to your environment to enable authentication.
                  </p>
                ) : activeTab === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        autoComplete="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        autoComplete="current-password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Your password"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoggingIn}>
                      {isLoggingIn ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        "Log in"
                      )}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      No account?{" "}
                      <button
                        type="button"
                        onClick={() => switchTab("signup")}
                        className="font-semibold text-foreground underline-offset-4 hover:underline"
                      >
                        Sign up
                      </button>
                    </p>
                  </form>
                ) : (
                  <form onSubmit={handleSignup} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name">Full name</Label>
                      <Input
                        id="signup-name"
                        type="text"
                        autoComplete="name"
                        value={signupName}
                        onChange={(e) => setSignupName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        autoComplete="email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-role">I am a...</Label>
                      <Select value={signupRole} onValueChange={setSignupRole} required>
                        <SelectTrigger id="signup-role">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="teacher">Teacher/Educator</SelectItem>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="volunteer">Volunteer</SelectItem>
                          <SelectItem value="organization">Organization Representative</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-age">Age group</Label>
                      <Select value={signupAgeGroup} onValueChange={setSignupAgeGroup} required>
                        <SelectTrigger id="signup-age">
                          <SelectValue placeholder="Select your age group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10">Under 10</SelectItem>
                          <SelectItem value="10-13">10-13 years old</SelectItem>
                          <SelectItem value="14-18">14-18 years old</SelectItem>
                          <SelectItem value="18-25">18-25 years old</SelectItem>
                          <SelectItem value="25-40">25-40 years old</SelectItem>
                          <SelectItem value="40-plus">40+ years old</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label>STEM interests (select all that apply)</Label>
                      <div className="space-y-2">
                        {[
                          { id: 'coding', label: 'Coding & Programming' },
                          { id: 'robotics', label: 'Robotics' },
                          { id: 'math', label: 'Mathematics' },
                          { id: 'science', label: 'Science' },
                          { id: 'engineering', label: 'Engineering' },
                          { id: 'research', label: 'Research' },
                        ].map((interest) => (
                          <div key={interest.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={interest.id}
                              checked={signupInterests.includes(interest.id)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSignupInterests([...signupInterests, interest.id]);
                                } else {
                                  setSignupInterests(signupInterests.filter(i => i !== interest.id));
                                }
                              }}
                            />
                            <Label htmlFor={interest.id} className="cursor-pointer">
                              {interest.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        autoComplete="new-password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="At least 8 characters"
                        minLength={8}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm">Confirm password</Label>
                      <Input
                        id="signup-confirm"
                        type="password"
                        autoComplete="new-password"
                        value={signupConfirm}
                        onChange={(e) => setSignupConfirm(e.target.value)}
                        placeholder="Repeat your password"
                        minLength={8}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSigningUp}>
                      {isSigningUp ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        "Create account"
                      )}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => switchTab("login")}
                        className="font-semibold text-foreground underline-offset-4 hover:underline"
                      >
                        Log in
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
