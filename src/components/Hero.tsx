import BannerImage from "../assets/Banner Image.png";
import CheckSign from "../assets/check-sign.png";
import Vector1 from "../assets/Vector1.png";
import UnderlineVector from "../assets/underline-Vector.png";

const features = [
  "End-To-End Compliance Support",
  "Regulatory Filings Made Simple",
  "Tailored Solutions For Independent Analysts & Firms",
];

export default function Hero() {
  return (
    <section className="bg-gray-50 overflow-hidden relative">
      {/* Decorative vectors */}
      <img
        src={Vector1}
        alt=""
        className="absolute top-6 right-10 w-20 opacity-60 pointer-events-none hidden md:block"
      />
  

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-1">
            Simplifying
          </h1>
          <div className="relative inline-block mb-1">
            <span className="text-4xl md:text-5xl font-extrabold text-blue-600">
              Compliance
            </span>
            <img
              src={UnderlineVector}
              alt=""
              className="absolute -bottom-2 left-0 w-full pointer-events-none"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 mt-2">
            For Research Analysts
          </h1>

          <p className="text-gray-500 text-sm md:text-base mb-6 leading-relaxed">
            Stay Focused On Your Insights—We'll Handle The Compliance. Our Expert
            Solutions Ensure Your Research Practices Meet Every Regulatory
            Requirement With Confidence And Ease.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                <img src={CheckSign} alt="✓" className="w-5 h-5 object-contain shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-7 py-3 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all">
              Book A Consultation
            </button>
          </div>
        </div>

        {/* Right: Banner Image + Badges */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            <img
              src={BannerImage}
              alt="Compliance Analyst"
              className="w-72 md:w-96 h-auto object-contain drop-shadow-xl"
            />

            {/* Rating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">4.8</div>
                <div className="flex text-yellow-400 text-xs gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <div className="text-xs text-gray-400 font-medium">Clients Rating</div>
              </div>
            </div>

            {/* Trusted Badge */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
              <div className="text-xs text-gray-500 font-medium">Trusted By</div>
              <div className="text-xl font-extrabold text-blue-600">250+</div>
              <div className="text-xs text-gray-400">Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}