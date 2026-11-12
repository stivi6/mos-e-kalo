import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, MessageCircle, School, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HistoryTimeline } from "@/components/campaign/HistoryTimeline";
import { HistoryScene } from "@/components/illustrations/HistoryScene";
import { ACTIVITY_DATE, INTERNATIONAL_DATE } from "@/data/education";
import { historySources, type HistorySourceId } from "@/data/history";

const description =
  "Zbulo si nisi studimi i bullizmit, kontributin e Dan Olweus, zhvillimin e përpjekjeve për parandalim dhe krijimin e Ditës Ndërkombëtare nga UNESCO.";

export const Route = createFileRoute("/aktiviteti")({
  head: () => ({
    meta: [
      { title: "Historia e ndërgjegjësimit kundër bullizmit | MOS E KALO" },
      { name: "description", content: description },
      { property: "og:title", content: "Historia e ndërgjegjësimit kundër bullizmit | MOS E KALO" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <>
      <section className="history-hero">
        <div className="container history-hero-grid">
          <div className="history-hero-copy">
            <p className="eyebrow">Historia e ndërgjegjësimit</p>
            <h1>Kur bullizmi nuk mund të injorohej më.</h1>
            <p className="history-lead">
              Për shumë vite, sjelljet bullizuese në shkolla shpesh trajtoheshin si shaka, konflikte
              të zakonshme apo diçka që nxënësit duhej ta përballonin vetë. Me kalimin e kohës,
              kërkimet shkencore dhe përpjekjet për parandalim treguan se bullizmi është një problem
              serioz që kërkon vëmendjen dhe përgjegjësinë e të gjithëve.
            </p>
            <div className="actions">
              <Button asChild size="lg">
                <Link to="/aktiviteti" hash="rrjedha">
                  Ndiq historinë <ArrowDown />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/aktiviteti" hash="sot">
                  Pse ka rëndësi sot?
                </Link>
              </Button>
            </div>
            <p className="history-hero-note">
              Nga kërkimet e para shkencore deri te ndërgjegjësimi ndërkombëtar.
            </p>
          </div>
          <div className="history-hero-art">
            <HistoryScene kind="welcome" />
            <p className="art-caption">
              Të kuptosh problemin është hapi i parë për të ndryshuar mënyrën si sillemi.
            </p>
          </div>
        </div>
      </section>

      <section className="history-timeline-section" id="rrjedha">
        <div className="container">
          <div className="history-section-heading">
            <p className="eyebrow">Një histori ndër vite</p>
            <h2>Nga kërkimi te përgjegjësia e përbashkët.</h2>
            <p>
              Bullizmi nuk u bë një çështje ndërkombëtare brenda një dite. Pas tij qëndrojnë vite
              kërkimesh, përpjekjesh dhe ndërgjegjësimi.
            </p>
          </div>
          <HistoryTimeline />
        </div>
      </section>

      <section className="history-chapter">
        <div className="container history-split">
          <div>
            <p className="eyebrow">Fillimet</p>
            <h2>Gjithçka nisi me një pyetje: pse ndodh kjo në shkolla?</h2>
            <p>
              Bullizmi ka ekzistuar shumë kohë përpara se të studiohej në mënyrë shkencore.
              Megjithatë, për një kohë të gjatë, sjellje të tilla nuk trajtoheshin si një problem më
              vete. Talljet, përjashtimi dhe agresioni mes nxënësve shpesh konsideroheshin pjesë e
              zakonshme e jetës shkollore.
            </p>
            <p>
              Në vitet 1970, studiues në vendet nordike filluan ta shqyrtonin këtë dukuri më nga
              afër. Vëmendja u përqendrua te mënyra si shfaqej bullizmi, sa shpesh ndodhte dhe çfarë
              ndikimi kishte te nxënësit.
            </p>
            <aside className="history-quote">
              Një problem nuk mund të zgjidhet nëse fillimisht nuk pranohet se ekziston.
            </aside>
            <p className="history-source-inline">
              Për lexim të mëtejshëm: <HistorySource id="olweus" />
            </p>
          </div>
          <HistoryScene kind="research" />
        </div>
      </section>

      <section className="history-chapter history-chapter-tint">
        <div className="container history-split history-split-reverse">
          <HistoryScene kind="researcher" />
          <div>
            <p className="eyebrow">Një nga pionierët e kërkimit</p>
            <h2>Dan Olweus: kur bullizmi filloi të studiohej shkencërisht.</h2>
            <p>
              Dan Olweus ishte një psikolog dhe studiues, i njohur për kontributin e tij themelor në
              studimin e bullizmit në shkolla.
            </p>
            <p>
              Në vitin 1970, ai nisi një studim të gjerë mbi marrëdhëniet mes nxënësve dhe problemet
              e bullizmit. Studimi përfshiu rreth 1 000 djem në Stokholm të Suedisë.
            </p>
            <p>
              Puna e Olweus mbi bullizmin dhe marrëdhëniet mes nxënësve u botua në Suedi në vitin
              1973. Më vonë, në vitin 1978, libri u botua në Shtetet e Bashkuara me titullin{" "}
              <em>Aggression in the Schools: Bullies and Whipping Boys</em>.
            </p>
            <p>
              Puna e Olweus ndihmoi në krijimin e një baze shkencore për të kuptuar bullizmin si një
              problem që kërkon studim dhe ndërhyrje, jo si një sjellje që duhet pranuar si normale.
            </p>
            <div className="history-facts" aria-label="Pika historike të kërkimit të Dan Olweus">
              <p>
                <strong>1970</strong>
                <span>Fillimi i studimit shkencor</span>
              </p>
              <p>
                <strong>1973</strong>
                <span>Botimi i parë në Skandinavi</span>
              </p>
              <p>
                <strong>1978</strong>
                <span>Botimi në Shtetet e Bashkuara</span>
              </p>
            </div>
            <blockquote className="history-quote">
              Bullizmi filloi të shihej jo thjesht si një problem mes nxënësve, por si një dukuri që
              duhej kuptuar dhe parandaluar.
            </blockquote>
            <p className="history-source-inline">
              Burimet: <HistorySource id="olweus" label="PubMed" /> dhe{" "}
              <HistorySource id="olweus-history" label="historiku i programit Olweus" />
            </p>
          </div>
        </div>
      </section>

      <section className="history-chapter">
        <div className="container history-split">
          <div>
            <p className="eyebrow">Nga kërkimi te veprimi</p>
            <h2>Kur studimi u kthye në përpjekje konkrete.</h2>
            <p>
              Në Norvegji, shqetësimi për bullizmin në shkolla çoi në një reagim më të organizuar.
            </p>
            <p>
              Gjatë vitit shkollor 1983–1984, pas rasteve tragjike që tronditën vendin dhe tërhoqën
              vëmendjen te pasojat e bullizmit, u zhvillua fushata e parë kombëtare kundër bullizmit
              në shkolla.
            </p>
            <p>
              Shkollave iu shpërndanë materiale informuese që shpjegonin çfarë ishte bullizmi, si
              mund të dallohej dhe çfarë masash mund të merreshin për ta parandaluar.
            </p>
            <p>
              Në vitin 1983 u zhvillua Programi i Parandalimit të Bullizmit Olweus, i cili synonte
              të përfshinte të gjithë komunitetin shkollor në krijimin e një mjedisi më të sigurt.
            </p>
            <p>
              Programi nuk përqendrohej vetëm te sjellja e një nxënësi. Ai synonte të përfshinte
              shkollën, klasat, mësuesit, familjet dhe vetë nxënësit.
            </p>
          </div>
          <div className="history-roles">
            <article>
              <School aria-hidden="true" />
              <h3>Shkolla</h3>
              <p>Krijimi i rregullave të qarta dhe reagimi ndaj rasteve të bullizmit.</p>
            </article>
            <article>
              <MessageCircle aria-hidden="true" />
              <h3>Mësuesit dhe familjet</h3>
              <p>Bashkëpunimi për të identifikuar problemet dhe për të mbështetur nxënësit.</p>
            </article>
            <article>
              <ShieldCheck aria-hidden="true" />
              <h3>Nxënësit</h3>
              <p>Ndërtimi i marrëdhënieve me respekt dhe mospranimi i sjelljeve poshtëruese.</p>
            </article>
            <blockquote className="history-quote">
              Parandalimi nuk është përgjegjësi e vetëm një personi. Është përgjegjësi e gjithë
              komunitetit shkollor.
            </blockquote>
            <p className="history-source-inline">
              Burimet: <HistorySource id="norway" label="qeveria norvegjeze" />,{" "}
              <HistorySource id="olweus-history" label="historiku i programit Olweus" /> dhe{" "}
              <HistorySource
                id="olweus-program"
                label="Programi i Parandalimit të Bullizmit Olweus"
              />
            </p>
          </div>
        </div>
      </section>

      <section className="history-chapter history-chapter-tint">
        <div className="container history-split history-split-reverse">
          <HistoryScene kind="international" />
          <div>
            <p className="eyebrow">Nga një problem lokal në një shqetësim ndërkombëtar</p>
            <h2>Një çështje që nuk njihte kufij.</h2>
            <p>
              Me kalimin e viteve, kërkimet mbi bullizmin u zgjeruan përtej vendeve nordike.
              Studiues dhe institucione të ndryshme nisën të shqyrtonin ndikimin e tij në shkolla
              dhe në jetën e fëmijëve e të të rinjve.
            </p>
            <p>
              U bë gjithnjë e më e qartë se bullizmi nuk ishte një problem i kufizuar në një shtet
              apo në një sistem të vetëm arsimor.
            </p>
            <p>
              Ai lidhej me të drejtën për arsimim, mirëqenien, sigurinë dhe mundësinë e çdo nxënësi
              për të marrë pjesë në jetën shkollore pa frikë nga poshtërimi apo përjashtimi.
            </p>
            <p>
              Kështu, parandalimi i dhunës dhe bullizmit në shkolla filloi të kërkonte bashkëpunim
              më të gjerë mes institucioneve, familjeve, organizatave dhe komuniteteve arsimore.
            </p>
            <blockquote className="history-quote">
              Një shkollë e sigurt nuk është privilegj. Është një e drejtë që duhet të respektohet.
            </blockquote>
            <p className="history-source-inline">
              Për lexim të mëtejshëm: <HistorySource id="unesco-day" />
            </p>
          </div>
        </div>
      </section>

      <section className="history-unesco">
        <div className="container history-unesco-grid">
          <div>
            <p className="eyebrow">Një moment i rëndësishëm</p>
            <h2>2019: ndërgjegjësimi merr një dimension ndërkombëtar.</h2>
            <p>
              Në nëntor të vitit 2019, shtetet anëtare të UNESCO-s miratuan krijimin e Ditës
              Ndërkombëtare kundër Dhunës dhe Bullizmit në Shkollë, përfshirë Bullizmin Kibernetik.
            </p>
            <p>
              Vendimi u miratua gjatë Sesionit të 40-të të Konferencës së Përgjithshme të UNESCO-s.
            </p>
            <p>
              Qëllimi ishte të tërhiqej vëmendja ndërkombëtare ndaj dhunës dhe bullizmit në shkolla
              dhe të nxitej bashkëpunimi për krijimin e mjediseve shkollore të sigurta.
            </p>
            <p>
              Kjo ditë lidhet me njohjen e faktit se dhuna dhe bullizmi cenojnë të drejtën e
              fëmijëve dhe adoleshentëve për arsimim, shëndet dhe mirëqenie.
            </p>
            <div className="history-facts history-facts-dates">
              <p>
                <strong>5</strong>
                <span>
                  Nëntor 2020
                  <small>Shënimi i parë ndërkombëtar</small>
                </span>
              </p>
              <p>
                <strong>ÇDO VIT</strong>
                <span>
                  Të enjten e parë të nëntorit
                  <small>
                    Në vitin 2026, më <time dateTime={INTERNATIONAL_DATE}>5 nëntor</time>
                  </small>
                </span>
              </p>
            </div>
            <p>
              <strong>Pse përfshihet edhe bullizmi kibernetik?</strong> Sepse bullizmi nuk kufizohet
              më vetëm në ambientet fizike të shkollës. Ai mund të vazhdojë përmes rrjeteve sociale,
              aplikacioneve të komunikimit dhe platformave online.
            </p>
            <blockquote className="history-quote">
              Mesazhi është i qartë: asnjë nxënës nuk duhet të ndihet i pasigurt në vendin ku mëson.
            </blockquote>
            <p className="history-source-inline">
              Burimi:{" "}
              <HistorySource id="unesco-approval" label="UNESCO — miratimi i Ditës Ndërkombëtare" />
            </p>
          </div>
          <HistoryScene kind="international" />
        </div>
      </section>

      <section className="history-chapter" id="sot">
        <div className="container history-split">
          <div>
            <p className="eyebrow">Sot</p>
            <h2>Bullizmi ndryshon formë. Pasojat mbeten reale.</h2>
            <p>
              Sot, bullizmi mund të shfaqet në shumë mënyra. Ai nuk ndodh vetëm në korridoret apo
              klasat e shkollës. Me përdorimin e teknologjisë, disa sjellje mund të vazhdojnë edhe
              jashtë orarit mësimor.
            </p>
            <p>
              Bullizmi kibernetik mund të shfaqet përmes mesazheve fyese, publikimeve poshtëruese,
              shpërndarjes së përmbajtjeve pa leje dhe përjashtimit të qëllimshëm nga grupet online.
            </p>
            <p>Edhe kur ndodh përmes një ekrani, ndikimi i tij mund të jetë real.</p>
            <blockquote className="history-quote">
              Fakti që diçka ndodh online nuk do të thotë se është më pak e rëndësishme.
            </blockquote>
            <p className="history-source-inline">
              Për lexim të mëtejshëm: <HistorySource id="unesco-day" />
            </p>
            <HistoryScene kind="digital" />
          </div>
          <div className="history-today">
            <article>
              <School aria-hidden="true" />
              <h3>Në shkollë</h3>
              <p>
                Përjashtimi i vazhdueshëm, talljet, kërcënimet dhe sjelljet që synojnë të
                poshtërojnë një nxënës.
              </p>
            </article>
            <article>
              <MessageCircle aria-hidden="true" />
              <h3>Në internet</h3>
              <p>
                Mesazhe fyese, komente poshtëruese, shpërndarje e përmbajtjeve pa leje dhe sulme të
                përsëritura online.
              </p>
            </article>
            <article>
              <BookOpen aria-hidden="true" />
              <h3>Në marrëdhëniet shoqërore</h3>
              <p>
                Përhapja e thashethemeve, izolimi dhe përdorimi i ndikimit të grupit për të lënduar
                dikë.
              </p>
            </article>
            <article className="history-impact">
              <h3>Pse duhet të na shqetësojë?</h3>
              <p>
                Bullizmi mund të ndikojë te ndjenja e sigurisë, vetëbesimi, marrëdhëniet shoqërore,
                mirëqenia emocionale dhe përvoja shkollore e një nxënësi.
              </p>
              <p>
                Nuk duhet ta minimizojmë me shprehje si “ishte vetëm një shaka” kur dikush po
                përjeton një sjellje që e lëndon vazhdimisht.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="history-action">
        <div className="container history-action-grid">
          <div>
            <p className="eyebrow">Pse duhet ta njohim këtë histori?</p>
            <h2>Sepse ndryshimi fillon kur nuk e pranojmë më si normale.</h2>
            <p>
              Historia e ndërgjegjësimit kundër bullizmit na tregon se mënyra si e kuptojmë një
              problem mund të ndryshojë me kalimin e kohës.
            </p>
            <p>
              Sjellje që dikur minimizoheshin sot studiohen, diskutohen dhe trajtohen si çështje që
              kërkojnë përgjegjësi. Por ndërgjegjësimi nuk mjafton nëse nuk shoqërohet me veprime.
            </p>
            <p>Secili mund të ndikojë në mënyrën si trajtohen të tjerët:</p>
            <ul>
              <li>Duke mos marrë pjesë në tallje apo poshtërime.</li>
              <li>Duke mos shpërndarë përmbajtje fyese.</li>
              <li>Duke mbështetur personin që po përjeton bullizëm.</li>
              <li>Duke kërkuar ndihmë kur situata vazhdon.</li>
              <li>Duke mos e konsideruar heshtjen si zgjidhje të vetme.</li>
            </ul>
            <blockquote className="history-quote">
              Historia na tregon se ndryshimi fillon kur një problem nuk pranohet më si normal.
            </blockquote>
            <blockquote className="history-quote">
              Nuk mund ta ndryshojmë të kaluarën, por mund të ndikojmë në mënyrën si trajtojmë
              njëri-tjetrin sot.
            </blockquote>
            <Button asChild size="lg">
              <Link to="/si-te-reagosh">
                Kupto si të reagosh <ArrowRight />
              </Link>
            </Button>
          </div>
          <HistoryScene kind="community" />
        </div>
      </section>

      <section className="history-local">
        <div className="container history-local-inner">
          <div className="history-local-copy">
            <p className="eyebrow">Në shkollën tonë</p>
            <h2>Ndërgjegjësimi vazhdon edhe në komunitetin tonë.</h2>
            <p>
              Më <time dateTime={ACTIVITY_DATE}>18 nëntor 2026</time>, në shkollën tonë do të
              zhvillohet një aktivitet sensibilizues kundër bullizmit.
            </p>
            <p>
              Nxënësit ftohen të kontribuojnë përmes punimeve të ndryshme krijuese dhe
              ndërgjegjësuese.
            </p>
            <h3>Si mund të marrësh pjesë?</h3>
            <ul>
              <li>Postera dhe vizatime kundër bullizmit.</li>
              <li>Slogane dhe mesazhe sensibilizuese.</li>
              <li>Ese.</li>
              <li>Poezi.</li>
              <li>Tregime.</li>
            </ul>
            <p>
              Për organizimin dhe dorëzimin e punimeve, nxënësit mund të komunikojnë me zysh
              Fatjolën, sipas njoftimit të shkollës.
            </p>
            <p className="history-local-note">
              Ky është një aktivitet i veçantë i shkollës, jo data e Ditës Ndërkombëtare kundër
              Dhunës dhe Bullizmit në Shkollë.
            </p>
          </div>
          <div className="history-local-date" aria-label="Aktiviteti i shkollës më 18 nëntor 2026">
            <span>Aktivitet shkollor</span>
            <strong>18</strong>
            <span>NËNTOR 2026</span>
          </div>
        </div>
      </section>

      <section className="history-references" id="burimet">
        <div className="container">
          <p className="eyebrow">Për lexim të mëtejshëm</p>
          <h2>Burimet dhe referencat</h2>
          <p className="history-references-intro">
            Përmbajtja historike e kësaj faqeje mbështetet në dokumente dhe materiale kërkimore nga
            institucione dhe studiues që kanë kontribuar në studimin dhe parandalimin e bullizmit.
          </p>
          <ol className="history-source-list">
            {historySources.map((item) => (
              <li key={item.id}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function HistorySource({ id, label }: { id: HistorySourceId; label?: string }) {
  const item = historySources.find((source) => source.id === id);
  if (!item) throw new Error(`Missing history source: ${id}`);

  return (
    <a href={item.url} target="_blank" rel="noreferrer">
      {label ?? item.name}
    </a>
  );
}
