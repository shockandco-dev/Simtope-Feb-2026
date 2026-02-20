import { jsxs, jsx } from "react/jsx-runtime";
import { Database, CalendarCheck, Cpu, ChevronRight } from "lucide-react";
const ZeroDataPage = ({ onNavigate }) => {
  const FeatureCard = ({ icon: Icon, title, body }) => /* @__PURE__ */ jsx("div", { className: "bg-slate-800 p-6 rounded-lg border border-slate-700 transition-all hover:border-blue-500/50 hover:shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-slate-700 p-3 rounded-full mr-4", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-blue-400" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-slate-400 leading-relaxed", children: body })
    ] })
  ] }) });
  const FaqItem = ({ question, answer }) => /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-700 py-6", children: [
    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white text-lg mb-2", children: question }),
    /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: answer })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 text-slate-400 font-sans", children: [
    /* @__PURE__ */ jsx("section", { className: "py-32 text-center", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block bg-blue-600/10 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-4", children: "Limited Time Offer" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold text-white mb-4 leading-tight", children: [
        "Carrier-Grade Connectivity. ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600", children: "$0 Monthly Data Costs." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-8", children: "We are covering the data bill for new customers for their first 6 months. No hidden fees. Just pure connectivity." }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center flex-col sm:flex-row gap-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onNavigate("contact"),
          className: "w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/20",
          children: "Claim Your 6-Month Credit"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500 mt-4 max-w-2xl mx-auto", children: "*Offer valid for new customers only. Maximum $5,000 of data per month for 6 months, does not include voice or SMS, on a 12-month contract. Static IP extra." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-900/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-white mb-12", children: "The Offer, Defined." }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          FeatureCard,
          {
            icon: Database,
            title: "100% Data Credit",
            body: "We credit your account for every MB of data used, up to $5,000 per month."
          }
        ),
        /* @__PURE__ */ jsx(
          FeatureCard,
          {
            icon: CalendarCheck,
            title: "6 Months of Runway",
            body: "The credit applies automatically for your first 6 billing cycles. No rebate forms required."
          }
        ),
        /* @__PURE__ */ jsx(
          FeatureCard,
          {
            icon: Cpu,
            title: "Universal Compatibility",
            body: "Valid for any standard or industrial SIM form factor (2FF, 3FF, 4FF, MFF2) on our Tier-1 networks."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto bg-slate-800 p-8 sm:p-12 rounded-2xl border border-slate-700 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Why are we doing this?" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg text-slate-300 leading-relaxed", children: [
        "Switching connectivity providers is often a headache. We know that.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "We are so confident that you will prefer our Hassle Free platform over your current carrier that we are willing to pay for your data just to get you to try it. We are removing the friction so you can experience the upgrade risk-free."
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-white", children: "Come for the $0 Data. Stay for the Control." }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Hassle Free" }),
            /* @__PURE__ */ jsx("p", { children: "No phone queues. No 'submit a ticket to activate a SIM.' You have total control over your fleet." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Self-Serve Command" }),
            /* @__PURE__ */ jsx("p", { children: "Manage 10 to 1,000 SIMs from a single dashboard. Activate, pause, and monitor usage in real-time." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Shared Data Pools" }),
            /* @__PURE__ */ jsx("p", { children: "Your low-usage devices cover your high-usage ones. No bill shock, just predictable billing." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-slate-800 p-8 rounded-lg border border-slate-700 h-.flex.flex-col.justify-center.items-center.min-h-_300px_", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 font-medium", children: "Live Usage" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full", children: "● Live" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 p-6 rounded-md", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-1", children: "Current Monthly Usage" }),
            /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold text-white", children: "$4,298" })
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-slate-900/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-3xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-center text-white mb-10", children: "Common Questions" }),
      /* @__PURE__ */ jsxs("div", { className: "border-b border-slate-700", children: [
        /* @__PURE__ */ jsx(
          FaqItem,
          {
            question: "What happens after 6 months?",
            answer: "You seamlessly roll onto our standard agile pricing. We will notify you 30 days before the transition."
          }
        ),
        /* @__PURE__ */ jsx(
          FaqItem,
          {
            question: "Is there a lock-in contract?",
            answer: "The terms of this offer require a 1 year contract. After that, it flips to a monthly contract."
          }
        ),
        /* @__PURE__ */ jsx(
          FaqItem,
          {
            question: "What if I exceed the $5,000/mo cap?",
            answer: "You simply pay the standard rate for any data usage above the $5,000 credit."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 text-center", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-2xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Stop overpaying for connectivity you can’t control." }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => onNavigate("contact"),
          className: "w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center mx-auto gap-2",
          children: [
            "Get Started with $0 Data",
            /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
          ]
        }
      )
    ] }) })
  ] });
};
function Page() {
  return /* @__PURE__ */ jsx(ZeroDataPage, {});
}
export {
  Page
};
