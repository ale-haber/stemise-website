import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { EventOrganization, SiteEvent } from "@/lib/site-data";

export const eventAccentStyles: Record<NonNullable<SiteEvent["accentTheme"]>, string> = {
  blue: "panel-blue border-foreground",
  orange: "panel-orange border-foreground",
  lime: "panel-lime border-foreground",
  ink: "panel-ink border-foreground",
};

const isExternalHref = (value: string) => /^https?:\/\//i.test(value);

const getEventPrimaryHref = (event: SiteEvent) => {
  const explicitHref = event.href?.trim();
  if (explicitHref) {
    return explicitHref;
  }

  return `/events#${event.slug || event.id}`;
};

const EventActionButton = ({
  event,
  label,
  href,
}: {
  event: SiteEvent;
  label: string;
  href?: string;
}) => {
  const destination = href || getEventPrimaryHref(event);

  if (isExternalHref(destination)) {
    return (
      <Button variant="outline" asChild className="w-fit bg-white">
        <a href={destination} target="_blank" rel="noopener noreferrer">
          {label}
          <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
    );
  }

  return (
    <Button variant="outline" asChild className="w-fit bg-white">
      <Link to={destination}>
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
};

export const LogoStrip = ({
  label,
  items,
}: {
  label: string;
  items: EventOrganization[];
}) => {
  if (!items.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">{label}</div>
      <div className="grid min-w-0 gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const card = (
            <div className="flex min-h-[88px] min-w-0 items-center gap-4 rounded-[1.2rem] bg-white px-2 py-3">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-12 w-24 shrink-0 object-contain sm:w-28"
                />
              ) : null}
              <span className="min-w-0 break-words text-left text-sm font-semibold leading-6 text-foreground">
                {item.name}
              </span>
            </div>
          );

          return item.href ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {card}
            </a>
          ) : (
            <div key={item.id}>{card}</div>
          );
        })}
      </div>
    </div>
  );
};

const RichText = ({ content }: { content: string }) => {
  const blocks = content.split(/\n{2,}/);
  
  return (
    <>
      {blocks.map((block, blockIdx) => {
        const lines = block.split('\n');
        
        // If it's a list block (all lines start with -)
        if (lines.length > 1 && lines.every(line => line.trim().startsWith('- '))) {
          return (
            <ul key={blockIdx} className="space-y-4 mb-4 ml-6 list-disc marker:text-foreground/40 text-base md:text-lg text-foreground/90">
              {lines.map((line, lineIdx) => {
                const content = line.trim().slice(2);
                const parts = content.split(/(\*\*.*?\*\*)/g);
                return (
                  <li key={lineIdx}>
                    {parts.map((part, j) => 
                      part.startsWith('**') && part.endsWith('**') 
                        ? <strong key={j} className="font-semibold text-foreground/90">{part.slice(2, -2)}</strong>
                        : part
                    )}
                  </li>
                );
              })}
            </ul>
          );
        }

        // Otherwise process line by line
        return (
          <div key={blockIdx} className="mb-4 space-y-2">
            {lines.map((line, lineIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('### ')) {
                return (
                  <h4 key={lineIdx} className="mt-4 mb-5 text-2xl font-bold text-foreground">
                    {trimmed.slice(4)}
                  </h4>
                );
              }

              // Normal text or single list item that wasn't caught above
              const isListItem = trimmed.startsWith('- ');
              const textContent = isListItem ? trimmed.slice(2) : trimmed;
              const parts = textContent.split(/(\*\*.*?\*\*)/g);
              const formattedText = parts.map((part, j) => 
                part.startsWith('**') && part.endsWith('**') 
                  ? <strong key={j} className="font-semibold text-foreground/90">{part.slice(2, -2)}</strong>
                  : part
              );

              if (isListItem) {
                return (
                  <ul key={lineIdx} className="ml-6 space-y-4 list-disc marker:text-foreground/40 text-base md:text-lg text-foreground/90">
                    <li>{formattedText}</li>
                  </ul>
                );
              }

              return <p key={lineIdx}>{formattedText}</p>;
            })}
          </div>
        );
      })}
    </>
  );
};

export const FeaturedEventCard = ({
  event,
}: {
  event: SiteEvent;
}) => {
  const accentTheme = event.accentTheme ?? "blue";
  const toneClass = eventAccentStyles[accentTheme];

  return (
    <article className={`play-card offset-card overflow-hidden rounded-[2rem] ${toneClass}`}>
      <div className="grid min-w-0 gap-0 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="min-w-0 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="max-w-full break-words rounded-full border-2 border-foreground bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              {event.status}
            </span>
            <span className="max-w-full break-words rounded-full border-2 border-foreground bg-white px-3 py-1 text-xs font-semibold text-foreground">
              {event.date}
            </span>
            <span className="max-w-full break-words rounded-full border-2 border-foreground bg-white px-3 py-1 text-xs font-semibold text-foreground">
              {event.location}
            </span>
          </div>

          <h3 className="mt-5 break-words text-3xl font-semibold md:text-5xl">{event.title}</h3>
          <p className="mt-4 max-w-4xl break-words text-sm leading-7 opacity-90 md:text-base">
            {event.shortDescription}
          </p>

          {(event.sponsors ?? []).length ? (
            <div className="mt-6 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">Backed by</div>
              <div className="flex min-w-0 flex-wrap gap-3">
                {(event.sponsors ?? []).slice(0, 4).map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="flex min-h-14 min-w-0 max-w-full items-center justify-center rounded-full border-2 border-foreground bg-white px-4 py-2"
                  >
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} className="h-8 max-w-[100px] object-contain" />
                    ) : (
                      <span className="break-words text-center text-xs font-semibold">{sponsor.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-6">
            <EventActionButton event={event} href={`/events#${event.slug || event.id}`} label="See full event" />
          </div>
        </div>

        <div className="min-w-0 border-t-2 border-foreground lg:border-l-2 lg:border-t-0">
          <div className="h-full min-h-[260px] overflow-hidden bg-white lg:min-h-full">
            {event.image ? (
              <img
                src={event.image}
                alt={event.imageAlt || event.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center text-sm font-medium text-muted-foreground">
                Event image
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export const EventDetailCard = ({
  event,
}: {
  event: SiteEvent;
}) => {
  const accentTheme = event.accentTheme ?? "blue";
  const toneClass = eventAccentStyles[accentTheme];

  return (
    <article id={event.slug} className={`play-card offset-card overflow-hidden rounded-[2.3rem] ${toneClass}`}>
      <div className="grid min-w-0 gap-0 xl:grid-cols-[minmax(0,1.15fr)_420px] 2xl:grid-cols-[minmax(0,1.25fr)_460px]">
        <div className="min-w-0 p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-2">
            <span className="max-w-full break-words rounded-full border-2 border-foreground bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
              {event.status}
            </span>
            <span className="max-w-full break-words rounded-full border-2 border-foreground bg-white px-3 py-1 text-xs font-semibold text-foreground">
              {event.date}
            </span>
            <span className="max-w-full break-words rounded-full border-2 border-foreground bg-white px-3 py-1 text-xs font-semibold text-foreground">
              {event.location}
            </span>
          </div>

          <div className="mt-6 max-w-3xl min-w-0">
            <h2 className="break-words text-4xl font-semibold md:text-5xl">{event.title}</h2>
            <p className="mt-5 break-words text-base leading-8 opacity-90 md:text-lg">
              {event.shortDescription}
            </p>
            {event.href?.trim() || event.extraLinks?.length ? (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {event.href?.trim() ? (
                  <EventActionButton
                    event={event}
                    href={event.href}
                    label={event.hrefLabel?.trim() || "Open event link"}
                  />
                ) : null}
                {event.extraLinks?.map((link, idx) => (
                  <EventActionButton
                    key={idx}
                    event={event}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="min-w-0 border-t-2 border-foreground xl:border-l-2 xl:border-t-0">
          <div className="h-full min-h-[280px] overflow-hidden bg-white xl:min-h-full">
            {event.image ? (
              <img
                src={event.image}
                alt={event.imageAlt || event.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-8 text-center text-sm font-medium text-muted-foreground">
                Event image
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-foreground bg-white px-7 py-7 md:px-9">
        <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] 2xl:grid-cols-[minmax(0,1.15fr)_minmax(460px,0.9fr)]">
          <div className="min-w-0 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Full overview
            </div>
            <div className="space-y-4 break-words text-sm leading-7 text-foreground md:text-base">
              {event.callout && (
                <div className="mb-6 rounded-2xl border-2 border-foreground/20 bg-foreground/5 p-5">
                  {event.callout.title && <h4 className="mb-2 font-bold text-foreground">{event.callout.title}</h4>}
                  <p className="text-foreground/80">{event.callout.text}</p>
                </div>
              )}
              {event.fullDescription ? (
                <RichText content={event.fullDescription} />
              ) : (
                <p>{event.shortDescription}</p>
              )}
            </div>
          </div>

          <div className="min-w-0 space-y-8">
            <LogoStrip label="Backed by" items={event.sponsors ?? []} />
            <LogoStrip
              label="Collaborated with professionals from:"
              items={event.professionals ?? []}
            />
          </div>
        </div>

        {event.gallery?.length ? (
          <div className="mt-8 border-t-2 border-foreground/10 pt-8">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-4">
              Event Gallery
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {event.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  className="rounded-xl border-2 border-foreground/10 object-cover w-full h-48"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
};
