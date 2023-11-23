/* eslint-disable complexity */
export const transformRegion = (region: string): string => {
    if (region.includes('na') || region.includes('br') || region.includes('lan') || region.includes('las')) {
        return 'americas'
    } else if (region.includes('kr') || region.includes('jp')) {
        return 'asia'
    } else if (region.includes('eune') || region.includes('euw') || region.includes('tr') || region.includes('ru')) {
        return 'europe'
    } else if (region.includes('oce') || region.includes('ph') || region.includes('sg') || region.includes('th') || region.includes('vn') || region.includes('tw')) {
        return 'sea'
    }
    return 'americas'
}