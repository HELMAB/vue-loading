import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n)

const messages = {
    en: {
        message: {
            loading: 'Loading...'
        }
    },
    km: {
        message: {
            loading: 'កំពុងដំណើរការ...'
        }
    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
})


export default i18n
