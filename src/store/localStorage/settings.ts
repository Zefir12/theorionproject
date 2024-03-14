const setItem = (name: string, item: unknown): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(name, JSON.stringify(item));
};
const getItem = (name: string): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(name);
};

export const getUserLogged = (): boolean => {
    const data = getItem('userLogged');
    return data === 'true';
};

export const setUserLogged = (value: boolean): void => {
    setItem('userLogged', value);
};
