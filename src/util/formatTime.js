function prefixNum (num) {
  return num < 9 ? ('0' + num) : num
}

export function formatTime (time) {
  let _time = new Date(parseInt(time))
  // console.log(_time.toLocaleString())
  let _Y = _time.getFullYear()
  let _M = _time.getMonth() + 1
  let _D = _time.getDate()
  return _Y + '-' + prefixNum(_M) + '-' + prefixNum(_D)
}
