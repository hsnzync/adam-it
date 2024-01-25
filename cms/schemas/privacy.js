export default {
    name: 'privacy',
    title: 'Privacy beleid',
    type: 'document',
    __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],

    fields: [
        {
            name: 'title',
            title: 'Pagina titel',
            type: 'string',
            validation: (Rule) => Rule.required().max(80),
        },
        {
            name: 'subtitle',
            title: 'Pagina subtitel',
            type: 'string',
            validation: (Rule) => Rule.required().max(80),
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
