export default async function preview(req, res) {
  if (req.query.secret !== process.env.STORYBLOK || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});

  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) => cookie.replace("SameSite=Lax", "SameSite=None"))
  );

  let slug = req.query.slug;

  if (slug === "home") {
    slug = "";
  }

  res.redirect(`/${slug}`);
}
