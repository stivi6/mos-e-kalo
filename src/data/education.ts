export const forms = [
 { name: 'Fizik', number: '01', description: 'Shtyrje, goditje, pengim i qëllimshëm ose dëmtim i sendeve personale.', detail: 'Përfshin shtyrje, goditje, pengim të qëllimshëm, dëmtim ose marrje të sendeve personale dhe sjellje të tjera fizike që frikësojnë ose lëndojnë.', icon: 'physical' },
 { name: 'Verbal', number: '02', description: 'Fyerje, nofka poshtëruese, kërcënime dhe tallje të përsëritura.', detail: 'Përfshin fyerje, nofka poshtëruese, tallje të përsëritura, kërcënime dhe komente që e ulin ose e turpërojnë dikë.', icon: 'verbal' },
 { name: 'Social', number: '03', description: 'Përjashtim nga grupi, thashetheme dhe izolim i qëllimshëm.', detail: 'Përfshin përjashtim të qëllimshëm nga grupi, përhapje thashethemesh, manipulim të marrëdhënieve dhe izolim të përsëritur.', icon: 'social' },
 { name: 'Kibernetik', number: '04', description: 'Mesazhe fyese dhe shpërndarje e përmbajtjes poshtëruese online.', detail: 'Ndodh përmes telefonit, rrjeteve sociale, aplikacioneve të komunikimit ose platformave online. Përfshin mesazhe fyese, kërcënime dhe publikim të materialeve personale pa leje.', icon: 'cyber' }
];
export const situations = [
 { text: 'Dy shokë nuk bien dakord për ndarjen e detyrave në një projekt. Të dy kanë mundësi të shprehin mendimin dhe debati ndodh vetëm atë ditë.', options: ['Konflikt i zakonshëm', 'Bullizëm', 'Nuk ka asnjë problem'], correct: 0, explanation: 'Një mosmarrëveshje mes personave me mundësi të barabarta për të folur nuk është automatikisht bullizëm. Megjithatë, duhet zgjidhur me respekt.' },
 { text: 'Një nxënës lihet vazhdimisht jashtë bisedave dhe grupeve të klasës, ndërsa disa të tjerë vendosin se kush mund të marrë pjesë.', options: ['Konflikt i zakonshëm', 'Sjellje që mund të jetë bullizëm social', 'Shaka'], correct: 1, explanation: 'Përsëritja dhe ndikimi i grupit mund të krijojnë pabarazi fuqie dhe përjashtim të vazhdueshëm. Situata duhet marrë seriozisht dhe vlerësuar në kontekst.' },
 { text: 'Dikush publikon një fotografi private pa lejen e personit. Është hera e parë që është vënë re.', options: ['Nuk ka rëndësi sepse ndodhi vetëm një herë', 'Sjellje e dëmshme që duhet trajtuar menjëherë', 'Konflikt i zakonshëm'], correct: 1, explanation: 'Një rast i vetëm mund të mos i plotësojë të gjitha kriteret e bullizmit, por mund të cenojë privatësinë dhe të shkaktojë dëm. Raportoje dhe kërko ndihmë.' }
];
export const ACTIVITY_DATE = '2026-11-18';
export const INTERNATIONAL_DATE = '2026-11-05';
export const helpEligible = (age: number) => age < 18;
