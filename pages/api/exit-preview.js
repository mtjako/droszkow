export default async function exit(_, res) {
  res.clearPreviewData();

  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) => cookie.replace("SameSite=Lax", "SameSite=None"))
  );

  res.redirect("/");
}
