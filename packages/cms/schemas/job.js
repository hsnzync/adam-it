export default {
    name: 'job',
    title: 'Vacatures',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Pagina url',
            type: 'slug',
            options: {
                source: 'title',
                slugify: (input) =>
                    input
                        .toLowerCase()
                        //Remove spaces
                        .replace(/\s+/g, '-')
                        //Remove special characters
                        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
                validation: (Rule) => Rule.required(),
            },
        },
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
            name: 'minSalary',
            title: 'Salarisindicatie (minimum)',
            type: 'number',
        },
        {
            name: 'maxSalary',
            title: 'Salarisindicatie (maximum)',
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
