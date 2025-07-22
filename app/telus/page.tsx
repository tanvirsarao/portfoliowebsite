export default function TelusPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-6 max-w-2xl py-12">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <h1 className="text-2xl font-bold text-white mb-8">Hi! 👋</h1>

          <p className="text-3xl font-bold text-purple-400 mb-6">I'm Tanvir Sarao.</p>

          <div className="flex flex-col gap-3 my-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold underline hover:text-purple-300 transition-colors duration-200 text-sm w-fit"
            >
              → View my Resume
            </a>
            <a
              href="https://linkedin.com/in/tanvir-sarao"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-bold underline hover:text-blue-300 transition-colors duration-200 text-sm w-fit"
            >
              → Connect with me on LinkedIn
            </a>
          </div>

          <p>I'm an aspiring product-focused software developer 🚀</p>

          <p>
            I'm double majoring in <strong className="text-purple-400">Computer Science and Finance</strong> at the{" "}
            <strong className="text-purple-400">University of Waterloo</strong> 🎓
          </p>

          <p>
            I have a growth mindset. I'm product and data driven 📊 - I believe in making decisions based on real user feedback
            and metrics, constantly iterating to deliver solutions that create measurable business value and drive
            meaningful outcomes.
          </p>

          <p>I'm looking to join your team for a Fall 2025 role in Software Development, Product Management (or the intersection of the two!) 💼</p>

          <hr className="border-gray-800 my-8" />

          <p>
            I just marked the half-way point of my first co-op term here at <strong className="text-purple-400">TELUS</strong> as a Software and
            Data Engineer Intern on the Enterprise SaaS and Cloud Optimization team 🔧
          </p>

          <p>
            I serve as the technical point of contact for data automation and reporting, overseeing{" "}
            <strong>$600M+ in spend</strong> across 20+ business units and enabling executive insights 💰
          </p>

          <p>Some highlights from my time here:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Automated 20+ data sources using JavaScript to populate a TELUS-wide dashboard used by leadership to
              monitor spending trends 📈
            </li>
            <li>Led 10+ stakeholder meetings designing a centralized cloud spend dashboard from scratch 🛠️</li>
            <li>
              Delivered cross-functional solutions for 5+ teams, including Monday.com API integration and AWS migration
              support ☁️
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">What I've Learned 🧠</h2>

          <p>
            <strong>Think Business First:</strong> Every technical decision should tie back to business value. Working
            with $600M+ in spend taught me to always ask "how does this impact our bottom line?" 💡
          </p>

          <p>
            <strong>Stakeholder Management:</strong> Leading 10+ meetings across different teams taught me the
            importance of clear communication and managing expectations 📞
          </p>

          <p>
            <strong>Scale Matters:</strong> Building solutions that work across 20+ business units requires different
            thinking than personal projects. Enterprise-grade reliability is everything 🏢
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">Further goals 🎯</h2>

          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Show agency:</strong> Take ownership of end-to-end features and drive them to completion 🚀
            </li>
            <li>
              <strong>Technical and product depth:</strong> Leverage software expertise to guide impactful product development at scale 🧠⚙️
            </li>
            <li>
              <strong>Outcome-driven development:</strong> Measure product success with data and continuously iterate for improvement 📈
            </li>
            <li>
              <strong>Cross-functional impact:</strong> Work more closely with product and business teams to drive
              strategy 📊
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">Other Experience 💼</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-purple-400">Arnii Fitness 🏋️‍♂️</h3>
              <p className="text-sm text-gray-400 mb-2">Role: Artificial Intelligence Engineer</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  Built AI-powered workout recommendation system serving 3,000+ users worldwide, reducing token usage by
                  25% and improving response time by 30%
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-purple-400">AgentEdge Inc 🏠</h3>
              <p className="text-sm text-gray-400 mb-2">Role: Backend Software Engineer</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  Developed a CMS platform for 20+ real estate professionals serving 85,000+ annual visitors, reducing
                  code redundancy by 25% and optimizing delivery speed by 30%
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">Some cool software I've built 🛠️</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-purple-400">StoreReplay for Shopify 🛍️</h3>
              <p className="text-sm text-gray-400 mb-2">
                Technologies: React, Vite, Node.js, Express.js, Supabase, PostgreSQL, AWS S3, OpenAI
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  Built a session analytics platform within a week
                  for Shopify merchants, turning user behavior into AI-generated insights to improve conversions and
                  reduce friction points
                </li>
                  <li>
                  <strong>Recognition:</strong> Over 20,000+ views within a week and recruiter interest from Shopify and multiple banks 💼
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-purple-400">AI Financial Portfolio Advisor - 3rd Place Winner 🏆</h3>
              <p className="text-sm text-gray-400 mb-2">Technologies: Python, PyTorch, Pandas, NumPy</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>
                  Achieved 88.32% of market benchmark performance across a $1M
                  portfolio using LSTM neural networks and 10,000 concurrent Monte Carlo simulations, demonstrating
                  potential to manage real investment portfolios worth millions
                </li>
                <li>
                  <strong>Recognition:</strong> Placed 3rd out of 25+ competitors in CFM 101 Annual Competition 🥉
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-800 my-8" />

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">Why I want to return to TELUS 💜</h2>

          <p>
            Working on the ESCO team gave me incredible exposure to enterprise-scale challenges and the opportunity to
            work on solutions that directly impact TELUS's business operations. I loved the collaborative culture and
            the focus on driving real business value through data and automation 🎯
          </p>

          <p>
            I'm excited about the possibility of returning for Fall 2025. I want to take on more ownership, contribute
            to larger initiatives, and help drive impactful solutions at scale 📈
          </p>

          <p className="text-purple-400 font-semibold">Let's build something amazing together! ✨</p>
        </div>
      </main>
    </div>
  )
}
