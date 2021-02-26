export const generateOptions = data => data.map(item => ({
    label: item.name,
    value: item.id
}));

export const setViewportHeight = () => {
    const { innerHeight, innerWidth, orientation } = window;
    const vh = ((orientation > 0) ? innerWidth : innerHeight) * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
