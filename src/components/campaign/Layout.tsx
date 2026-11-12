import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
const navigation = [
  { to: "/tema", label: "Kupto bullizmin" },
  { to: "/tema", label: "Format", hash: "format" },
  { to: "/aktiviteti", label: "Historia" },
  { to: "/historite", label: "Historitë" },
  { to: "/si-te-reagosh", label: "Si të reagosh" },
  { to: "/radha-jote", label: "Radha jote" },
] as const;
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <a href="#permbajtja" className="skip-link">
        Kalo te përmbajtja
      </a>
      <div className="header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <MessagesSquare aria-hidden="true" />
          <span>
            MOS E KALO<span className="brand-dot">.</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigimi kryesor">
          {navigation.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...("hash" in n ? { hash: n.hash } : {})}
              activeOptions={{ exact: true }}
              activeProps={{ className: "nav-active" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="header-cta">
          <Link to="/historite">
            Nis një histori <ArrowRight />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Mbyll menunë" : "Hap menunë"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Navigimi në telefon">
          {navigation.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...("hash" in n ? { hash: n.hash } : {})}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Link to="/" className="brand">
          <MessagesSquare />
          <span>MOS E KALO.</span>
        </Link>
        <p>Një projekt sensibilizues shkollor kundër bullizmit.</p>
        <Link to="/si-te-reagosh">
          Nuk ke pse ta përballosh vetëm. <ArrowRight size={17} />
        </Link>
      </div>
      <div className="container footer-bottom">
        <span>Përmbajtja informuese mbështetet te referencat.</span>
        <Link to="/aktiviteti">Historia</Link>
        <Link to="/radha-jote">Radha jote</Link>
        <Link to="/tema" hash="referencat">
          Referencat
        </Link>
        <span>Zgjedhja jote ka peshë.</span>
      </div>
    </footer>
  );
}
