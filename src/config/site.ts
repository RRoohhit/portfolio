export const SITE_URL = process.env.APP_URL || "https://rohitguptaseo.vercel.app";
export const SITE_NAME = "Rohit Gupta - SEO Specialist & Full Stack Web Developer";

export const OG_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

export const CONTACT = {
  name: "Rohit Gupta",
  phone: "+91 96966 21216",
  phoneHref: "tel:+919696621216",
  email: "rohitguptacodec@gmail.com",
  whatsapp: "https://wa.me/919696621216",
  whatsappText: "Hi Rohit, I saw your SEO and Full Stack portfolio. I would like to discuss a project.",
  location: "Ayodhya, Uttar Pradesh – 272130",
  serving: "Serving Noida, Delhi, Gurgaon, Ghaziabad, Lucknow, Ayodhya & all of India — remote worldwide",
} as const;

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/rohit-gupta-seo",
  github: "https://github.com/rohitguptacodec",
  twitter: "https://x.com/rohitguptacodec",
  whatsapp: CONTACT.whatsapp,
} as const;

export const AUTHOR = {
  name: "Rohit Gupta",
  initials: "RG",
  role: "Full Stack Web Developer & Technical SEO Specialist",
  alias: "SEO Architect & Full Stack Engineer",
} as const;
