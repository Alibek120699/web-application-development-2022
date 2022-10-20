const ALLOWED_PROTOCOLS = ["https:", "http:"];

export function getSecureURL(url: string) {
  const parsedUrl = new URL(url);

  if (ALLOWED_PROTOCOLS.includes(parsedUrl.protocol)) {
    return url;
  }
  // url protocol is not secure
  return "";
}
