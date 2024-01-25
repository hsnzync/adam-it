import { IconName } from '@/types'

export const contact = {
    seo_head: {
        title: 'Contacteer ons - ADAM IT',
        name: 'Contacteer ons - ADAM IT',
        description:
            'Neem contact op met ADAM IT voor al je vragen over IT-opdrachten, kandidatenwerving en meer. Wij staan klaar om je te helpen!',
        opengraph: {
            title: 'Contacteer ons - ADAM IT',
            description:
                'Neem contact op met ADAM IT voor al je vragen over IT-opdrachten, kandidatenwerving en meer. Wij staan klaar om je te helpen!',
            url: 'https://www.adamit.nl/contact',
        },
        twitter: {
            title: 'Contacteer ons - ADAM IT',
            description:
                'Neem contact op met ADAM IT voor al je vragen over IT-opdrachten, kandidatenwerving en meer. Wij staan klaar om je te helpen!',
            url: 'https://www.adamit.nl/contact',
        },
    },
    hero: {
        title: 'Contact',
        subtitle: 'Voor al uw vragen',
    },
    contact_section: [
        {
            title: 'Kantoor',
            text_1: 'Westeinde 6a',
            text_2: {
                link: false,
                content: '1234 AB Maassluis',
            },
            text_3: {
                link: true,
                content: 'Bekijk via Google Maps',
                href: 'https://www.google.com/maps/place/Westeinde+6a,+3146+BZ+Maassluis/data=!4m2!3m1!1s0x47c44cd0cc9bffff:0xece63f67913e787d?sa=X&ved=2ahUKEwj8oZn9tK-DAxWK1QIHHZHXAg8Q8gF6BAgTEAA',
                target: '_blank',
            },
            icon: 'business' as IconName,
        },
        {
            title: 'Contactgegevens',
            text_1: 'U kunt ons bereiken op',
            text_2: {
                link: true,
                content: '010 - 23 33 923',
                href: 'tel:0102333923',
            },
            text_3: {
                link: true,
                content: 'info@adamit.nl',
                href: 'mailto:info@adamit.nl',
            },
            icon: 'businessCenter' as IconName,
        },
        // {
        //     title: 'Support',
        //     text_1: 'U kunt ons bereiken op',
        //     text_2: {
        //         link: true,
        //         content: '010 - 23 33 923',
        //         href: 'tel:0102333923',
        //     },
        //     text_3: {
        //         link: true,
        //         content: 'info@adamit.nl',
        //         href: 'mailto:info@adamit.nl',
        //     },
        //     icon: 'help' as IconName,
        // },
    ],
    contact_form: {
        name: 'Adam El Hajjami',
        phone_number: '06 39 32 92 92',
        email: 'adam@adamit.nl',
        form_title: 'Meer informatie? Neem dan contact op met Adam.',
        button_text: 'Verzenden',
        image_url: 'recruiter.jpg',
    },
    extra_section: {
        first_column: [
            {
                title: 'Uniek',
                subtitle: 'Een brug tussen werkgevers en IT-talent',
                description: `Wat ADAM IT uniek maakt, is de toewijding aan het matchen van hooggekwalificeerde IT-kandidaten met bedrijven die op zoek zijn naar specifieke vaardigheden en ervaring. Door middel van een zorgvuldige screening en matchingprocedure zorgt ADAM IT ervoor dat de professionals die ze vertegenwoordigen niet alleen over de juiste technische expertise beschikken, maar ook perfect passen bij de bedrijfscultuur en doelstellingen van de organisatie.\n\nOnze focus gaat verder dan alleen het invullen van vacatures. Ze streven ernaar duurzame relaties te creëren die gebaseerd zijn op wederzijds begrip en groei. Door te luisteren naar de behoeften van zowel kandidaten als werkgevers, fungeert ADAM IT als een brug tussen talent en mogelijkheden, waarbij ze niet alleen vacatures vullen, maar ook carrières vormgeven.`,
                button_text: 'Opdrachtgever',
                button_url: '/werkgevers',
            },
        ],
        second_column: [
            {
                title: 'Sluit je aan',
                subtitle: 'Een brug tussen werkgevers en IT-talent',
                description: `Gerenommeerde organisaties vertrouwen op ADAM IT als een betrouwbare partner die hen in staat stelt te floreren in een snel veranderende technologische omgeving. De transparantie, integriteit en professionaliteit die ADAM IT tentoonspreidt, dragen bij aan het opbouwen van een ecosysteem waarin zowel werkgevers als IT- professionals gedijen. Daarbij zijn wij niet alleen een matchmaker op de arbeidsmarkt, maar een katalysator voor groei en innovatie in de IT-sector. Door de juiste mensen op de juiste plekken te brengen, dragen ze bij aan het succes van individuen en organisaties, waardoor de IT-wereld een betere plek wordt voor iedereen.`,
            },
        ],
    },
}
