import { IconName } from '@/types'

export const employees = {
    seo_head: {
        title: 'Vind geschikte kandidaten - ADAM IT',
        name: 'Vind geschikte kandidaten - ADAM IT',
        description:
            'Ontdek getalenteerde IT-professionals voor uw organisatie. ADAM IT helpt werkgevers bij het vinden van geschikte kandidaten voor IT-opdrachten.',
        opengraph: {
            title: 'Vind geschikte kandidaten - ADAM IT',
            description:
                'Ontdek getalenteerde IT-professionals voor uw organisatie. ADAM IT helpt werkgevers bij het vinden van geschikte kandidaten voor IT-opdrachten.',
            url: 'https://www.adamit.nl/werkgevers',
        },
        twitter: {
            title: 'Vind geschikte kandidaten - ADAM IT',
            description:
                'Ontdek getalenteerde IT-professionals voor uw organisatie. ADAM IT helpt werkgevers bij het vinden van geschikte kandidaten voor IT-opdrachten.',
            url: 'https://www.adamit.nl/werkgevers',
        },
    },
    hero: {
        title: 'Werkgevers',
        subtitle: 'Voor opdrachtgevers',
    },
    connect_section: {
        title: "IT'ers inhuren of in vaste dienst aantrekken.",
        subtitle: 'Wij verbinden IT’ers met opdrachtgevers',
        description: `Het aantrekken van IT-professionals is van cruciaal belang voor organisaties die streven naar technologische groei en innovatie. Het vinden en werven van getalenteerde IT-professionals is daarom een strategische investering voor elke organisatie die streeft naar vooruitgang in een steeds digitalere wereld. Het aantrekken van deze specialisten gaat verder dan het vervullen van vacatures, het is het bouwen aan een kern van expertise die de ruggengraat vormt van technologische ontwikkeling en innovatie.
            \nHet proces van het aantrekken van IT'ers in vast dienstverband vereist een zorgvuldige balans tussen het begrijpen van technische vaardigheden en het evalueren van zachte vaardigheden zoals teamwerk, probleemoplossend vermogen en communicatie. Het gaat om het vinden van die perfecte match die niet alleen past bij de technische behoeften van je organisatie. Het is tenslotte een investering in de toekomst van je organisatie. Het legt de fundering voor technologische excellentie en innovatie.`,
        image_url: 'pitching-meeting.jpg',
        image_alt:
            'Dynamisch team van IT-professionals beschikbaar voor detachering - Ontsluit expertise en flexibiliteit door onze gespecialiseerde IT-professionals in te huren.',
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
                button_text: 'Meer over Test automation',
            },
            {
                title: 'Software testing op afstand',
                description:
                    'Jouw software op afstand laten testen door middel van geautomatiseerde testsoftware door een van onze professionals',
                icon: 'pin' as IconName,
                button_url: '/kandidaten',
                button_text: 'Meer over Testen op afstand',
            },
            {
                title: 'Interim een vaste tester inhuren',
                description:
                    'Een eigen vaste IT Professional inhuren als test automation engineer.',
                icon: 'person' as IconName,
                button_url: '/kandidaten',
                button_text: 'Meer over Interim',
            },
        ],
    },
    perks_section: {
        title: 'De voordelen van werken via ADAM IT?',
        description: 'Krijg toegang tot een breed netwerk.',
        perks: [
            'Vind dè geschikte opdracht',
            'Geheel vrijblijvend en gratis registratie',
            'Kom in contact met jouw kandidaat',
        ],
        button_text: 'Meer over kandidaten',
        button_url: '/kandidaten',
        image_url: 'mentoring-meeting.jpg',
        image_alt:
            'Ontdek de voordelen van werken via ADAM IT: vind de geschikte opdracht, profiteer van geheel vrijblijvende en gratis registratie, en kom in contact met jouw ideale kandidaat.',
    },
    quote_section: {
        content: 'Wij van ADAM IT adviseren ADAM IT',
        name: 'Adam El Hajjami',
    },
    contact_section: {
        title: 'Zit je droombaan er niet tussen? Bel met Adam.',
        name: 'Adam El Hajjami',
        phone_number: '06 39 32 92 92',
        email: 'adam@adamit.nl',
        form_title: 'Meer informatie? Neem dan contact op met Adam.',
        button_text: 'Verzenden',
        image_url: 'recruiter.jpg',
    },
}
