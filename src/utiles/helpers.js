export const generateOptions = data => data.map(item => ({
    label: item.name,
    value: item.id
}));
