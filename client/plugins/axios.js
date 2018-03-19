import swal from 'sweetalert2'


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default ({ app, store, redirect, $axios }) => {
    $axios.defaults.baseURL = process.env.API_URL || 'http://localhost:3000/api';

    $axios.onRequest(config => {
        const token = store.getters['auth/token']
        console.log('has token?', !!token)
        if (token) {
            $axios.setToken(token, 'Bearer');
        }
        console.log($axios.defaults.headers.common.Authorization)
    })

    $axios.onError(error => {
        const { status } = error.response || {}
        // console.log('status', status)
        if (status >= 500) {
            swal({
                type: 'error',
                title: app.i18n.t('errors.internal.title'),
                text: app.i18n.t('errors.internal.text'),
                reverseButtons: true,
                confirmButtonText: app.i18n.t('ok'),
                cancelButtonText: app.i18n.t('cancel')
            })
        }

        if (status === 401 && store.getters['auth/check']) {
            swal({
                type: 'warning',
                title: app.i18n.t('errors.tokenExpired.title'),
                text: app.i18n.t('errors.tokenExpired.text'),
                reverseButtons: true,
                confirmButtonText: app.i18n.t('ok'),
                cancelButtonText: app.i18n.t('cancel')
            }).then(async () => {
                await store.dispatch('auth/logout')

                redirect({ name: 'auth/login' })
            })
        }
    })
}
