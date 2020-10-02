import { i18n as _ , Cache } from '../../src/global'

jest.mock('../src/tools/cache.class');
Cache.get.mockReturnValue({Day: '天'})

describe('测试i18n工具', () => {
    let test = ['', '2333', 'wqz', 'Day', undefined, null]

    it('传入空字符串时', () => {
        expect(_(test[0])).toBe('i18n error')
    })

    it('传入无效空符串时 0', () => {
        expect(_(test[1])).toBe('i18n error')
    })

    it('传入无效空符串时 1', () => {
        expect(_(test[2])).toBe('i18n error')
    })

    it('传入有效空符串时', () => {
        expect(_(test[3])).toBe('天')
    })

    it('传入undefined时', () => {
        expect(_(test[4])).toBe('i18n error')
    })

    it('传入null时', () => {
        expect(_(test[5])).toBe('i18n error')
    })

})