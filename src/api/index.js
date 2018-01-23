let baseUrl = process.env.NODE_ENV === 'development' ? 'http://www2.txjy.com.cn' : ''
const config = {
  baseUrl: baseUrl,
  getDynamicsList: baseUrl + '/index/api/article-by-type.html',
  getDynamicsInfo: baseUrl + '/index/api/article-info.html',
  getDynamicsType: baseUrl + '/index/api/type.html'
}
export default config
