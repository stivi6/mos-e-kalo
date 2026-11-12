import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VoiceScene } from "@/components/illustrations/VoiceScene";

const GOOGLE_FORM_URL: string | null = null;
const description =
  "Ndaj mendimin, përvojat ose idetë e tua për një mjedis më të sigurt dhe më mbështetës për të gjithë.";

export const Route = createFileRoute("/radha-jote")({
  head: () => ({
    meta: [
      { title: "Radha jote | MOS E KALO" },
      { name: "description", content: description },
      { property: "og:title", content: "Radha jote | MOS E KALO" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RadhaJote,
});

function RadhaJote() {
  return (
    <section className="voice-page" aria-labelledby="voice-title">
      <div className="container voice-layout">
        <div className="voice-copy">
          <p className="eyebrow">Një hapësirë për zërin tënd</p>
          <h1 id="voice-title">Radha jote.</h1>
          <h2>Tani është momenti të dëgjohet edhe zëri yt.</h2>
          <p className="voice-description">
            Bullizmi është një problem që na prek të gjithëve, edhe kur nuk jemi drejtpërdrejt pjesë
            e tij. Mendimi yt ka rëndësi. Përmes këtij formulari mund të ndash pikëpamjen tënde,
            përvojat ose idetë e tua për mënyrën se si mund të krijojmë një mjedis më të sigurt dhe
            më mbështetës për të gjithë.
          </p>
          <p className="voice-reassurance">
            Nuk ka përgjigje të sakta apo të gabuara. E rëndësishme është të shprehesh.
          </p>
          <div className="voice-form-action">
            {GOOGLE_FORM_URL ? (
              <Button asChild size="lg">
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Plotëso formularin <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button size="lg" disabled aria-describedby="form-status">
                Plotëso formularin <ArrowUpRight aria-hidden="true" />
              </Button>
            )}
            {!GOOGLE_FORM_URL && (
              <p id="form-status" role="status">
                Formulari do të jetë i disponueshëm së shpejti.
              </p>
            )}
          </div>
        </div>
        <div className="voice-art">
          <VoiceScene />
          <p className="voice-art-caption">
            <MessageCircle aria-hidden="true" />
            Mendimi yt mund të hapë një bisedë të rëndësishme.
          </p>
        </div>
      </div>
    </section>
  );
}
