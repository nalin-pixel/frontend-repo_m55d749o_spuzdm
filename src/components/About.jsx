import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-muted-foreground">
            I'm a Flutter developer focused on crafting polished, production-grade apps with clean architecture,
            robust state management, and pixel-perfect UI. I thrive at the intersection of design and engineering,
            delivering delightful experiences across iOS, Android, web, and desktop.
          </p>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>• Clean Architecture, SOLID principles</li>
            <li>• Riverpod/Bloc, Freezed, Dio, Drift/SQflite</li>
            <li>• CI/CD with Fastlane, Firebase, and Play/App Store</li>
            <li>• Performance profiling, accessibility, and localization</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow">
          <h3 className="text-lg font-semibold">Tech Snapshot</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {['Flutter','Dart','Firebase','Riverpod','Bloc','Clean Arch','REST','GraphQL','Animations'].map(t => (
              <div key={t} className="rounded-md border bg-muted/40 px-3 py-2 text-center">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
