import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">Contact</h2>
      <p className="mt-2 text-muted-foreground">Have a project in mind? Let's build something great together.</p>

      <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-xl border bg-card p-6 shadow">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input id="name" name="name" required className="rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea id="message" name="message" rows="4" required className="rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>
        <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition">
          Send Message
        </button>
        {status && <p className="text-sm text-green-600">{status}</p>}
      </form>
    </section>
  );
}
