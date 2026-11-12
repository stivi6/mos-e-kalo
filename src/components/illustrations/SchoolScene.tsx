type CharacterProps = { x: number; y: number; variant?: number; scale?: number; pose?: 'open' | 'quiet' };
export function Character({ x, y, variant = 0, scale = 1, pose = 'quiet' }: CharacterProps) {
 return <g transform={`translate(${x} ${y}) scale(${scale})`} className={`character character-${variant}`}>
  <path d="M-19 118 L-23 194 L-4 194 L5 139 L13 194 L32 194 L24 118Z" className="trousers"/>
  <path d="M-24 189L-4 189L-2 201L-34 201Q-36 194-24 189 M12 189L31 189L41 201L12 201Z" className="shoes"/>
  <path d="M-13 40Q-33 44-35 65L-27 126Q0 134 29 124L32 67Q26 44 13 40Z" className="clothing"/>
  <path d="M-9 30L-9 46Q0 55 11 45L10 28" className="skin"/>
  <ellipse cx="0" cy="15" rx="19" ry="25" className="skin"/>
  <path d={variant % 2 ? 'M-20 21Q-27-12-2-14Q25-14 21 23L16 7Q1 11-12-1L-15 23Z' : 'M-19 17Q-30-8-10-16Q17-23 23 2L19 17L12 1Q-1 12-16 3Z'} className="hair"/>
  <path d="M-8 16h2 M7 16h2 M0 19l-2 7h4 M-5 32q5 3 10-1" className="face-lines"/>
  {pose === 'open' ? <><path d="M-27 56L-42 96L-58 86" className="sleeve"/><path d="M25 55L46 80L76 64" className="sleeve"/><path d="M75 64l12-6m-12 6l13 1" className="hand"/></> : <><path d="M-28 57L-39 95L-28 132 M26 58L38 93L27 130" className="sleeve"/><path d="M-28 132l1 9M27 130l-2 10" className="hand"/></>}
  <path d="M-11 57L-6 87M10 57L7 87" className="seam"/>
 </g>;
}
export function SchoolScene({ kind = 'community', compact = false }: { kind?: 'community' | 'screenshot' | 'grupi' | 'klasa' | 'support'; compact?: boolean }) {
 return <svg viewBox="0 0 640 380" role="img" aria-label={kind === 'screenshot' ? 'Bisedë në telefon dhe nxënës që ofrojnë mbështetje' : 'Nxënës të ilustruar në shkollë, njëri i afrohet personit jashtë grupit'} className={`school-scene ${compact ? 'compact' : ''}`}>
  <path d="M25 310H619" className="scene-line"/><path d="M78 93V310M564 68V310M78 93H262V241H78M93 109H246V225H93M169 109V225M93 169H246" className="architecture"/>
  <path d="M505 98h72v100h-72z M518 117h44M518 132h30M518 147h37" className="notice"/>
  <path d="M39 314Q126 299 231 314T606 313L599 326H40Z" className="ground"/>
  {kind === 'screenshot' ? <><rect x="241" y="47" width="165" height="266" rx="18" className="phone"/><rect x="250" y="67" width="147" height="224" rx="6" className="phone-screen"/><path d="M299 57h48" className="scene-line"/><rect x="263" y="88" width="120" height="44" rx="8" className="chat-coral"/><rect x="263" y="145" width="98" height="34" rx="8" className="chat-muted"/><rect x="279" y="193" width="104" height="50" rx="8" className="chat-teal"/><text x="274" y="114" className="svg-small">Grupi i klasës</text><text x="289" y="215" className="svg-small">A je mirë?</text><Character x={167} y={127} variant={1} scale={.91}/><Character x={474} y={121} variant={2} scale={.94} pose="open"/></> : <>
   <Character x={155} y={108} variant={1} scale={1.02}/><Character x={310} y={107} variant={0} scale={1.03} pose="open"/><Character x={423} y={109} variant={2}/><Character x={501} y={130} variant={3} scale={.91}/>
   {kind === 'grupi' && <><path d="M234 228h290v15H234M250 243v71M504 243v71" className="desk"/><path d="M327 196h60l-7 31h-62z" className="laptop"/></>}
   {kind === 'klasa' && <><rect x="237" y="43" width="215" height="56" rx="3" className="chat-teal"/><text x="260" y="77" className="svg-small">Lëreni të përfundojë.</text></>}
   {(kind === 'community' || kind === 'support') && <><g className="speech-one"><path d="M246 37h132q12 0 12 12v39q0 12-12 12h-59l-17 17V100h-56q-12 0-12-12V49q0-12 12-12" className="chat-teal"/><text x="256" y="75" className="svg-label">Hajde me ne.</text></g><g className="speech-two"><path d="M86 34h94q10 0 10 10v22q0 10-10 10h-25l-13 13V76H86q-10 0-10-10V44q0-10 10-10" className="chat-coral"/><path d="M107 55h5m12 0h5m12 0h5" className="scene-line"/></g></>}
  </>}
  <path d="M588 309v-51m0 20q-24-3-23-24q23-1 23 24m0-5q24-1 26-24q-25-1-26 24" className="plant"/>
 </svg>;
}
