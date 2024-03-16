

export const getTodayMidnigth = (day: number) => {
    const datin = new Date(new Date(Date.now()).setHours(0, 0, 0, 0));
    datin.setDate(datin.getDate() + day);

    return new Date(datin).toISOString().slice(0, -1);
};