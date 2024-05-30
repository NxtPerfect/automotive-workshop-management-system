export { default } from "next-auth/middleware";

export const config = {
  matcher: ['/', '/zlecenia', '/zlecenie/nowe', '/czesci/zamow']
}
