// schemas/pet.js
export default {
    name: 'jobs',
    type: 'document',
    title: 'Vacatures',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Titel opdracht',
        },
        {
            name: 'content',
            type: 'array',
            title: 'Omschrijving opdracht',
            of: [
                {
                    type: 'block',
                },
                {
                    type: 'image',
                },
            ],
        },
    ],
}
