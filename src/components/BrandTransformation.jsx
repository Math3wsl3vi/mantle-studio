import { useState } from 'react';

const BrandTransformations = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
  {
    title: "Brand Transformation",
    company: "Tumalock Escrow Limited",
    tagline: "Trust, Designed In",
    description:
      "A digital escrow platform redefining how trust, transparency, and security are experienced in modern transactions.",
    mainText:
      "From a functional service to a confident digital presence — Mantle helped Tumalock uncover its deeper narrative, shaping a brand and strategy built to inspire trust, scale with clarity, and stand apart in a crowded financial space.",
    contentTitle: "Reframing the Brand",
    contentDescription:
      "By aligning purpose, voice, and visual language, we transformed how the brand presents itself — internally and to the world.",
    quote:
      "Mantle felt aligned with us from the very beginning. They understood not just what we do, but why it matters. Their ability to translate complexity into a clear, confident brand has given our entire team something to stand behind with pride.",
    quoteAuthor:
      "— Leadership Team, Tumalock Escrow Limited",
  },
  {
    title: "The Shift",
    company: "Innovation Hub",
    tagline: "Direction, Distilled",
    description:
      "A future-focused organisation navigating growth, complexity, and evolving market expectations.",
    mainText:
      "Clarity changes everything. Mantle worked closely with the team to distill their vision into a focused strategy — one that guides decisions, aligns stakeholders, and creates momentum with intention.",
    contentTitle: "Finding the Signal",
    contentDescription:
      "We stripped away noise, sharpened priorities, and helped define a strategic path the entire organisation could move forward with confidence.",
    quote:
      "The process brought a level of clarity we hadn’t experienced before. What once felt fragmented now feels coherent, deliberate, and energising.",
    quoteAuthor:
      "Sarah Mitchell — Chief Strategy Officer",
  },
  {
    title: "Changing the Conversation",
    company: "Market Leaders",
    tagline: "A New Way to Be Seen",
    description:
      "An ambitious brand ready to challenge assumptions and reshape its place in the market.",
    mainText:
      "Repositioning isn’t about changing direction — it’s about changing perspective. Mantle helped redefine how the category itself is understood, opening space for differentiation, relevance, and long-term growth.",
    contentTitle: "Shaping the Narrative",
    contentDescription:
      "By reframing the conversation, we enabled the brand to move from participant to reference point within its category.",
    quote:
      "The shift was immediate. We stopped competing on the same terms and started leading the conversation. Mantle helped us see our category differently — and so did the market.",
    quoteAuthor:
      "Laura Anyango — CEO, Bloom",
  },
];


  const currentTab = tabsData[activeTab];

  return (
    <section className="min-h-screen bg-black px-5 py-16 pt-20 text-white md:px-10 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Heading */}
        <h1 className="mb-20 text-center text-[clamp(2.5rem,5vw,4rem)] font-normal leading-tight">
          The <span className="italic">Art</span>  of Becoming
        </h1>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-4">
          {tabsData.map((tab, index) => (
            <button 
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-full border px-7 py-3 text-sm transition ${
                activeTab === index 
                  ? 'border-white/50 bg-white/20 hover:bg-white/10' 
                  : 'border-white/30 hover:bg-white/10'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left Card */}
          <div className="rounded-2xl bg-[#f5f5f5] p-12 text-[#2d2d2d] md:p-14">
            <div className="mb-10">
              <h2 className="text-4xl font-bold leading-tight">
                {currentTab.company.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < currentTab.company.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </h2>

              <span className="mt-4 inline-block rounded-full bg-[#2d2d2d] px-4 py-2 text-sm text-white">
                {currentTab.tagline}
              </span>
            </div>

            <p className="mt-10 text-base leading-relaxed text-[#666]">
              {currentTab.description}
            </p>

            <p className="mt-12 text-lg leading-relaxed">
              <strong className="font-semibold text-black">
                {currentTab.mainText.split(' — ')[0]}
              </strong>{" "}
              {currentTab.mainText.split(' — ')[1]}
            </p>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="mb-8 text-3xl font-medium">
              {currentTab.contentTitle}
            </h3>

            <p className="mb-12 text-lg leading-relaxed">
              {currentTab.contentDescription}
            </p>

            <div className="rounded-lg border-l-4 border-white/30 bg-white/5 p-8">
              <p className="mb-5 text-base italic leading-relaxed">
               {currentTab.quote}
              </p>

              <p className="text-sm font-semibold">
                {currentTab.quoteAuthor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTransformations;
