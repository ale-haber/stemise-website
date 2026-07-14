import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import HeroShapes from "@/components/HeroShapes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type AuthPageLayoutProps = {
  title: string;
  description: string;
  pathname: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

const AuthPageLayout = ({
  title,
  description,
  pathname,
  children,
  footer,
}: AuthPageLayoutProps) => (
  <div className="min-h-screen bg-background">
    <Seo title={title} description={description} pathname={pathname} />
    <Header />
    <main>
      <section className="relative overflow-hidden border-b-2 border-foreground bg-white">
        <HeroShapes variant="contact" />
        <div className="container relative py-16 md:py-20">
          <div className="page-hero-copy mx-auto max-w-2xl text-center">
            <span className="eyebrow">Account</span>
            <h1 className="display-title mt-6">{title}</h1>
            <p className="lead mx-auto mt-6 max-w-xl">{description}</p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white">
        <div className="container">
          <Card className="hero-panel-enter offset-card mx-auto max-w-lg rounded-[32px] bg-white">
            <CardHeader>
              <CardTitle className="text-3xl">{title}</CardTitle>
              <CardDescription className="text-sm leading-6 text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {children}
              <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default AuthPageLayout;
