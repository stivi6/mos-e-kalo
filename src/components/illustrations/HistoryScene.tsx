import { Character } from "@/components/illustrations/SchoolScene";

type HistorySceneKind =
  "welcome" | "research" | "researcher" | "community" | "international" | "digital";

const labels: Record<HistorySceneKind, string> = {
  welcome: "Ilustrim i nxënësve që po krijojnë hapësirë për përfshirje në shkollë",
  research: "Ilustrim editorial i një studiuesi dhe shënimeve të kërkimit, jo dokument arkivor",
  researcher:
    "Ilustrim simbolik i një studiuesi dhe historikut të kërkimit, jo portret autentik i Dan Olweus",
  community: "Ilustrim i komunitetit shkollor që bashkëpunon për parandalimin e bullizmit",
  international: "Ilustrim i nxënësve të lidhur përmes një rrjeti arsimor ndërkombëtar",
  digital: "Ilustrim i komunikimit online dhe mbështetjes mes nxënësve",
};

export function HistoryScene({ kind }: { kind: HistorySceneKind }) {
  return (
    <svg
      viewBox="0 0 640 380"
      role="img"
      aria-label={labels[kind]}
      className={`school-scene history-scene history-scene-${kind}`}
    >
      <path d="M25 310H619" className="scene-line" />
      <path
        d="M78 93V310M564 68V310M78 93H262V241H78M93 109H246V225H93M169 109V225M93 169H246"
        className="architecture"
      />
      <path d="M39 314Q126 299 231 314T606 313L599 326H40Z" className="ground" />

      {kind === "research" ? (
        <>
          <Character x={145} y={112} variant={1} scale={0.88} />
          <path d="M247 205h220v105H247z" className="history-table" />
          <path d="M282 189l111-41 31 86-111 40z" className="history-paper history-paper-one" />
          <path d="M306 190l68-24m-59 42l83-29m-73 47l67-23" className="history-ink" />
          <path d="M412 162l52 74m-42-82l52 74" className="history-pencil" />
          <rect x="436" y="95" width="93" height="62" rx="4" className="history-folder" />
          <path d="M451 113h60m-60 12h48m-48 12h54" className="history-ink" />
        </>
      ) : kind === "researcher" ? (
        <>
          <Character x={166} y={109} variant={1} scale={0.9} />
          <rect x="275" y="74" width="238" height="213" rx="8" className="history-folder" />
          <path d="M305 115h177M305 179h177M305 244h177" className="history-ink" />
          <circle cx="305" cy="115" r="7" className="history-node" />
          <circle cx="305" cy="179" r="7" className="history-node" />
          <circle cx="305" cy="244" r="7" className="history-node" />
          <text x="326" y="122" className="history-svg-date">
            1970
          </text>
          <text x="326" y="186" className="history-svg-date">
            1973
          </text>
          <text x="326" y="251" className="history-svg-date">
            1978
          </text>
          <path d="M452 100h33m-33 64h21m-21 65h30" className="history-ink" />
        </>
      ) : kind === "community" ? (
        <>
          <path d="M195 237h288v15H195M214 252v59M464 252v59" className="desk" />
          <Character x={195} y={110} variant={1} scale={0.78} pose="open" />
          <Character x={339} y={105} variant={0} scale={0.82} pose="open" />
          <Character x={485} y={112} variant={2} scale={0.78} pose="open" />
          <path d="M264 192h149v39H264z" className="history-paper" />
          <path d="M281 205h112m-112 12h86" className="history-ink" />
          <path
            d="M104 63h76q10 0 10 10v27q0 10-10 10h-20l-12 12v-12h-44q-10 0-10-10V73q0-10 10-10"
            className="chat-teal"
          />
          <path d="M122 84h41m-41 10h31" className="history-ink" />
        </>
      ) : kind === "international" ? (
        <>
          <circle cx="345" cy="158" r="77" className="history-globe" />
          <path
            d="M268 158h154m-77-77c-27 23-39 49-39 77s12 54 39 77m0-154c27 23 39 49 39 77s-12 54-39 77M282 119h126m-126 78h126"
            className="history-globe-lines"
          />
          <path
            d="M180 156c-43-48-77-43-102-20m382 19c40-47 73-43 98-18M197 213c-28 33-57 43-82 35m344-35c29 33 58 43 84 35"
            className="history-network"
          />
          <circle cx="78" cy="136" r="8" className="history-node" />
          <circle cx="558" cy="137" r="8" className="history-node" />
          <circle cx="115" cy="248" r="8" className="history-node" />
          <circle cx="525" cy="248" r="8" className="history-node" />
          <Character x={205} y={139} variant={1} scale={0.68} />
          <Character x={483} y={139} variant={2} scale={0.68} />
        </>
      ) : kind === "digital" ? (
        <>
          <Character x={156} y={126} variant={1} scale={0.77} />
          <rect x="252" y="58" width="146" height="250" rx="19" className="phone" />
          <rect x="262" y="78" width="126" height="205" rx="8" className="phone-screen" />
          <path d="M303 68h43" className="scene-line" />
          <rect x="273" y="97" width="100" height="40" rx="9" className="chat-coral" />
          <rect x="282" y="151" width="91" height="36" rx="9" className="chat-muted" />
          <rect x="273" y="202" width="100" height="50" rx="9" className="chat-teal" />
          <path d="M289 219h68m-68 12h52" className="history-ink" />
          <Character x={480} y={128} variant={2} scale={0.8} pose="open" />
        </>
      ) : (
        <>
          <Character x={153} y={107} variant={1} scale={0.91} />
          <Character x={307} y={105} variant={0} scale={0.94} pose="open" />
          <Character x={467} y={111} variant={2} scale={0.88} pose="open" />
          <path
            d="M217 54h158q11 0 11 11v35q0 11-11 11h-61l-19 18v-18h-78q-11 0-11-11V65q0-11 11-11"
            className="chat-teal"
          />
          <path d="M241 78h107m-107 13h75" className="history-ink" />
        </>
      )}
      <path
        d="M588 309v-51m0 20q-24-3-23-24q23-1 23 24m0-5q24-1 26-24q-25-1-26 24"
        className="plant"
      />
    </svg>
  );
}
