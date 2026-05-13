export default function Footer({ data }) {
  return (
    <footer className="mt-10 w-full">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between border-t border-border/70 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>{data.copyright}</p>
        <div className="mt-4 flex gap-4 sm:mt-0">
          {data.links.map((link) => (
            <a
              key={link.label}
              className="transition-colors hover:text-primary"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
