let baseUrl = process.env.NODE_ENV === 'development' ? 'http://www2.txjy.com.cn' : ''
const config = {
  baseUrl: baseUrl,
  getIndexBanner: baseUrl + '/index/api/get-home-pic.html',
  getDynamicsList: baseUrl + '/index/api/article-by-type.html',
  getDynamicsInfo: baseUrl + '/index/api/article-info.html',
  getDynamicsType: baseUrl + '/index/api/type.html',
  getMemorabilia: baseUrl + '/index/api/memorabilia.html',
  getHonor: baseUrl + '/index/api/honor.html',
  getJobs: baseUrl + '/index/api/jobs.html',
  getReviews: baseUrl + '/index/api/reviews.html'
}
export default config

// /index/api/memorabilia.html  天星大事记
// /index/api/honor.html  荣誉资质
// /index/api/jobs.html  天星招聘
// /index/api/reviews.html  用户评价
