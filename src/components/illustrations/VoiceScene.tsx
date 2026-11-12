import { Character } from "@/components/illustrations/SchoolScene";

export function VoiceScene() {
  return (
    <svg
      viewBox="0 0 640 380"
      role="img"
      aria-label="Dy nxënës ndajnë mendimet e tyre dhe dëgjojnë njëri-tjetrin"
      className="school-scene voice-scene"
    >
      <path d="M25 310H619" className="scene-line" />
      <path
        d="M78 93V310M564 68V310M78 93H262V241H78M93 109H246V225H93M169 109V225M93 169H246"
        className="architecture"
      />
      <path d="M39 314Q126 299 231 314T606 313L599 326H40Z" className="ground" />
      <Character x={158} y={115} variant={1} scale={0.88} pose="open" />
      <Character x={483} y={115} variant={2} scale={0.88} pose="open" />
      <path
        d="M246 48h187q12 0 12 12v74q0 12-12 12h-79l-22 20v-20h-86q-12 0-12-12V60q0-12 12-12"
        className="voice-bubble"
      />
      <path d="M273 80h128m-128 18h105m-105 18h77" className="voice-words" />
      <path d="M218 185q-20 21-17 48m221-48q20 21 17 48" className="voice-signal" />
      <circle cx="201" cy="241" r="5" className="history-node" />
      <circle cx="439" cy="241" r="5" className="history-node" />
      <path
        d="M588 309v-51m0 20q-24-3-23-24q23-1 23 24m0-5q24-1 26-24q-25-1-26 24"
        className="plant"
      />
    </svg>
  );
}
