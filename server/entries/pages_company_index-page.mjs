import { jsxs, jsx } from "react/jsx-runtime";
import { MapPin, Users, Globe, Cpu, ShieldCheck, Rocket, Target, Briefcase } from "lucide-react";
/*! components/CompanyPage.tsx [vike:pluginModuleBanner] */
const CompanyPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "40px 40px" } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block", children: "About Simtope" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl lg:text-6xl font-bold mb-6 leading-tight", children: [
          "Architects of the ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent", children: "Connected Future" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-brand-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed", children: "We are a premium B2B mobile network operator and distributor dedicated to solving the hardest connectivity challenges. From soldered chips in industrial machinery to satellite uplinks in remote wilderness, we keep your business online." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-brand-surface border-y border-brand-border", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Who We Are" }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-lg mb-6 leading-relaxed", children: "Simtope is a specialized connectivity partner with over 20 years of experience in the telecommunications sector. Headquartered with dual operations in the United States and Canada, we bridge the gap between complex cellular infrastructure and enterprise application." }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-lg leading-relaxed", children: "We don't just sell SIM cards; we engineer resilience. Our team of connectivity architects works alongside your engineers to design networks that survive vibration, temperature extremes, and signal-challenged environments." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark p-6 rounded-xl border border-brand-border", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-8 h-8 text-brand-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white", children: "North American Roots" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary mt-2", children: "Offices in Greentown, IN and Carp, ON serving a global client base." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark p-6 rounded-xl border border-brand-border", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-brand-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white", children: "Expert Team" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary mt-2", children: "Dedicated solution engineers, not just sales reps." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark p-6 rounded-xl border border-brand-border col-span-2", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8 text-brand-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white", children: "Global Reach" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary mt-2", children: "Connecting devices in 190+ countries through Tier-1 carrier partnerships." })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "What We Do" }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary max-w-2xl mx-auto", children: "We simplify the complex. By aggregating multiple carrier networks and satellite feeds into a single management plane, we provide a unified connectivity experience." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-colors", children: [
          /* @__PURE__ */ jsx(Cpu, { className: "w-10 h-10 text-brand-accent mb-6" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Hardware Distribution" }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary leading-relaxed", children: "Distributing industrial-grade SIM form factors (MFF2, 2FF-4FF) and certified radio modules ready for manufacturing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-colors", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-10 h-10 text-brand-accent mb-6" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Network Operations" }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary leading-relaxed", children: "Acting as a Mobile Network Operator (MNO) to provide secure private APNs, static IPs, and direct carrier routing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-colors", children: [
          /* @__PURE__ */ jsx(Rocket, { className: "w-10 h-10 text-brand-accent mb-6" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Deployment Services" }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary leading-relaxed", children: "Consulting on device design, certification, and logistics to ensure your product launches on time and scales without failure." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-surface border-t border-brand-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-12 text-center", children: "Who We Do It For" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        { title: "Enterprise IoT", desc: "Large scale deployments requiring robust SLAs and security." },
        { title: "Automotive", desc: "Telematic solutions needing high-speed, low-latency roaming." },
        { title: "Utilities", desc: "Smart metering infrastructure requiring deep indoor penetration (NB-IoT)." },
        { title: "Agriculture", desc: "Remote monitoring solutions leveraging hybrid satellite/cellular tech." }
      ].map((industry, i) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-xl bg-brand-dark border border-brand-border p-6 hover:shadow-xl transition-all", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-brand-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150" }),
        /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-brand-text-primary mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: industry.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary", children: industry.desc })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx(Briefcase, { className: "w-12 h-12 text-brand-primary mx-auto mb-6" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Our Philosophy" }),
      /* @__PURE__ */ jsx("blockquote", { className: "text-2xl font-light italic text-brand-text-secondary mb-8", children: '"Connectivity should never be the bottleneck. It should be the invisible, unbreakable thread that ties your innovation to the world."' }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-brand-text-primary font-bold", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-brand-accent" }),
          "Transparency"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-brand-text-primary font-bold", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-brand-accent" }),
          "Reliability"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-brand-text-primary font-bold", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-brand-accent" }),
          "Scalability"
        ] })
      ] })
    ] }) })
  ] });
};
/*! pages/company/index.page.tsx [vike:pluginModuleBanner] */
function Page() {
  return /* @__PURE__ */ jsx(CompanyPage, {});
}
export {
  Page
};
