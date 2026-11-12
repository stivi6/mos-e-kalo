export function campaignHead(title: string, description: string) {
 return { meta: [{ title: `${title} — MOS E KALO` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} — MOS E KALO` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
