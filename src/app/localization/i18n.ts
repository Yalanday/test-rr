import {createI18n} from 'vue-i18n';

export const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        ru: {
            calendar: {
                title: 'Календарь',
                selectedDate: 'Выбранная дата:'
            },
            months: {
                january: 'Январь',
                february: 'Февраль',
                march: 'Март',
                april: 'Апрель',
                may: 'Май',
                june: 'Июнь',
                july: 'Июль',
                august: 'Август',
                september: 'Сентябрь',
                october: 'Октябрь',
                november: 'Ноябрь',
                december: 'Декабрь'
            },
            days: {
                sunday: 'Вс',
                monday: 'Пн',
                tuesday: 'Вт',
                wednesday: 'Ср',
                thursday: 'Чт',
                friday: 'Пт',
                saturday: 'Сб'
            }
        },
        en: {
            calendar: {
                title: 'Calendar',
                selectedDate: 'Selected date:'
            },
            months: {
                january: 'Jan',
                february: 'Feb',
                march: 'Mar',
                april: 'Apr',
                may: 'May',
                june: 'Jun',
                july: 'Jul',
                august: 'Aug',
                september: 'Sep',
                october: 'Oct',
                november: 'Nov',
                december: 'Dec'
            },
            days: {
                sunday: 'Sun',
                monday: 'Mon',
                tuesday: 'Tue',
                wednesday: 'Wed',
                thursday: 'Thu',
                friday: 'Fri',
                saturday: 'Sat'
            }
        }
    }
})