export const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export const scrollToPoint = (y: number) => {
    document.body.scrollTop = y; // For Safari
    document.documentElement.scrollTop = y; // For Chrome, Firefox, IE and Opera
};

export const scrollToElementTop = (scrollOffset: number, padding?: number) => {
    const headerOffset =
        document.getElementById('site-header')?.clientHeight ?? 0;
    scrollToPoint(scrollOffset - headerOffset - (padding ?? 16));
};