export default {
    name: 'job',
    title: 'Vacatures',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Functie',
            type: 'string',
        },
        {
            name: 'type',
            title: 'Type baan',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Locatie',
            type: 'string',
        },
        {
            name: 'hours',
            title: 'Uren',
            type: 'number',
        },
        {
            name: 'salary',
            title: 'Salarisindicatie',
            type: 'number',
        },
        {
            name: 'sections',
            title: 'Secties',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Titel',
                            type: 'string',
                        },
                        {
                            name: 'description',
                            title: 'Omschrijving',
                            type: 'blockContent',
                        },
                    ],
                },
            ],
        },
    ],
}
