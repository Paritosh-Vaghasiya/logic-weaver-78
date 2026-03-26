const Footer = () => (
  <footer className="py-12">
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex gap-6">
          {["Github", "LinkedIn", "Twitter"].map((l) => (
            <a key={l} href="#" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
              {l}
            </a>
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          LAST_UPDATED: 2024-01-15_UTC
        </p>
      </div>
      <div className="mt-6 text-center font-mono text-[10px] text-muted-foreground">
        © 2024 PORTFOLIO_CORE. ALL_RIGHTS_RESERVED.
      </div>
    </div>
  </footer>
);

export default Footer;
