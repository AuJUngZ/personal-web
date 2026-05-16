export default function QuickFacts({ items }) {
  return (
    <section className="py-8 md:py-10" aria-label="Quick facts">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.label}
            className="min-w-0 rounded-[1.75rem] border border-border/70 bg-card/90 p-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)] backdrop-blur"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {item.label}
            </p>
            <p className="mt-3 max-w-[18rem] break-words text-base font-semibold leading-6 text-foreground">
              {item.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
