export default {
    name: 'jobFilters',
    title: 'Vacatures filters',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            validation: (Rule) =>
                Rule.custom((title) => {
                    const allowedValues = ['functie', 'type', 'locatie']

                    if (!allowedValues.includes(title.toLowerCase())) {
                        return 'De titel mag alleen "Functie", "Type" of "Locatie" zijn'
                    }

                    return true
                }),
        },
        {
            name: 'filterList',
            title: 'Filters',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'filterName',
                            title: 'Naam filter',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
    ],
}
