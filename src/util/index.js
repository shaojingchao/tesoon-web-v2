function prefixNum (num) {
  return num < 9 ? '0' + num : num
}

export function formatTime (time) {
  let _time = new Date(time)
  let _Y = _time.getFullYear()
  let _M = _time.getMonth()
  let _D = _time.getDate()
  return _Y + '-' + prefixNum(_M) + '-' + prefixNum(_D)
}
