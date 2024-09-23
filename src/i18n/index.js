
import { createI18n } from 'vue-i18n'


export const i18n = createI18n({
    locale: 'heb',
    messages: {
        heb: {
            title: 'הנחיות לנוסעים לחו"ל',
            pernrEmp: 'מספר עובד',
            empName: 'שם עובד',
            tripNumber: 'מספר נסיעה',
            tripDate: 'תאריך נסיעה',
            destination: 'יעד',
            readme: 'בבקשה קראו את ההנחיות בלינק המצורף. סמנו שקראתם ומסכימים להנחיות. בסיום לחצו על שלח.',
            checkboxText: 'קראתי והנני מסכים/ה',
            send: 'שלח',
            instruction: 'קובץ הנחיות'
        }
    }
})