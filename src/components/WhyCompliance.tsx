import Section2Image from "../assets/Section2-Image.png";
import RegulatoryClarity from "../assets/Regulatory Clarity.png";
import HassleFreeFiling from "../assets/Hassle-Free.png";
import RiskProtection from "../assets/Risk Protection.png";
import Vector2 from "../assets/Vector2.png";
import Vector1 from "../assets/Vector1.png";
const benefits = [
  {
    icon: RegulatoryClarity,
    title: "Regulatory Clarity",
    desc: "We decode complex compliance rules into simple, actionable steps.",
  },
  {
    icon: HassleFreeFiling,
    title: "Hassle-Free Filings Clarity",
    desc: "From registration to ongoing reporting—we manage it end-to-end.",
  },
  {
    icon: RiskProtection,
    title: "Risk Protection",
    desc: "Stay ahead of audits, inspections, and compliance gaps with proactive support.",
  },
];

export default function WhyCompliance() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">

        {/* Left: Heading + Illustration */}
        <div className="flex-1">

          {/* Heading block matching the screenshot */}
          <div className="mb-8">
            {/* Line 1: "Why Compliance Matters" */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Why{" "}
              <span className="text-blue-600">Compliance Matters</span>
            </h2>

            {/* Line 2: "For Research Analysts" + decorative vector sitting beside it */}
            <div className="flex items-end gap-2 mt-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                For Research Analysts
              </h2>
              {/* Decorative squiggle vector from assets */}
              <img
                src={Vector2}
                alt=""
                className="w-8 h-10 object-contain mb-1 opacity-70 pointer-events-none"
              />
            </div>
          </div>

          {/* Illustration below heading */}
          <div className="bg-blue-50 rounded-3xl p-4 flex items-center justify-center">
            <img
              src={Section2Image}
              alt="Compliance illustration"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>
        </div>

        {/* Right: Paragraph + Benefits */}
        <div className="flex-1 max-w-lg pt-2">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
            In Today's Regulatory Environment, Even A Small Oversight Can Lead To
            Penalties, Reputational Risks, And Loss Of Client Trust. We Help Research
            Analysts And Firms Navigate Complex Compliance Requirements So They
            Can Focus On Delivering High-Quality Research Without Worry.
          </p>

          <div className="space-y-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 p-2">
                  <img src={b.icon} alt={b.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-base mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={Vector1} className="m-2" />
    </section>
  );
}