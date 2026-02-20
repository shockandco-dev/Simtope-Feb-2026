import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { B as Button } from "../chunks/chunk-BpY4DcCL.js";
import { Globe2, Zap, Settings, ShieldCheck, CreditCard, Activity, Lock, Smartphone, Car, Gauge, BatteryCharging, Truck, Container, ChevronUp, ChevronDown } from "lucide-react";
const SimManagementPage = () => {
  const { onNavigate } = useOutletContext();
  return /* @__PURE__ */ jsxs("div", { className: "pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-24 lg:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 opacity-20", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
            alt: "Industrial IoT Background",
            className: "w-full h-full object-cover grayscale"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-dark/80 mix-blend-multiply" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block", children: "Simtope IoT Control Center" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl lg:text-6xl font-bold mb-6 leading-tight", children: [
          "IoT made smarter, ",
          /* @__PURE__ */ jsx("br", {}),
          "simpler, and ready to ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent", children: "drive growth" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-brand-text-secondary mb-8 leading-relaxed max-w-2xl", children: "Manage your connectivity and the entire lifecycle of your IoT devices from one connectivity management platform. Scale faster with automated provisioning and real-time diagnostics." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: /* @__PURE__ */ jsx(Button, { size: "lg", onClick: () => onNavigate("contact", "contact-form"), children: "Request Platform Demo" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-surface border-y border-brand-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Boost IoT: Scale faster, operate smarter, protect better" }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary", children: "Empowering your business with the tools to dominate the connected future." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx(Globe2, { className: "w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-3", children: "Unmatched global scale" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-sm text-brand-text-secondary space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: "• 190+ countries covered" }),
            /* @__PURE__ */ jsx("li", { children: "• Tier-1 Carrier Partnerships" }),
            /* @__PURE__ */ jsx("li", { children: "• Low latency global routing" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx(Zap, { className: "w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-3", children: "Grow faster" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary leading-relaxed", children: "Use zero-touch provisioning to activate thousands of SIMs instantly. Deploy with rules-based automation designed for your unique business scenario." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx(Settings, { className: "w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-3", children: "Operate smarter" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary leading-relaxed", children: "Streamline workflows, reduce operational costs, automatically select suitable rate plans, and respond to connectivity issues with automated diagnostics." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-primary transition-colors group", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-10 h-10 text-brand-primary mb-4 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-3", children: "Protect better" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary leading-relaxed", children: "Multilayered security protects services, devices, and data. Real-time monitoring detects and acts on unusual device behavior or usage spikes." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-center mb-16", children: "Simtope IoT Control Center key components" }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(
            FeatureAccordion,
            {
              title: "Complete automation",
              icon: Settings,
              items: [
                "Automated provisioning upon device activation",
                "Lifecycle-aware configuration (Test, Active, Retired)",
                "Business process automation via API triggers"
              ],
              defaultOpen: true
            }
          ),
          /* @__PURE__ */ jsx(
            FeatureAccordion,
            {
              title: "Flexible billing",
              icon: CreditCard,
              items: [
                "Variety of rate plans suited for IoT",
                "Split and multi-party billing capabilities",
                "Event-based incentives and data pooling credits"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            FeatureAccordion,
            {
              title: "Operational tools",
              icon: Activity,
              items: [
                "Real-time network visibility and diagnostics",
                "Dynamic reporting capabilities & data-driven insights",
                "Anomaly detection and AI-powered warning systems"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            FeatureAccordion,
            {
              title: "Integrated security",
              icon: Lock,
              items: [
                "Multi-factor authentication (MFA)",
                "Platform-level granular user access controls",
                "Device-side security (IMEI locking, IP restrictions)"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            FeatureAccordion,
            {
              title: "Support for eSIM",
              icon: Smartphone,
              items: [
                "Remote provisioning (RSP) management",
                "Over-the-air profile switching",
                "Integrations with partners for eUICC support"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[300px] md:h-[400px] w-full max-w-[600px] shadow-2xl flex flex-col overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-brand-surface relative overflow-hidden flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "h-8 bg-brand-dark border-b border-brand-border flex items-center px-4 space-x-2 shrink-0", children: [
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-red-500" }),
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
              /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" }),
              /* @__PURE__ */ jsx("div", { className: "ml-4 flex-1 h-5 bg-brand-surface rounded-md text-[10px] flex items-center px-2 text-brand-text-secondary font-mono truncate", children: "https://portal.simtope.com/dashboard" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex-1 relative bg-brand-dark", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://raw.githubusercontent.com/shockandco-dev/Simtope-Website-Redesign/refs/heads/main/assets/Simtope-SIM-Management-Dashboard.png",
                alt: "Simtope Dashboard Interface",
                className: "w-full h-full object-cover object-top"
              }
            ) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[20px] max-w-[700px] w-full shadow-xl" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-brand-surface border-t border-brand-border", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-16", children: "IoT industry use cases" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsx(
          UseCaseCard,
          {
            title: "Connected car",
            icon: Car,
            description: "Seize connected car opportunities today with a scalable, flexible architecture for tomorrow. Manage infotainment, telematics, and V2X communication from a single pane of glass.",
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
          }
        ),
        /* @__PURE__ */ jsx(
          UseCaseCard,
          {
            title: "Smart meter",
            icon: Gauge,
            description: "Monitor millions of smart meters with seamless connectivity back to billing systems and utility IT infrastructure. Ensure high reliability for critical infrastructure data.",
            image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800"
          }
        ),
        /* @__PURE__ */ jsx(
          UseCaseCard,
          {
            title: "Electric vehicle charging",
            icon: BatteryCharging,
            description: "Delivering a better customer experience, charge point operators gain an edge in a fast-growing market. Manage payment gateways and station status in real-time.",
            image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800"
          }
        ),
        /* @__PURE__ */ jsx(
          UseCaseCard,
          {
            title: "Fleet management",
            icon: Truck,
            description: "Fleet managers use real-time data from sensors and video cameras to monitor vehicles, cargo, and driver behavior. Optimize routes and reduce fuel consumption.",
            image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
          }
        ),
        /* @__PURE__ */ jsx(
          UseCaseCard,
          {
            title: "IoT asset management",
            icon: Container,
            description: "Whether you want to connect containers or cows, Simtope IoT Control Center lets you manage 10,000 IoT assets as easily as 10. Track location and condition globally.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-brand-dark relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 text-center relative z-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm font-bold text-brand-accent uppercase tracking-widest mb-4", children: "Select a communications service provider" }),
        /* @__PURE__ */ jsx("h3", { className: "text-4xl lg:text-5xl font-bold text-white mb-8", children: "Start your IoT journey" }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary text-lg mb-12 max-w-3xl mx-auto", children: "IoT should add efficiency, not complexity. But connecting cellular devices can be a manual, costly, reactive chore. The Simtope IoT Control Center manages the connectivity of all your IoT devices through one global SaaS solution." }),
        /* @__PURE__ */ jsx(Button, { size: "lg", className: "shadow-xl shadow-brand-primary/20", onClick: () => onNavigate("contact", "contact-form"), children: "Order a Starter Kit" })
      ] })
    ] })
  ] });
};
const FeatureAccordion = ({ title, items, icon: Icon, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return /* @__PURE__ */ jsxs("div", { className: "border border-brand-border rounded-lg bg-brand-surface overflow-hidden transition-all duration-300", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full flex items-center justify-between p-5 text-left group",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isOpen ? "bg-brand-primary text-white" : "bg-brand-dark text-brand-text-secondary group-hover:bg-brand-dark/80"}`, children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }),
            /* @__PURE__ */ jsx("span", { className: `font-bold text-lg ${isOpen ? "text-brand-text-primary" : "text-brand-text-secondary group-hover:text-brand-text-primary"}`, children: title })
          ] }),
          isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-brand-primary" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-brand-text-secondary" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsx("ul", { className: "p-5 pt-0 ml-14 space-y-2", children: items.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-brand-text-secondary text-sm flex items-start gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 shrink-0" }),
      item
    ] }, idx)) }) })
  ] });
};
const UseCaseCard = ({ title, description, image, icon: Icon }) => {
  return /* @__PURE__ */ jsxs("div", { className: "group bg-brand-dark border border-brand-border rounded-xl overflow-hidden hover:border-brand-primary transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "h-48 overflow-hidden relative", children: [
      /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-90" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 flex items-center gap-2", children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-brand-surface/90 backdrop-blur flex items-center justify-center text-brand-primary", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-brand-text-secondary leading-relaxed mb-6 flex-grow", children: description })
    ] })
  ] });
};
function Page() {
  return /* @__PURE__ */ jsx(SimManagementPage, {});
}
export {
  Page
};
