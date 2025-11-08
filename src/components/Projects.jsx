import React from 'react';

const projects = [
  {
    title: 'TravelMate',
    description:
      'A travel planning app with offline maps, itinerary collaboration, and AI-powered recommendations.',
    tags: ['Flutter', 'Riverpod', 'Firebase', 'Offline-first'],
    link: '#',
  },
  {
    title: 'FitTrack',
    description:
      'Fitness tracking with wearable integration, custom workouts, and insights powered by charts.',
    tags: ['Flutter', 'Bloc', 'SQLite', 'Charts'],
    link: '#',
  },
  {
    title: 'ShopSwift',
    description:
      'E-commerce starter with modular clean architecture, payments, and analytics.',
    tags: ['Flutter', 'Clean Arch', 'Stripe', 'Analytics'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">Selected Projects</h2>
          <p className="mt-2 text-muted-foreground">A few recent builds showcasing product thinking and engineering depth.</p>
        </div>
        <a href="#contact" className="hidden rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted md:inline-block">Work with me</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-xl border bg-card p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Flutter</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
