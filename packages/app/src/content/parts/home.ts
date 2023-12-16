import { IconName } from '@/types'

export const home = {
    seo_head: {
        title: 'Adam IT - Wij maken impact met IT',
        meta_name: 'Adam IT - Wij maken impact met IT',
        meta_content: 'Wij maken impact met IT',
    },
    hero: {
        title: 'Wij maken impact met IT',
        subtitle: "In verbinding met IT'ers & opdrachtgevers",
        image_url: 'onboarding.jpg',
        buttons: [
            { label: 'Werkgevers', href: '/werkgevers' },
            { label: 'Kandidaten', href: '/kandidaten' },
        ],
    },
    kpi_section: {
        tileTitle: 'Als IT’er organisaties verder helpen',
        tiles: [
            {
                title: 'Test Automation Engineering',
                description:
                    'Geautomatiseerde systeem opstellen om (complexe) software te laten testen.',
                icon: 'computer' as IconName,
                button_url: '',
            },
            {
                title: 'Software testing op afstand',
                description:
                    'The quick, brown fox jumps over a lazy dog, DJs flock by when MTV ax quiz prog.',
                icon: 'pin' as IconName,
                button_url: '',
            },
            {
                title: 'Interim een vaste tester inhuren',
                description:
                    'Een eigen vaste IT Professional inhuren als test automation engineer.',
                icon: 'person' as IconName,
                button_url: '',
            },
        ],
    },
    perks_section: {
        title: 'De voordelen van werken via Adam IT?',
        description:
            'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.',
        perks: [
            'Goed salaris, markt conform',
            'Altijd opdrachten genoeg',
            'Bawds jog, flick quartz, vex nymphs.',
        ],
        button_text: 'Meer over kandidaten',
        button_url: '',
        image_url: 'offer.jpg',
    },
    quote_section: {
        content:
            'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab.',
        name: 'Jan Verstegen',
    },
    jobs_section: {
        tiles: {
            title: 'Vacatures',
            caption:
                'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.',
            button_text: 'Alle vacatures',
            button_url: '',
        },
        information: {
            title: 'IT Professionals voor elkaar',
            subtitle: 'Wij verbinden IT’ers met opdrachtgevers',
            description:
                'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.',
            title_2: 'Op zoek naar een Test engineer?',
            description_2:
                'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim.',
            button_text: 'Plaats een opdracht',
            button_url: '',
        },
    },
    cases_section: {
        section_title: 'Recente cases',
        title: 'Geautomatiseerde test applicatie voor het UWV',
        description:
            'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.',
        perks: ['Testomgeving opgezet', 'Support', 'Langdurig traject'],
        button_text: 'Bekijk de cases',
        button_url: '',
        image_url: 'company-meeting.jpg',
        logo_url: 'uwv-logo.svg',
    },
}
