const formatCurreny = (value: number) =>
    new Intl.NumberFormat('nl-NL').format(value)

export const formatSalary = (salary: number, maxSalary?: number): string => {
    if (!maxSalary) {
        return `€${salary}`
    }
    return `€${formatCurreny(salary)} - €${formatCurreny(maxSalary)}`
}
