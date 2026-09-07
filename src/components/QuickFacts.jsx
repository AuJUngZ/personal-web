export default function QuickFacts({ items }) {
  return (
    <section className="py-8 md:py-10" aria-label="Quick facts">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item) => (
          <article
            key={item.label}
            className="min-w-0 rounded-2xl border border-border bg-card p-5 shadow-none"
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
