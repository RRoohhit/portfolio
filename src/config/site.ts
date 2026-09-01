export const SITE_URL = process.env.APP_URL || "https://rohitguptaseo.in";
export const SITE_NAME = "Rohit Gupta — SEO Expert, Digital Marketing Consultant & Web Developer";

export const OG_IMAGE =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80";

export const CONTACT = {
  name: "Rohit Gupta",
  phone: "+91 96966 21216",
  phoneHref: "tel:+919696621216",
  email: "rohitguptacodec96@gmail.com",
  whatsapp: "https://wa.me/919696621216",
  whatsappText: "Hi Rohit, I saw your portfolio. I would like to discuss a project.",
  permanentLocation: "Ayodhya, Uttar Pradesh, India",
  currentLocation: "Gali No. 7, Block M, Mamura, Sector 66, Noida, Uttar Pradesh 201309",
  location: "Noida & Ayodhya, UP, India",
  serving:
    "Serving clients across all of India (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Pune, Kolkata & 100+ cities) and worldwide — USA, UK, UAE, Canada, Australia & more",
  googleMaps: "https://maps.app.goo.gl/bjJDqfUJRuJPqHBT6",
} as const;

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/rohit-gupta-seo1",
  instagram: "https://www.instagram.com/rohitguptaseoin",
  github: "https://github.com/RRoohhit",
  twitter: "https://x.com/rohitguptaseoin",
  whatsapp: CONTACT.whatsapp,
} as const;

export const AUTHOR = {
  name: "Rohit Gupta",
  initials: "RG",
  role: "SEO Expert, Digital Marketing Consultant & Full-Stack Web Developer",
  alias: "SEO Expert & Full-Stack Web Developer",
} as const;

