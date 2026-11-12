import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, ShieldCheck, MousePointer2, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SchoolScene } from "@/components/illustrations/SchoolScene";
import { FormCards, StoryCards, WitnessSection } from "@/components/campaign/Content";
import { campaignHead } from "@/lib/campaign-head";
export const Route = createFileRoute("/")({
  head: () =>
    campaignHead(
      "Zgjedhja jote ka peshë",
      "Fushatë sensibilizuese kundër bullizmit. Kupto temën dhe përjeto tri histori ku vendimet e tua ndryshojnë rrjedhën.",
    ),
  component: Home,
});
function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Ndërgjegjësim kundër bullizmit</div>
              <h1>
                Mos e kalo.
                <br />
                Bëhu pjesë e ndryshimit.
              </h1>
              <p className="hero-lead">
                Bullizmi nuk është shaka dhe nuk duhet të bëhet pjesë normale e jetës shkollore.
                Kupto si shfaqet, zbulo ndikimin e tij dhe provo si mund të reagosh në situata të
                ndryshme.
              </p>
              <div className="actions">
                <Button asChild size="lg">
                  <Link to="/aktiviteti">
                    Eksploro historinë <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/historite">Përjeto historitë</Link>
                </Button>
              </div>
              <p className="hero-note">
                <ShieldCheck size={14} /> Pa gjykim. Pa pikë. Vetëm zgjedhje dhe reflektim.
              </p>
            </div>
            <div className="hero-art">
              <SchoolScene />
              <p className="art-caption">
                Një hap i vogël. <span>Një ndryshim i rëndësishëm.</span>
              </p>
            </div>
          </div>
          <div className="hero-bottom">
            <span>
              <MousePointer2 size={15} />
              <strong>3 histori interaktive</strong> · vendime me pasoja reale
            </span>
            <span>
              Një mjedis më i sigurt fillon me ne. <ArrowDown size={15} />
            </span>
          </div>
        </div>
      </section>
      <section className="section forms-band">
        <div className="container">
          <div className="section-top">
            <div>
              <div className="eyebrow">Njihe për të mos e normalizuar</div>
              <h2>
                Katër forma.
                <br />
                Një problem që duhet njohur.
              </h2>
            </div>
            <p>
              Bullizmi nuk duket gjithmonë njësoj. Të kuptosh si shfaqet është hapi i parë për të
              reaguar.
            </p>
          </div>
          <FormCards />
        </div>
      </section>
      <WitnessSection />
      <section className="section stories-band">
        <div className="container">
          <div className="section-top">
            <div>
              <div className="eyebrow">Nga vëzhgues në pjesëmarrës</div>
              <h2>Vendimet ndryshojnë historinë.</h2>
            </div>
            <p>Tri situata të përditshme. Ti vendos çfarë ndodh më pas.</p>
          </div>
          <StoryCards />
        </div>
      </section>
      <section>
        <div className="container activity-strip">
          <div className="date-block">
            <strong>18</strong>
            <span>NËNTOR 2026</span>
          </div>
          <div className="activity-strip-copy">
            <p className="eyebrow">Në shkollën tonë</p>
            <h2>Aktivitet sensibilizues kundër bullizmit.</h2>
            <p>
              Postera, slogane, ese, poezi dhe tregime. Zëri yt ka vend në aktivitetin e shkollës.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/aktiviteti">
              <CalendarDays /> Shiko aktivitetin e shkollës
            </Link>
          </Button>
        </div>
      </section>
      <section className="final-band">
        <div className="container final-inner">
          <div>
            <h2>Mos e kalo. Mos e normalizo.</h2>
            <p>Kuptoje. Reago me përgjegjësi.</p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link to="/si-te-reagosh">
              Një hap që mund të bësh sot <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
