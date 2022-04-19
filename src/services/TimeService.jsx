import http from '../config/banco'

export const findAllTimes = async () => {
    return (
        http({
            method: 'GET',
            url: '/times'
        }).then( ( resp ) => {
            return resp.data
        }).catch( ( error ) => {
            return error.response
        })
    )
}