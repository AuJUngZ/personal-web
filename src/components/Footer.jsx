export default function Footer({ data }) {
  return (
    <footer className="w-full mt-10">
      <div className="border-t border-border px-4 sm:px-10 py-6 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>{data.copyright}</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          {data.links.map((link) => (
            <a key={link.label} className="hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
