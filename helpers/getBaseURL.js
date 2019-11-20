export default (req) => {
  const protocol = process.browser ? window.location.protocol : (req.headers['x-forwarded-proto'] + ':')
  const host = process.browser ? window.location.host : (req.headers['x-forwarded-host'] || req.headers.host)
  return `${protocol}//${host}`
}