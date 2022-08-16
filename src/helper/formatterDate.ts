import moment from 'moment';

const months = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

export const formatterDate = (date: string) => {
    const convertedDate = moment(date.replace(/\./g, '/'));

    const dateMonth = convertedDate.date();
    const month = months[convertedDate.month()];
    const year = convertedDate.year();
    const weekDay = weekDays[convertedDate.weekday() - 1];

    return dateMonth + ' ' + month.slice(0, 3) + ' ' + year + ', ' + weekDay;
};
