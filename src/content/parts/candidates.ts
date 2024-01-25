import { IconName } from '@/types'

export const candidates = {
    seo_head: {
        title: 'Vind IT vacatures - ADAM IT',
        name: 'Vind IT vacatures - ADAM IT',
        description:
            'Ontdek de nieuwste IT-vacatures en vind de perfecte opdracht bij ADAM IT. Start je IT-carrière hier!',
        opengraph: {
            title: 'Vind IT vacatures - ADAM IT',
            description:
                'Ontdek de nieuwste IT-vacatures en vind de perfecte opdracht bij ADAM IT. Start je IT-carrière hier!',
            url: 'https://www.adamit.nl/kandidaten',
        },
        twitter: {
            title: 'Vind IT vacatures - ADAM IT',
            description:
                'Ontdek de nieuwste IT-vacatures en vind de perfecte opdracht bij ADAM IT. Start je IT-carrière hier!',
            url: 'https://www.adamit.nl/kandidaten',
        },
    },
    hero: {
        title: 'Kandidaten',
        subtitle: 'Voor werkzoekenden',
    },
    perks_section: {
        title: 'Je droombaan als IT Professional',
        subtitle: 'Wij verbinden IT’ers met opdrachtgevers',
        description: `Je droombaan als IT-professional omvat een wereld van onbegrensde mogelijkheden en voortdurende uitdagingen. Het is een rol waarin je niet alleen technologie omarmt, maar ook een katalysator wordt voor innovatie en vooruitgang.\n\nDe essentie van je droombaan in de IT ligt in de mogelijkheid om creatief te zijn, problemen op te lossen en te pionieren in een landschap dat voortdurend evolueert. Het is een omgeving waarin je niet alleen kunt excelleren in je technische vaardigheden, maar waar je ook de kans krijgt om jezelf voortdurend te vernieuwen en te groeien.`,
        perks: [
            'Vind dè geschikte opdracht',
            'Geheel vrijblijvend en gratis registratie',
            'Kom in contact met jouw kandidaat',
        ],
        button_text: 'Direct naar vacatures',
        button_url: '/vacatures',
        image_url: 'working-office.jpg',
        image_alt:
            'Vind de geschikte opdracht, profiteer van geheel vrijblijvende en gratis registratie, en kom in contact met jouw ideale kandidaat.',
    },
    connect_section: {
        title: 'Je roeping.',
        subtitle: 'Vind jouw plek bij de juiste werkgever of opdrachtgever',
        description: `Jouw baan als IT’er stelt je in staat om een verschil te maken, niet alleen binnen de muren van je organisatie, maar ook in de bredere samenleving. Of je nu werkt aan baanbrekende software, cybersecurity, data-analyse, kunstmatige intelligentie of het Internet of Things, je draagt bij aan het vormgeven van de toekomst.\n\nWij bieden je dynamische omgeving waarin je continu leert en groeit, en waar je wordt aangemoedigd om te innoveren en te experimenteren. Het is een plek waar teamwork en samenwerking de sleutel zijn tot het bereiken van grensverleggende resultaten.\n\nKortom, je droombaan als IT-professional is niet alleen een functie; het is een roeping. Het is een reis van ontdekking, van het overstijgen van grenzen en het omarmen van de onbegrensde mogelijkheden van technologie om positieve verandering te brengen.`,
        image_url: 'working-view.jpg',
        image_alt:
            "Krachtige verbindingen in de IT-wereld - Wij brengen IT'ers en opdrachtgevers samen voor succesvolle samenwerkingen.",
    },
    kpi_section: {
        title: 'Ben jij de IT-professional die organisaties verder helpt?',
        tiles: [
            {
                title: 'Freelance',
                icon: 'businessCenter' as IconName,
                button_url: '/vacatures',
                button_text: 'Vind jouw opdracht',
            },
            {
                title: 'Vaste jobs',
                icon: 'home' as IconName,
                button_url: '/vacatures',
                button_text: 'Vind jouw baan',
            },
        ],
    },
    jobs_section: {
        tiles: {
            title: 'Opzoek naar een baan als Test Automation Engineer?   ',
            caption: 'Bezoek onze vacaturepagina voor nog meer vacatures.',
        },
        information: {
            content: [
                {
                    title: "Wij verbinden IT'ers met opdrachtgevers",
                    subtitle: 'Je droombaan als IT Professional',
                    description: `Onze missie? IT-talent koppelen aan de juiste opdrachten. Wij brengen de vaardigheden en expertise van IT-professionals samen met de behoeften van opdrachtgevers. Met zorgvuldige matching zorgen we voor succesvolle verbindingen die de technologische wereld verder helpen.`,
                },
            ],
            button_text: 'Bekijk alle vacatures',
            button_url: '/vacatures',
        },
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
        form_title: 'Hulp nodig? Neem dan contact op met Adam.',
        button_text: 'Verzenden',
        image_url: 'recruiter.jpg',
    },
}
