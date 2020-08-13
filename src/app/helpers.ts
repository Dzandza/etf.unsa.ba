export const getFullDayName = (day: number): string => {
    switch (day) {
        case 0: return "nedjelja";
        case 1: return "ponedjeljak";
        case 2: return "utorak";
        case 3: return "srijeda";
        case 4: return "četvrtak";
        case 5: return "petak";
        case 6: return "subota";
        default: return null;
    }
}

export const getFullMonthName = (month: number): string => {
    switch (month) {
        case 0: return "januar";
        case 1: return "februar";
        case 2: return "mart";
        case 3: return "april";
        case 4: return "maj";
        case 5: return "juni";
        case 6: return "juli";
        case 7: return "august";
        case 8: return "septembar";
        case 9: return "oktobar";
        case 10: return "novembar";
        case 11: return "decembar";
        default: return null;
    }
}

export const getStandarDateFormat = (date: Date): string => {
    if (!date) return undefined;
    else return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

export const getStandardTimeFormat = (date: Date): string => {
    if (!date) return undefined;
    else {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${Math.trunc(hours / 10) === 0 ? `0${hours}` : hours}:${Math.trunc(minutes / 10) === 0 ? `0${minutes}` : minutes}`
    }
}