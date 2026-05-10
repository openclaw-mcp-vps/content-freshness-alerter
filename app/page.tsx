export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Content Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Alert When Your Content Becomes Outdated
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Submit your blog posts, docs, and marketing pages. Our AI monitors them continuously and fires instant alerts the moment information goes stale.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['GPT-4 Analysis', 'Webhook Alerts', 'Cron Scheduling', 'Dashboard Analytics', 'Multi-URL Crawling'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Submit URLs', desc: 'Paste any blog post, doc, or landing page URL into your dashboard.' },
            { step: '02', title: 'AI Scans Content', desc: 'GPT-4 reads your content and flags outdated stats, deprecated tools, or stale dates.' },
            { step: '03', title: 'Get Alerted', desc: 'Receive webhook or email alerts the moment freshness drops below your threshold.' }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] font-mono text-sm font-bold mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Up to 50 monitored URLs',
              'Daily AI freshness scans',
              'Webhook + email alerts',
              'Dashboard analytics',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI detect outdated content?',
              a: 'We use GPT-4 to analyze your content for time-sensitive claims, deprecated tools, old statistics, and stale dates. It compares against current knowledge and flags anything that may need updating.'
            },
            {
              q: 'What types of alerts can I receive?',
              a: 'You can configure webhook notifications (Slack, Discord, custom endpoints) and email alerts. Each alert includes the URL, a freshness score, and a summary of what needs updating.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Content Freshness Alerter. All rights reserved.
      </footer>
    </main>
  )
}
