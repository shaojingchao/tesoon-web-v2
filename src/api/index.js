/**
 * Created by 邵敬超 on 2017/10/20.
 */

var baseUrl = 'http://www2.txjy.com.cn/'
// var baseUrl = '/'
const config = {
  baseUrl: baseUrl,
  getDynamicsList: baseUrl + 'index/api/article-by-type.html',
  getDynamicsInfo: baseUrl + 'index/api/article-info.html',
  getDynamicsType: baseUrl + 'index/api/type.html'
}
console.log(config)
export default config
