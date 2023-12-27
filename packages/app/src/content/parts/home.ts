import { IconName } from '@/types'

export const home = {
    seo_head: {
        title: 'Adam IT - Wij maken impact met IT',
        name: 'Adam IT - Wij maken impact met IT',
        description:
            'Adam IT helpt organisaties bij het vinden van de juiste IT-opdrachten en ondersteunt werkgevers bij het vinden van geschikte IT-kandidaten. Ontdek onze diensten en mogelijkheden.',
        opengraph: {
            title: 'Adam IT - Wij maken impact met IT',
            description:
                'Adam IT helpt organisaties bij het vinden van de juiste IT-opdrachten en ondersteunt werkgevers bij het vinden van geschikte IT-kandidaten. Ontdek onze diensten en mogelijkheden.',
            url: 'https://www.adamit.nl',
        },
        twitter: {
            title: 'Adam IT - Wij maken impact met IT',
            description:
                'Adam IT helpt organisaties bij het vinden van de juiste IT-opdrachten en ondersteunt werkgevers bij het vinden van geschikte IT-kandidaten. Ontdek onze diensten en mogelijkheden.',
            url: 'https://www.adamit.nl',
        },
    },
    hero: {
        title: "IT'ers en opdrachtgevers in verbinding",
        subtitle: 'Maak impact met IT',
        image_url: 'onboarding.jpg',
        image_alt:
            "Samenwerkende collega's van Adam IT in overleg, te zien in de hero van de startpagina.",
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
                    'Een geautomatiseerd systeem inrichten om complexe software automatisch te testen',
                icon: 'computer' as IconName,
                button_url: '/kandidaten',
            },
            {
                title: 'Software testing op afstand',
                description:
                    'Jouw software op afstand laten testen door middel van geautomatiseerde testsoftware door een van onze professionals',
                icon: 'pin' as IconName,
                button_url: '/kandidaten',
            },
            {
                title: 'Freelance of vaste inhuur',
                description:
                    'Het samenbrengen van werkgevers en opdrachtgevers met IT-professionals om samenwerkingen aan te gaan op Freelance en vaste dienst verband',
                icon: 'person' as IconName,
                button_url: '/kandidaten',
            },
        ],
    },
    perks_section: {
        title: 'De voordelen van werken via Adam IT?',
        description: 'Krijg toegang tot een breed netwerk.',
        perks: [
            'Vind dè geschikte opdracht',
            'Geheel vrijblijvend en gratis registratie',
            'Kom in contact met jouw kandidaat',
        ],
        button_text: 'Meer over kandidaten',
        button_url: '/kandidaten',
        image_url: 'offer.jpg',
        image_alt:
            'Ontdek de voordelen van werken via Adam IT: vind de geschikte opdracht, profiteer van geheel vrijblijvende en gratis registratie, en kom in contact met jouw ideale kandidaat.',
    },
    quote_section: {
        content: 'Wij van ADAM IT adviseren ADAM IT',
        name: 'Adam El Hajjami',
    },
    jobs_section: {
        tiles: {
            title: 'Vacatures',
            caption: 'Bezoek onze vacaturepagina voor nog meer vacatures',
            button_text: 'Bekijk alle vacatures',
            button_url: '/vacatures',
        },
        information: {
            content: [
                {
                    title: 'IT Professionals voor elkaar',
                    subtitle: 'Wij verbinden IT’ers met opdrachtgevers',
                    description:
                        'Heb je een openstaande IT-positie? Kom in contact met ADAM IT en plaats je vacature en bereik duizenden gekwalificeerde kandidaten. Beschrijf de func+e, vereisten en bedrijfscultuur. Wij zorgen ervoor dat je vacature wordt gezien door de juiste mensen.',
                },
                {
                    title: 'Op zoek naar een Test engineer?',
                    description:
                        'Ben je op zoek naar een Test engineer die jouw software of applicatie grondig kan testen op kwaliteit, functionaliteit en gebruiksvriendelijkheid? Dan ben je bij ADAM IT aan het juiste adres. ADAM IT is een online platform waar je eenvoudig en snel de beste Test engineers kunt vinden of plaatsen.',
                },
            ],
            button_text: 'Plaats een opdracht',
            button_url: '/werkgevers',
        },
    },
    cases_section: {
        section_title: 'Recente cases',
        title: 'Trainingen bij de UWV',
        description:
            'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.',
        perks: [
            'De juiste expertise in huis',
            'Vraagbaak voor test vraagstukken',
            'Begeleiding tot volwaardig professional',
        ],
        button_text: 'Bekijk de cases',
        button_url: '/kandidaten',
        image_url: 'company-meeting.jpg',
        image_alt:
            'Een professioneel team in actie - Recent uitgevoerde cases illustreren onze expertise in het oplossen van testvraagstukken en het begeleiden van individuen naar volwaardige professionals.',
        logo_url: 'uwv-logo.svg',
        logo_alt:
            'Officieel logo van het UWV, de uitvoeringsorganisatie van de overheid voor werknemersverzekeringen. Representatief voor samenwerking en dienstverlening.',
    },
}
