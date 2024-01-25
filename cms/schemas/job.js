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
            validation: (Rule) => Rule.required().max(80),
        },
        {
            name: 'type',
            title: 'Type baan',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'location',
            title: 'Locatie',
            type: 'string',
            validation: (Rule) => Rule.required().max(80),
        },
        {
            name: 'hours',
            title: 'Uren',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'salary',
            title: 'Salarisindicatie (minimum) OF tarief',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'maxSalary',
            title: 'Salarisindicatie (maximum)',
            type: 'number',
        },
        {
            name: 'sections',
            title: 'Tekstblokken',
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
