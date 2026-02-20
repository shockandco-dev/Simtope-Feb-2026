import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useOutletContext } from "react-router-dom";
import { B as Button } from "../chunks/chunk-BpY4DcCL.js";
import { ChevronRight, Smartphone, Cpu, Satellite, Radio, CheckCircle2, ShieldCheck, Zap, Globe2, Hammer, Rocket, Settings, TrendingUp, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { s as submitToSpreadsheet } from "../chunks/chunk-BsyCvPk0.js";
const Hero = ({ onConnect }) => {
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-brand-dark", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(59,130,246,0.15),transparent_60%)]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-20 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-brand-primary" }),
          "Tier-1 Network Status: Active"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-brand-text-primary", children: [
          "The IIoT and Commercial ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary", children: "Connectivity Provider." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-brand-text-secondary max-w-xl leading-relaxed font-medium", children: "The easiest way to manage mobile data for your workforce and devices." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "group text-xl px-10", onClick: onConnect, children: [
          "Explore Solutions",
          /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "pt-12 flex flex-wrap gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-brand-text-primary", children: "190+" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-text-secondary", children: "Countries" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-brand-text-primary", children: "100%" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-text-secondary", children: "Uptime SLA" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-brand-text-primary", children: "MFF2" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-brand-text-secondary", children: "Industrial Std" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative group", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://raw.githubusercontent.com/shockandco-dev/Simtope-Jan-15/main/assets/zero-data-offer.png",
          alt: "Simtope Connectivity Stack",
          className: "relative z-10 w-full max-w-xl mx-auto"
        }
      ) })
    ] }) })
  ] });
};
const SERVICES = [
  {
    id: "esim",
    title: "Enterprise eSIM",
    description: "Over-the-air provisioning for global IoT deployments. Eliminate physical swapping and manage connectivity remotely.",
    icon: Smartphone,
    features: ["Remote Provisioning", "Multi-Profile Support", "Instant Activation"]
  },
  {
    id: "soldered",
    title: "Industrial Soldered SIMs",
    description: "Rugged MFF2 form factors designed for vibration, temperature extremes, and longevity in automotive and industrial use.",
    icon: Cpu,
    features: ["MFF2 Standard", "-40°C to 105°C", "10+ Year Lifespan"]
  },
  {
    id: "satellite",
    title: "Satellite Connectivity",
    description: "Gap-free global coverage. Seamless switching between cellular and satellite networks for critical asset tracking.",
    icon: Satellite,
    features: ["Pole-to-Pole Coverage", "Low Latency LEO", "Failover Redundancy"]
  },
  {
    id: "traditional",
    title: "Traditional SIMs",
    description: "High-grade 2FF, 3FF, and 4FF plastic SIMs optimized for high-volume consumer electronics and legacy hardware.",
    icon: Radio,
    features: ["Triple Cut Form Factor", "High Volume Logistics", "Custom Branding"]
  }
];
const STATS = [
  { label: "Active Endpoints", value: "100", suffix: "K" },
  { label: "Years Experience", value: "20", suffix: "+" },
  { label: "Countries Covered", value: "190", suffix: "+" },
  { label: "Uptime SLA", value: "99.99", suffix: "%" }
];
const Services = () => {
  return /* @__PURE__ */ jsx("section", { id: "solutions", className: "py-24 bg-brand-dark relative", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-brand-text-primary mb-4", children: "Engineered for Enterprise" }),
      /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary max-w-2xl mx-auto", children: "Choose the form factor and connectivity protocol that fits your hardware architecture. Scalable, secure, and ready for deployment." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: SERVICES.map((service) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group relative bg-brand-surface p-6 rounded-2xl border border-brand-border hover:border-brand-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-brand-dark/50 rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors", children: /* @__PURE__ */ jsx(service.icon, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-brand-text-primary mb-3", children: service.title }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-sm mb-6 flex-grow leading-relaxed", children: service.description }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-6", children: service.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center text-xs text-brand-text-secondary", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5 mr-2 text-brand-accent" }),
            feature
          ] }, idx)) })
        ]
      },
      service.id
    )) })
  ] }) });
};
const Features = () => {
  return /* @__PURE__ */ jsxs("section", { id: "platform", className: "py-24 relative overflow-hidden bg-brand-surface border-y border-brand-border", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-dark/5" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-brand-text-primary mb-6", children: [
          "Command Your Connectivity ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-brand-primary", children: "From a Single Dashboard" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary mb-8 leading-relaxed", children: "The Simtope CMP (Connectivity Management Platform) gives you granular control over your entire SIM estate. Monitor usage, set data caps, switch carriers, and troubleshoot in real-time." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-6 h-6 text-brand-accent" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-brand-text-primary font-semibold", children: "Bank-Grade Security" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary mt-1", children: "Private APNs, VPN tunnels, and IMEI locking to ensure your data never touches the public internet." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(Zap, { className: "w-6 h-6 text-brand-accent" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-brand-text-primary font-semibold", children: "Real-Time Provisioning" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary mt-1", children: "Activate, suspend, or change rate plans instantly via API or portal." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mt-1", children: /* @__PURE__ */ jsx(Globe2, { className: "w-6 h-6 text-brand-accent" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-brand-text-primary font-semibold", children: "Multi-IMSI Logic" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary mt-1", children: "Smart switching logic automatically connects to the strongest signal available, anywhere." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: STATS.map((stat, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark/30 backdrop-blur border border-brand-border p-8 rounded-2xl text-center hover:bg-brand-dark/50 transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-4xl lg:text-5xl font-bold text-brand-text-primary mb-2", children: [
          stat.value,
          /* @__PURE__ */ jsx("span", { className: "text-brand-primary", children: stat.suffix })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-brand-text-secondary uppercase tracking-wider font-medium", children: stat.label })
      ] }, idx)) })
    ] }) })
  ] });
};
const Process = () => {
  const steps = [
    {
      icon: Hammer,
      label: "BUILD",
      title: "ARCHITECT IOT EXCELLENCE",
      description: "Designing the optimal framework tailored to achieve your outcomes."
    },
    {
      icon: Rocket,
      label: "DEPLOY",
      title: "MOBILIZE YOUR VISION",
      description: "Delivering your IoT solutions to target markets without friction."
    },
    {
      icon: Settings,
      label: "MANAGE",
      title: "FUTURE-PROOF YOUR SOLUTION",
      description: "Optimizing your solution for efficiency and longevity."
    },
    {
      icon: TrendingUp,
      label: "SCALE",
      title: "ACCELERATE GROWTH",
      description: "Expanding your capabilities, reach and impact."
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-surface via-brand-dark to-brand-dark pointer-events-none opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold text-brand-text-primary mb-6 tracking-tight", children: [
          "ENABLING END-TO-END ",
          /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent", children: "IOT SOLUTIONS" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary max-w-3xl mx-auto text-lg leading-relaxed", children: "Simplify your IoT journey with Simtope. From concept to scale, we help you focus on driving meaningful outcomes while we handle the complexities of IoT deployment." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-border to-transparent -z-10 opacity-50" }),
        steps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center group", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-24 h-24 rounded-2xl bg-brand-surface/80 backdrop-blur-sm border border-brand-border flex items-center justify-center mb-8 shadow-xl shadow-black/10 group-hover:border-amber-500/50 group-hover:bg-brand-surface transition-all duration-300 relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" }),
            /* @__PURE__ */ jsx(step.icon, { className: "w-10 h-10 text-brand-primary group-hover:text-amber-400 transition-colors duration-300", strokeWidth: 1.5 })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 mb-3", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-amber-500 tracking-widest uppercase", children: step.label }) }),
          /* @__PURE__ */ jsx("h4", { className: "text-brand-text-primary font-extrabold text-sm mb-4 uppercase tracking-wider h-10 flex items-center justify-center", children: step.title }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-sm leading-relaxed max-w-[250px]", children: step.description })
        ] }, index))
      ] })
    ] })
  ] });
};
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    try {
      await submitToSpreadsheet(data);
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => {
        setSubmitted(false);
      }, 8e3);
    } catch (err) {
      setError("Connection timeout. Please check your network or email sales@simtope.com");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24 bg-brand-dark", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-brand-text-primary mb-4", children: "Partner with Simtope" }),
      /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary", children: "Our regional specialists are ready to architect your global connectivity solution." })
    ] }),
    submitted ? /* @__PURE__ */ jsxs("div", { className: "bg-green-500/10 border border-green-500/20 text-green-400 p-10 rounded-xl text-center animate-fade-in flex flex-col items-center", children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "w-16 h-16 mb-4 animate-bounce" }),
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: "Request Synced" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-brand-text-secondary", children: "Your data has been securely posted to our project management sheet. A representative will contact you shortly." }),
      /* @__PURE__ */ jsx(Button, { variant: "outline", className: "mt-6 border-green-500/30 text-green-400", onClick: () => setSubmitted(false), children: "Send another request" })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "fullName", className: "block text-sm font-medium text-brand-text-secondary mb-2", children: "Full Name" }),
          /* @__PURE__ */ jsx("input", { id: "fullName", name: "fullName", type: "text", required: true, disabled: isSubmitting, className: "w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50", placeholder: "John Doe" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-brand-text-secondary mb-2", children: "Company Email" }),
          /* @__PURE__ */ jsx("input", { id: "email", name: "email", type: "email", required: true, disabled: isSubmitting, className: "w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50", placeholder: "john@company.com" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "companyName", className: "block text-sm font-medium text-brand-text-secondary mb-2", children: "Company Name" }),
          /* @__PURE__ */ jsx("input", { id: "companyName", name: "companyName", type: "text", required: true, disabled: isSubmitting, className: "w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50", placeholder: "Tech Industries Ltd" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "interest", className: "block text-sm font-medium text-brand-text-secondary mb-2", children: "Interest" }),
          /* @__PURE__ */ jsxs("select", { id: "interest", name: "interest", disabled: isSubmitting, className: "w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50", children: [
            /* @__PURE__ */ jsx("option", { value: "eSIM Deployment", children: "eSIM Deployment" }),
            /* @__PURE__ */ jsx("option", { value: "Industrial MFF2", children: "Industrial MFF2" }),
            /* @__PURE__ */ jsx("option", { value: "Satellite Connectivity", children: "Satellite Connectivity" }),
            /* @__PURE__ */ jsx("option", { value: "Distributor Partnership", children: "Distributor Partnership" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "projectDetails", className: "block text-sm font-medium text-brand-text-secondary mb-2", children: "Project Details" }),
        /* @__PURE__ */ jsx("textarea", { id: "projectDetails", name: "projectDetails", rows: 4, disabled: isSubmitting, className: "w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50", placeholder: "Tell us about your hardware or scaling requirements..." })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-md text-sm animate-pulse", children: error }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", className: "w-full md:w-auto min-w-[220px]", disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 mr-3 animate-spin" }),
        "Uploading Data..."
      ] }) : "Submit" }) })
    ] })
  ] }) }) });
};
const Home = () => {
  const { onNavigate } = useOutletContext();
  return /* @__PURE__ */ jsxs("div", { className: "animate-fade-in space-y-0", children: [
    /* @__PURE__ */ jsx(Hero, { onConnect: () => onNavigate("contact", "contact-form") }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" }),
      /* @__PURE__ */ jsx(Services, {})
    ] }),
    /* @__PURE__ */ jsx(Features, {}),
    /* @__PURE__ */ jsx(Process, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
};
function Page() {
  return /* @__PURE__ */ jsx(Home, {});
}
export {
  Page
};
