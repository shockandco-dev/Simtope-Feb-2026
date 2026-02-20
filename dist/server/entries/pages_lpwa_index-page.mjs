import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { B as Button } from "../chunks/chunk-BpY4DcCL.js";
import { Signal, BatteryCharging, CheckCircle2, Activity, Globe, Layers, LayoutDashboard, Wifi, Cpu, Box, Tractor, Zap, ChevronUp, ChevronDown } from "lucide-react";
const LPWAPage = () => {
  const { onNavigate } = useOutletContext();
  return /* @__PURE__ */ jsxs("div", { className: "pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-20 lg:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-surface to-brand-dark" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", style: { backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "40px 40px" } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl lg:text-6xl font-bold mb-6 leading-tight", children: [
            "Unlocking the Power of ",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent", children: "LTE-M and NB-IoT Connectivity" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-brand-text-secondary mb-8 leading-relaxed", children: "Ultra-efficient, low-power solutions designed for massive scale and optimal battery life. Deploy your devices with seamless, multi-carrier coverage." }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", onClick: () => onNavigate("contact", "contact-form"), children: "Talk to an LPWAN Expert" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center relative", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md aspect-square bg-brand-surface/30 rounded-full border border-brand-primary/20 flex items-center justify-center backdrop-blur-sm animate-pulse-slow", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-primary/5 rounded-full blur-3xl" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-48 h-48 bg-brand-dark border border-brand-accent rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-brand-accent/20", children: [
            /* @__PURE__ */ jsx(Signal, { className: "w-16 h-16 text-brand-accent mb-2" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1 mt-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-bounce" }),
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100" }),
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-brand-text-secondary mt-2 font-mono", children: "SIGNAL_LOCKED" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute w-72 h-72 border border-brand-text-secondary/20 rounded-full animate-[spin_20s_linear_infinite]", children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-dark p-2 rounded-full border border-brand-border", children: /* @__PURE__ */ jsx(BatteryCharging, { className: "w-6 h-6 text-brand-primary" }) }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-surface border-y border-brand-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-6 text-brand-text-primary", children: [
          "Next-Generation LPWAN: ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-brand-primary", children: "Low Power, High Efficiency" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-lg leading-relaxed mb-8", children: "Our LPWAN solutions, powered by both LTE-M (Cat-M1) and NB-IoT, are purpose-built for the demands of long-life, high-density IoT deployments. These standards maximize battery life and ensure deep indoor signal penetration, making them the ultimate choice for stationary and mobile assets transmitting small amounts of data." }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-brand-accent shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-brand-text-primary", children: "Optimized for small data packets and infrequent transmission." })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-brand-accent shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-brand-text-primary", children: "Supports massive connection density per cell tower." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-brand-dark rounded-xl border border-brand-border p-8 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 bg-brand-surface/50 rounded-lg p-6 flex flex-col items-center text-center border border-brand-border hover:border-brand-primary transition-colors", children: [
          /* @__PURE__ */ jsx(Activity, { className: "w-10 h-10 text-blue-400 mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-2", children: "LTE-M" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-brand-text-secondary space-y-2", children: [
            /* @__PURE__ */ jsx("p", { children: "Higher Data Rates" }),
            /* @__PURE__ */ jsx("p", { children: "Voice Support (VoLTE)" }),
            /* @__PURE__ */ jsx("p", { children: "Full Mobility" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 bg-brand-surface/50 rounded-lg p-6 flex flex-col items-center text-center border border-brand-border hover:border-green-400 transition-colors", children: [
          /* @__PURE__ */ jsx(Signal, { className: "w-10 h-10 text-green-400 mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white mb-2", children: "NB-IoT" }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-brand-text-secondary space-y-2", children: [
            /* @__PURE__ */ jsx("p", { children: "Max Penetration" }),
            /* @__PURE__ */ jsx("p", { children: "Max Battery Life" }),
            /* @__PURE__ */ jsx("p", { children: "Stationary Assets" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 mt-4 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full w-full mb-2" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-brand-text-secondary uppercase tracking-widest", children: "Unified Simtope Platform" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Trusted Multi-Carrier Coverage for LPWAN" }),
      /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-lg mb-12", children: "Eliminate coverage gaps and ensure redundancy with direct access to leading North American networks. Our SIMs connect instantly to the strongest available signal across our trusted partners:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0", children: /* @__PURE__ */ jsx("img", { src: "https://www.freeiconspng.com/uploads/verizon-logo-png-1.png", alt: "Verizon", className: "w-full h-full object-contain" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-lg", children: "Verizon" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0", children: /* @__PURE__ */ jsx("img", { src: "https://simtope.com/_assets/media/0b9d1fecd75255ca3527771141ee642a.png", alt: "AT&T", className: "w-full h-full object-contain" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-lg", children: "AT&T" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0", children: /* @__PURE__ */ jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rogers_logo.svg/2560px-Rogers_logo.svg.png", alt: "Rogers", className: "w-full h-full object-contain" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-lg", children: "Rogers" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0", children: /* @__PURE__ */ jsx("img", { src: "https://1000logos.net/wp-content/uploads/2021/09/Telus-Symbol.png", alt: "Telus", className: "w-full h-full object-contain" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-lg", children: "Telus" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-surface border-y border-brand-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Simplify Connectivity with Simtope's LPWAN Data Plans" }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg hover:-translate-y-1 transition-transform duration-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary border border-brand-border", children: /* @__PURE__ */ jsx(Globe, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Global Connectivity" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-sm leading-relaxed", children: "Connect your devices seamlessly across multiple countries with unified plans, simplifying deployment regardless of location." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg hover:-translate-y-1 transition-transform duration-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary border border-brand-border", children: /* @__PURE__ */ jsx(Layers, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Flexible Plans" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-sm leading-relaxed", children: "You can quickly scale your IoT deployment by adding new plans from different carriers and managing all your connections within a single platform." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg hover:-translate-y-1 transition-transform duration-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center text-brand-primary border border-brand-border", children: /* @__PURE__ */ jsx(LayoutDashboard, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Multi-Carrier Platform" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-sm leading-relaxed", children: "Access a platform that integrates data from various MNOs to give you visibility across your entire deployment of devices, helping you optimize costs and make better-informed business decisions." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-16", children: "Why Choose LPWAN for Your Next Deployment?" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-400/10 transition-colors", children: /* @__PURE__ */ jsx(BatteryCharging, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: "Extended Battery Life" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary", children: "Achieve up to 10+ years of operation from a single battery due to reduced power consumption during idle and transmission (PSM and eDRX)." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-400/10 transition-colors", children: /* @__PURE__ */ jsx(Wifi, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: "Deep Indoor Penetration" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary", children: "LPWAN signals can reach devices located deep inside buildings or underground (e.g., utility meters) where standard cellular struggles." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-400/10 transition-colors", children: /* @__PURE__ */ jsx(Signal, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: "Massive Device Density" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary", children: "Support the connection of millions of devices per square kilometer, enabling true hyper-scale IoT deployments." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center text-amber-400 mb-6 group-hover:bg-amber-400/10 transition-colors", children: /* @__PURE__ */ jsx(Cpu, { className: "w-8 h-8" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: "Low Module Cost" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary", children: "Lower complexity results in less expensive cellular hardware modules, driving down the overall bill of materials for your product." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-surface border-t border-brand-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-16", children: "Explore LPWAN Applications" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "group", children: [
          /* @__PURE__ */ jsxs("div", { className: "aspect-video bg-brand-dark rounded-xl overflow-hidden mb-6 border border-brand-border relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
                alt: "Smart Logistics",
                className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80" }),
            /* @__PURE__ */ jsx(Box, { className: "absolute bottom-4 left-4 text-white w-8 h-8" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-brand-text-primary mb-2", children: "Smart Logistics & Asset Tracking" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary leading-relaxed", children: "Use LPWAN’s superior battery life to track non-powered assets like shipping containers, pallets, and equipment over long periods without frequent charging." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group", children: [
          /* @__PURE__ */ jsxs("div", { className: "aspect-video bg-brand-dark rounded-xl overflow-hidden mb-6 border border-brand-border relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000",
                alt: "Smart Agriculture",
                className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80" }),
            /* @__PURE__ */ jsx(Tractor, { className: "absolute bottom-4 left-4 text-white w-8 h-8" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-brand-text-primary mb-2", children: "Smart Agriculture" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary leading-relaxed", children: "Monitor soil conditions, weather patterns, and livestock location across vast rural landscapes, leveraging the deep penetration of LPWAN technology." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group", children: [
          /* @__PURE__ */ jsxs("div", { className: "aspect-video bg-brand-dark rounded-xl overflow-hidden mb-6 border border-brand-border relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1000",
                alt: "Smart Utilities",
                className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-80" }),
            /* @__PURE__ */ jsx(Zap, { className: "absolute bottom-4 left-4 text-white w-8 h-8" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-brand-text-primary mb-2", children: "Smart Utilities & Metering" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary leading-relaxed", children: "Enable highly efficient, cost-effective data collection from gas, water, and electricity meters, supporting municipal infrastructure management." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center mb-12", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            question: "What is the difference between LTE-M and NB-IoT?",
            answer: "LTE-M (Cat-M1) supports higher data rates and mobility (like in vehicles), while NB-IoT is optimized for maximum signal penetration, extremely long battery life, and stationary devices with very low data needs."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            question: "Can I use one SIM for both LTE-M and NB-IoT?",
            answer: "Yes, our advanced SIMs are designed to provision the appropriate LPWAN technology based on network availability and device capability, ensuring future-proofing and flexibility."
          }
        ),
        /* @__PURE__ */ jsx(
          FAQItem,
          {
            question: "How does LPWAN save on power consumption?",
            answer: "LPWAN employs features like Power Saving Mode (PSM) and Extended Discontinuous Reception (eDRX) that allow the device to sleep for long periods, dramatically reducing power draw compared to traditional cellular."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-br from-brand-primary to-blue-900 text-white border-t border-brand-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: "Start Your LPWAN Deployment." }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-lg mb-10 max-w-2xl mx-auto", children: "Get ultra-efficient connectivity designed for scale, durability, and battery life." }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-6", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", className: "border-white text-white hover:bg-white/10 w-full sm:w-auto", onClick: () => onNavigate("contact", "contact-form"), children: "Talk to an LPWAN Expert" }) })
    ] }) })
  ] });
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border border-brand-border rounded-lg bg-brand-surface overflow-hidden", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-5 text-left font-medium text-brand-text-primary hover:bg-white/5 transition-colors",
        children: [
          question,
          isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-brand-primary" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-brand-text-secondary" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`,
        children: /* @__PURE__ */ jsx("div", { className: "p-5 pt-0 text-brand-text-secondary text-sm border-t border-brand-border/30", children: /* @__PURE__ */ jsx("div", { className: "pt-4 leading-relaxed", children: answer }) })
      }
    )
  ] });
};
function Page() {
  return /* @__PURE__ */ jsx(LPWAPage, {});
}
export {
  Page
};
