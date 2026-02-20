import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { B as Button } from "../chunks/chunk-BpY4DcCL.js";
import { MapPin, Phone, Loader2 } from "lucide-react";
import { s as submitToSpreadsheet } from "../chunks/chunk-BsyCvPk0.js";
const ContactPage = () => {
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
      }, 6e3);
    } catch (err) {
      setError("Unable to submit. Please check your connection or contact sales@simtope.com");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary", children: [
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-brand-surface border-b border-brand-border relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-primary/5" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold mb-6", children: "Contact Simtope" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-brand-text-secondary max-w-2xl mx-auto", children: "We're here to help you architect the perfect connectivity solution. Reach out to our regional offices or send us a direct inquiry." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-brand-surface p-8 rounded-2xl border border-brand-border hover:border-brand-primary transition-all duration-300 shadow-lg group", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-blue-500 border border-brand-border group-hover:bg-blue-500/10 transition-colors shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "w-7 h-7" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: "US Office" }),
          /* @__PURE__ */ jsxs("address", { className: "not-italic text-brand-text-secondary space-y-1 mb-6 text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "1429 Meadows Court" }),
            /* @__PURE__ */ jsx("p", { children: "Greentown, IN, USA" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "tel:+18003810826", className: "flex items-center gap-3 text-brand-text-primary hover:text-brand-accent transition-colors font-medium text-lg", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { children: "(800) 381-0826" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "bg-brand-surface p-8 rounded-2xl border border-brand-border hover:border-brand-primary transition-all duration-300 shadow-lg group", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-red-500 border border-brand-border group-hover:bg-red-500/10 transition-colors shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "w-7 h-7" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: "Canadian Office" }),
          /* @__PURE__ */ jsxs("address", { className: "not-italic text-brand-text-secondary space-y-1 mb-6 text-lg", children: [
            /* @__PURE__ */ jsx("p", { children: "129 John Cavanaugh" }),
            /* @__PURE__ */ jsx("p", { children: "Carp, ON, CA" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "tel:+18002688628", className: "flex items-center gap-3 text-brand-text-primary hover:text-brand-accent transition-colors font-medium text-lg", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { children: "(800) 268-8628" })
          ] })
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "contact-form", className: "py-24 bg-brand-dark border-t border-brand-border relative", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-brand-text-primary mb-4", children: "Partner with Simtope" }),
        /* @__PURE__ */ jsx("p", { className: "text-brand-text-secondary", children: "Our data-driven consultation process starts here. Your request will be instantly synced to our project queue." })
      ] }),
      submitted ? /* @__PURE__ */ jsxs("div", { className: "bg-green-500/10 border border-green-500/20 text-green-400 p-8 rounded-lg text-center animate-fade-in", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: "Data Synced" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Your consultation request has been successfully logged. We will reach out within 2 business hours." })
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
              /* @__PURE__ */ jsx("option", { value: "Distributor Partnership", children: "Distributor Partnership" }),
              /* @__PURE__ */ jsx("option", { value: "General Inquiry", children: "General Inquiry" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "projectDetails", className: "block text-sm font-medium text-brand-text-secondary mb-2", children: "Project Details" }),
          /* @__PURE__ */ jsx("textarea", { id: "projectDetails", name: "projectDetails", rows: 4, disabled: isSubmitting, className: "w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50", placeholder: "Tell us about your estimated volume..." })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "text-red-400 text-sm font-medium", children: error }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", className: "w-full md:w-auto min-w-[200px]", disabled: isSubmitting, children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Loader2, { className: "w-5 h-5 mr-2 animate-spin" }),
          "Sending..."
        ] }) : "Submit" }) })
      ] })
    ] }) }) })
  ] });
};
function Page() {
  return /* @__PURE__ */ jsx(ContactPage, {});
}
export {
  Page
};
