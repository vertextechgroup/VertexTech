import React from 'react';
import { Link } from 'react-router';
import { PublicHeader } from '../components/layout/PublicHeader';
import { PublicFooter } from '../components/layout/PublicFooter';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { CheckCircle2, ArrowRight, Shield, Zap, Crown } from 'lucide-react';
import { useScrollReveal } from '../lib/use-scroll-reveal';

const plans = [
  {
    id: 'essentials',
    name: 'Essentials',
    icon: Shield,
    tagline: 'Core endpoint protection',
    price: '$8',
    period: 'per endpoint/mo',
    billing: 'Billed annually',
    color: 'text-blue-600',
    features: [
      'Next-gen antivirus (NGAV)',
      'Endpoint detection & response',
      'USB device control',
      'Threat intelligence feeds',
      '7-day data retention',
      '24/7 managed detection',
      'Email & chat support',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    popular: false,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: Zap,
    tagline: 'Full platform protection',
    price: '$18',
    period: 'per endpoint/mo',
    billing: 'Billed annually',
    features: [
      'Everything in Essentials',
      'Cloud security posture management',
      'Identity threat detection',
      'Vulnerability management',
      '30-day data retention',
      '24/7 managed detection & response',
      'Priority phone support',
      'Quarterly security reviews',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/contact',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Crown,
    tagline: 'Complete cyber defense',
    price: 'Custom',
    period: 'tailored pricing',
    billing: 'Contact sales for volume discounts',
    features: [
      'Everything in Advanced',
      'Dedicated threat hunting team',
      'Custom detection rules',
      'SIEM & SOAR integration',
      'Unlimited data retention',
      'Dedicated customer success manager',
      'SLA-guaranteed response times',
      'On-site training & workshops',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false,
  },
];

const faqs = [
  {
    q: 'Is there a free trial available?',
    a: 'Yes! We offer a 14-day free trial on our Essentials and Advanced plans with no credit card required. You get full access to all features during the trial.',
  },
  {
    q: 'How does per-endpoint pricing work?',
    a: 'You pay based on the number of endpoints (devices, servers, cloud workloads) protected. Volume discounts kick in automatically at 100 and 1,000+ endpoints.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Absolutely. You can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, ACH bank transfers, and wire transfers. Annual plans can also be invoiced.',
  },
  {
    q: 'Do you offer discounts for non-profits or education?',
    a: 'Yes — we offer up to 40% discounts for verified non-profits and educational institutions. Contact our sales team for details.',
  },
  {
    q: "What's included in the onboarding?",
    a: 'All plans include guided onboarding, documentation, and video tutorials. Advanced and Enterprise plans include a dedicated Customer Success Manager for the first 90 days.',
  },
];

export default function PricingPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <PublicHeader />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden theme-bg-light hero-grid-bg py-24">
        {/* Decorative blobs */}
        <div className="blob blob-primary w-96 h-96 top-[-120px] left-[-100px]" />
        <div className="blob blob-secondary w-72 h-72 bottom-[-80px] right-[-60px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-5 theme-badge text-sm px-4 py-1 font-semibold">Transparent Pricing</Badge>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fade-in-up delay-100">
            Protection That <span className="theme-gradient-text">Scales</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Transparent, per-endpoint pricing that grows with your organization. No hidden fees, no surprises —
            just enterprise-grade security.
          </p>

          {/* Toggle indicator */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 border border-gray-200 shadow-sm animate-fade-in delay-300">
            <span className="text-sm font-semibold text-gray-900">Annual billing</span>
            <Badge className="theme-badge text-xs">Save up to 20%</Badge>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, idx) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  id={`plan-${plan.id}`}
                  className={`reveal reveal-scale bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300 ${
                    plan.popular ? 'pricing-popular' : ''
                  }`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  {plan.popular && <div className="pricing-popular-badge">Most Popular</div>}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center theme-gradient">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.tagline}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                      {plan.price !== 'Custom' && <span className="text-gray-500 text-sm">{plan.period}</span>}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{plan.billing}</p>
                  </div>

                  <Link to={plan.ctaLink}>
                    <Button
                      size="lg"
                      className={`w-full mb-8 font-semibold rounded-xl ${
                        plan.popular ? 'theme-btn text-white' : 'border-2 theme-btn-outline bg-transparent'
                      }`}
                    >
                      {plan.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">What's included</p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 mt-0.5"
                          style={{ color: 'var(--theme-primary)' }}
                        />
                        <span className="text-sm text-gray-700">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-gray-400 mt-10 reveal">
            All prices are per endpoint per month, billed annually. Volume discounts available for 1,000+ endpoints.{' '}
            <Link to="/contact" className="underline theme-text hover:opacity-80">
              Contact us for a custom quote.
            </Link>
          </p>
        </div>
      </section>

      {/* ── Feature Comparison Progress Bar Section ── */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Coverage at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how each plan stacks up across our key security capabilities.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8 reveal">
            {[
              { label: 'Endpoint Detection & Response', essentials: 70, advanced: 90, enterprise: 100 },
              { label: 'Cloud Security Coverage', essentials: 35, advanced: 80, enterprise: 100 },
              { label: 'Identity & Access Protection', essentials: 40, advanced: 85, enterprise: 100 },
              { label: 'Threat Intelligence Depth', essentials: 55, advanced: 80, enterprise: 100 },
              { label: 'Incident Response Speed', essentials: 60, advanced: 85, enterprise: 100 },
              { label: 'Data Retention Period', essentials: 20, advanced: 60, enterprise: 100 },
            ].map((row, i) => (
              <div key={row.label} className="reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-gray-700">{row.label}</span>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-blue-600 font-medium">Ess. {row.essentials}%</span>
                    <span className="font-medium" style={{ color: 'var(--theme-primary)' }}>
                      Adv. {row.advanced}%
                    </span>
                    <span className="text-gray-500 font-medium">Ent. {row.enterprise}%</span>
                  </div>
                </div>
                {/* Stacked progress */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-20 shrink-0">Essentials</span>
                    <div className="flex-1 progress-wrapper thin">
                      <div
                        className="progress-bar"
                        style={{ '--progress-target': `${row.essentials}%`, background: '#dbeafe' } as React.CSSProperties}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-20 shrink-0">Advanced</span>
                    <div className="flex-1 progress-wrapper thin">
                      <div
                        className="progress-bar"
                        style={{ '--progress-target': `${row.advanced}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-20 shrink-0">Enterprise</span>
                    <div className="flex-1 progress-wrapper thin">
                      <div
                        className="progress-bar"
                        style={{ '--progress-target': `${row.enterprise}%`, opacity: 0.6 } as React.CSSProperties}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted Logos Marquee ── */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 text-center mb-8 reveal">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Trusted by 2,000+ Security Teams Worldwide
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="marquee-track gap-16 px-8">
            {[
              'Fortune 500',
              'HealthTech Inc',
              'Global Bank',
              'RetailPro',
              'AeroDefense',
              'MediCare',
              'TechCorp',
              'ClearPath',
              'Fortune 500',
              'HealthTech Inc',
              'Global Bank',
              'RetailPro',
              'AeroDefense',
              'MediCare',
              'TechCorp',
              'ClearPath',
            ].map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 text-gray-400 font-bold text-lg opacity-60 hover:opacity-100 transition-opacity shrink-0 px-4"
              >
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--theme-primary)' }} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our pricing and plans.</p>
          </div>
          <div className="reveal">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white rounded-xl border border-gray-200 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 theme-gradient">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="reveal">
            <h2 className="text-4xl font-bold text-white mb-6">Not Sure Which Plan is Right for You?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Talk to a security expert. We'll assess your needs and recommend the perfect fit — no obligation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-xl px-8 h-12 shadow-lg"
                >
                  Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white/10 font-bold rounded-xl px-8 h-12"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
