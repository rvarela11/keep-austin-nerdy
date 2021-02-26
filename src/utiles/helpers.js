export const generateOptions = data => data.map(item => ({
    label: item.name,
    value: item.id
}));

export const setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
