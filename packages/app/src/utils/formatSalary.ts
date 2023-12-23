const formatCurreny = (value: number) =>
    new Intl.NumberFormat('nl-NL').format(value)

export const formatSalary = (minSalary: number, maxSalary: number): string =>
    `€${formatCurreny(minSalary)} - €${formatCurreny(maxSalary)}`
