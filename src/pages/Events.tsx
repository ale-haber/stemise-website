import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import HeroShapes from "@/components/HeroShapes";
import { EventDetailCard, LogoStrip } from "@/components/events/EventSections";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useSiteContentQuery } from "@/lib/site-content";
import type { SiteEvent } from "@/lib/site-data";

const PastEventCard = ({ event }: { event: SiteEvent }) => (
  <article className="overflow-hidden rounded-[2.3rem] border-2 border-foreground/20 bg-[#f5f5f5]">
    <div className="grid min-w-0 gap-0 xl:grid-cols-[minmax(0,1.15fr)_380px]">
      <div className="min-w-0 p-7 md:p-9">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border-2 border-foreground/25 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60">
            Completed
          </span>
          <span className="rounded-full border-2 border-foreground/25 bg-white/70 px-3 py-1 text-xs font-semibold text-foreground/60">
            {event.date}
          </span>
          <span className="rounded-full border-2 border-foreground/25 bg-white/70 px-3 py-1 text-xs font-semibold text-foreground/60">
            {event.location}
          </span>
        </div>
        <h2 className="mt-6 max-w-3xl break-words text-4xl font-semibold text-foreground/80 md:text-5xl">
          {event.title}
        </h2>
        <p className="mt-5 max-w-2xl break-words text-base leading-8 text-foreground/60 md:text-lg">
          {event.shortDescription}
        </p>
        {event.pastStats?.length ? (
          <div className="mt-7 flex flex-wrap gap-3">
            {event.pastStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border-2 border-foreground/15 bg-white/80 px-5 py-3 text-center"
              >
                <div className="text-xl font-bold text-foreground/80">{stat.value}</div>
                <div className="mt-0.5 text-xs font-medium uppercase tracking-[0.12em] text-foreground/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {event.href?.trim() ? (
          <a
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-foreground/25 bg-white/70 px-5 py-2.5 text-sm font-semibold text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            {event.hrefLabel || "Visit event"}
          </a>
        ) : null}
        {(event.sponsors?.length || event.professionals?.length) ? (
          <div className="mt-8 space-y-6">
            <LogoStrip label="Backed by" items={event.sponsors ?? []} />
            <LogoStrip label="Collaborated with professionals from:" items={event.professionals ?? []} />
          </div>
        ) : null}
      </div>
      <div className="min-w-0 border-t-2 border-foreground/15 xl:border-l-2 xl:border-t-0">
        <div className="h-full min-h-[260px] overflow-hidden xl:min-h-full">
          {event.image ? (
            <img
              src={event.image}
              alt={event.imageAlt || event.title}
              className="h-full w-full object-cover opacity-60 grayscale"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-[#e8e8e8] px-8 text-center text-sm font-medium text-foreground/40">
              Event image
            </div>
          )}
        </div>
      </div>
    </div>
  </article>
);

const Events = () => {
  const { data: events } = useSiteContentQuery("events");

  const activeEvents = events.filter((e) => !e.past && !e.upcoming);
  const upcomingEvents = events.filter((e) => e.upcoming);
  const pastEvents = events.filter((e) => e.past);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Events"
        pathname="/events"
        description="Explore STEMise events, workshops, challenges, and partner-supported programs designed to make STEM learning hands-on and accessible."
        image={activeEvents[0]?.image ?? events[0]?.image}
      />
      <Header />
      <main className="overflow-hidden bg-white">
        <section className="relative overflow-hidden border-b-2 border-foreground bg-white">
          <HeroShapes variant="home" />
          <div className="container relative pt-16 pb-16 md:pt-23 md:pb-20">
            <div className="page-hero-copy mx-auto max-w-3xl text-center">
              <span className="eyebrow">Events</span>
              <h1 className="display-title mx-auto mt-6 max-w-3xl">
                Hands-on STEM experiences beyond the classroom.
              </h1>
              <p className="lead mx-auto mt-5 max-w-2xl">
                Explore STEMise workshops, community programs, learning challenges, and special
                initiatives built with students, schools, partners, and professionals around the world.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link to="/get-involved">Partner with STEMise</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Ask about an event</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell bg-white">
          <div className="container">
            <div className="section-intro section-intro-animate mx-auto text-center">
              <div>
                <span className="eyebrow">All events</span>
                <h2 className="section-title">Programs, workshops, and special initiatives.</h2>
                <p className="section-copy">
                  Each event includes the key details, purpose, partners, and professional
                  collaborators behind the experience.
                </p>
              </div>
            </div>

            {activeEvents.length ? (
              <div data-scroll-reveal className="stagger-stack mt-12 space-y-7">
                {activeEvents.map((event) => (
                  <EventDetailCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="hero-panel-enter offset-card mt-12 rounded-[2rem] bg-[#f7fbff] p-8 text-center">
                <span className="eyebrow">No events yet</span>
                <h2 className="section-title mt-4">Upcoming events will be posted here.</h2>
                <p className="section-copy mt-4">
                  Check back for new STEMise workshops, programs, and community opportunities.
                </p>
              </div>
            )}
          </div>
        </section>

        {(upcomingEvents.length || pastEvents.length) ? (
          <section className="section-shell border-t-2 border-foreground/10 bg-[#f9f9f9]">
            <div className="container">
              <Tabs defaultValue={upcomingEvents.length ? "upcoming" : "past"} className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="bg-white border-2 border-foreground/15 rounded-full p-1 h-auto">
                    {upcomingEvents.length > 0 && (
                      <TabsTrigger 
                        value="upcoming"
                        className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-foreground data-[state=active]:text-white transition-all"
                      >
                        Upcoming events
                      </TabsTrigger>
                    )}
                    {pastEvents.length > 0 && (
                      <TabsTrigger 
                        value="past"
                        className="rounded-full px-6 py-2.5 text-sm font-semibold data-[state=active]:bg-foreground data-[state=active]:text-white transition-all"
                      >
                        Past events
                      </TabsTrigger>
                    )}
                  </TabsList>
                </div>

                {upcomingEvents.length > 0 && (
                  <TabsContent value="upcoming" className="mt-0 outline-none">
                    <div className="section-intro section-intro-animate mx-auto text-center mb-12">
                      <div>
                        <span className="eyebrow">Upcoming events</span>
                        <h2 className="section-title">Coming soon.</h2>
                        <p className="section-copy">
                          Get ready for our future events. More details will be announced soon.
                        </p>
                      </div>
                    </div>
                    <div className="stagger-stack space-y-7">
                      {upcomingEvents.map((event) => (
                        <EventDetailCard key={event.id} event={event} />
                      ))}
                    </div>
                  </TabsContent>
                )}

                {pastEvents.length > 0 && (
                  <TabsContent value="past" className="mt-0 outline-none">
                    <div className="section-intro section-intro-animate mx-auto text-center mb-12">
                      <div>
                        <span className="eyebrow">Past events</span>
                        <h2 className="section-title text-foreground/70">Where it all began.</h2>
                        <p className="section-copy text-foreground/55">
                          A look back at the events that helped shape STEMise and the global student
                          communities they brought together.
                        </p>
                      </div>
                    </div>
                    <div className="stagger-stack space-y-7">
                      {pastEvents.map((event) => (
                        <PastEventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default Events;
