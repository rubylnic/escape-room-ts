


export default function setTranslatedMonth(month: number) {
    let monthTranslated;
    switch (month) {
        case 0:
            monthTranslated = 'января';
            break;
        case 1:
            monthTranslated = 'февраля';
            break;
        case 2:
            monthTranslated = 'марта';
            break;
        case 3:
            monthTranslated = 'апреля';
            break;
        case 4:
            monthTranslated = 'мая';
            break;
        case 5:
            monthTranslated = 'июня';
            break;
        case 6:
            monthTranslated = 'июля';
            break;
        case 7:
            monthTranslated = 'августа';
            break;
        case 8:
            monthTranslated = 'сентября';
            break;
        case 9:
            monthTranslated = 'октября';
            break;
        case 10:
            monthTranslated = 'ноября';
            break;
        case 11:
            monthTranslated = 'декабря';
            break;

        default:
            monthTranslated = '';

    }
    return monthTranslated;
}
