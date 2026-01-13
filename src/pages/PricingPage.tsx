import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedSection, staggerContainer, staggerItem } from '@/components/AnimatedComponents';
import { Check, X, Zap, Crown, Building2, Rocket, ArrowRight, Sparkles, Star } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small projects',
    price: '$999',
    period: 'one-time',
    icon: Zap,
    popular: false,
    features: [
      { name: 'Up to 5 pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Basic SEO setup', included: true },
      { name: 'Contact form', included: true },
      { name: '30-day support', included: true },
      { name: 'SSL certificate', included: true },
      { name: 'Custom animations', included: false },
      { name: 'CMS integration', included: false },
      { name: 'E-commerce features', included: false },
      { name: 'Priority support', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and startups',
    price: '$2,999',
    period: 'one-time',
    icon: Crown,
    popular: true,
    features: [
      { name: 'Up to 15 pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Advanced SEO', included: true },
      { name: 'Contact forms & integrations', included: true },
      { name: '90-day support', included: true },
      { name: 'SSL certificate', included: true },
      { name: 'Custom animations', included: true },
      { name: 'CMS integration', included: true },
      { name: 'E-commerce features', included: false },
      { name: 'Priority support', included: true },
    ],
    cta: 'Start Building',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations and complex projects',
    price: '$7,999',
    period: 'starting at',
    icon: Building2,
    popular: false,
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Responsive design', included: true },
      { name: 'Enterprise SEO suite', included: true },
      { name: 'Advanced integrations', included: true },
      { name: '1-year support', included: true },
      { name: 'SSL & security audit', included: true },
      { name: 'Premium animations', included: true },
      { name: 'Headless CMS', included: true },
      { name: 'Full e-commerce', included: true },
      { name: '24/7 priority support', included: true },
    ],
    cta: 'Contact Sales',
  },
  {
    name: 'Premium',
    description: 'Advanced solutions with priority everything',
    price: '$12,999',
    period: 'starting at',
    icon: Star,
    popular: false,
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'Premium custom design', included: true },
      { name: 'Full SEO management', included: true },
      { name: 'Premium integrations', included: true },
      { name: '2-year support', included: true },
      { name: 'Advanced security audit', included: true },
      { name: 'Advanced animations', included: true },
      { name: 'Enterprise CMS', included: true },
      { name: 'Advanced e-commerce', included: true },
      { name: 'Dedicated account manager', included: true },
    ],
    cta: 'Get Premium',
  },
  {
    name: 'Ultimate',
    description: 'Global-scale solutions with dedicated team',
    price: '$15,999',
    period: 'starting at',
    icon: Sparkles,
    popular: false,
    features: [
      { name: 'Unlimited pages', included: true },
      { name: 'White-glove design', included: true },
      { name: 'Global SEO domination', included: true },
      { name: 'Enterprise API suite', included: true },
      { name: 'Lifetime support', included: true },
      { name: 'SOC2 compliance audit', included: true },
      { name: 'Cinematic animations', included: true },
      { name: 'Multi-region CMS', included: true },
      { name: 'Multi-currency e-commerce', included: true },
      { name: 'Dedicated success manager', included: true },
    ],
    cta: 'Schedule Call',
  },
];

const monthlyPlans = [
  {
    name: 'Starter',
    price: '$49',
    features: ['Basic maintenance', 'Monthly backups', 'Security updates', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$149',
    features: ['All Starter features', 'Weekly backups', 'Performance optimization', 'Priority support', 'Monthly analytics'],
  },
  {
    name: 'Enterprise',
    price: '$399',
    features: ['All Growth features', 'Daily backups', 'Real-time monitoring', '24/7 support', 'Dedicated manager', 'Custom integrations'],
  },
];

const comparisonFeatures = [
  { feature: 'Number of Pages', starter: 'Up to 5', professional: 'Up to 15', enterprise: 'Unlimited', premium: 'Unlimited', ultimate: 'Unlimited' },
  { feature: 'Custom Design', starter: 'Template-based', professional: 'Fully Custom', enterprise: 'Bespoke Design', premium: 'Premium Custom', ultimate: 'White-glove' },
  { feature: 'SEO Optimization', starter: 'Basic', professional: 'Advanced', enterprise: 'Enterprise Suite', premium: 'Full Management', ultimate: 'Global Domination' },
  { feature: 'Support Duration', starter: '30 days', professional: '90 days', enterprise: '1 year', premium: '2 years', ultimate: 'Lifetime' },
  { feature: 'CMS Integration', starter: '—', professional: 'WordPress/Strapi', enterprise: 'Headless CMS', premium: 'Enterprise CMS', ultimate: 'Multi-region CMS' },
  { feature: 'E-commerce', starter: '—', professional: '—', enterprise: 'Full Featured', premium: 'Advanced', ultimate: 'Multi-currency' },
  { feature: 'Performance Score', starter: '80+', professional: '90+', enterprise: '95+', premium: '97+', ultimate: '99+' },
  { feature: 'Custom Animations', starter: '—', professional: '✓', enterprise: 'Premium', premium: 'Advanced', ultimate: 'Cinematic' },
  { feature: 'API Integrations', starter: 'Basic', professional: 'Standard', enterprise: 'Advanced', premium: 'Premium', ultimate: 'Enterprise Suite' },
  { feature: 'Analytics Setup', starter: 'Basic', professional: 'Advanced', enterprise: 'Custom Dashboard', premium: 'Premium Dashboard', ultimate: 'AI-Powered' },
];

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Syed Web Design & Developers</title>
        <meta name="description" content="Transparent pricing for world-class web design and development services. Choose from Starter, Professional, or Enterprise packages." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 wave-bg opacity-30" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-20 w-72 h-72 bg-cyan/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-20 w-72 h-72 bg-magenta/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-sm text-muted-foreground">Transparent Pricing</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-6xl font-display font-bold mb-6"
            >
              Choose Your <span className="gradient-text">Perfect Plan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Investment packages designed for every scale—from personal projects to enterprise solutions. No hidden fees, just exceptional value.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-primary/20 to-background border-2 border-primary shadow-2xl shadow-primary/20' 
                    : 'glass border border-border/50'
                }`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan to-magenta rounded-full"
                  >
                    <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                  </motion.div>
                )}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-cyan to-magenta' 
                      : 'bg-secondary'
                  }`}
                >
                  <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                </motion.div>

                <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-4xl font-display font-bold gradient-text">{plan.price}</span>
                  </motion.div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 + 0.4 }}
                      className="flex items-center gap-3"
                    >
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                          <X className="w-3 h-3 text-muted-foreground" />
                        </div>
                      )}
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant={plan.popular ? 'hero' : 'heroOutline'} 
                    className="w-full group"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Monthly Maintenance Plans */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <AnimatedSection className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 mb-6"
            >
              <Rocket className="w-4 h-4 text-magenta" />
              <span className="text-sm text-muted-foreground">Ongoing Support</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Monthly <span className="gradient-text">Maintenance Plans</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Keep your website secure, fast, and up-to-date with our comprehensive maintenance packages.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {monthlyPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-xl p-8 border border-border/50 group hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-display font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-cyan" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
                  <Button variant="glass" className="w-full">
                    Subscribe
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Feature <span className="gradient-text">Comparison</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A detailed breakdown of what's included in each package.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[1000px] glass rounded-xl overflow-hidden">
              <thead>
                <motion.tr
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="border-b border-border/50"
                >
                  <th className="text-left p-6 font-display font-bold">Features</th>
                  <th className="p-6 font-display font-bold text-center">Starter</th>
                  <th className="p-6 font-display font-bold text-center bg-primary/10">Professional</th>
                  <th className="p-6 font-display font-bold text-center">Enterprise</th>
                  <th className="p-6 font-display font-bold text-center">Premium</th>
                  <th className="p-6 font-display font-bold text-center">Ultimate</th>
                </motion.tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="border-b border-border/30 hover:bg-secondary/20 transition-colors"
                  >
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.starter}</td>
                    <td className="p-6 text-center bg-primary/5 text-foreground">{row.professional}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.enterprise}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.premium}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.ultimate}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* FAQ / CTA Section */}
      <section className="py-20 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-transparent to-magenta/10"
        />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass rounded-2xl p-12 border border-border/50 max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan to-magenta animate-pulse" />
              <div className="absolute inset-1 rounded-lg bg-background flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need a <span className="gradient-text">Custom Quote?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Every project is unique. Contact us for a tailored proposal that perfectly fits your requirements and budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" className="group">
                  Get Custom Quote
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="heroOutline" size="xl">
                  Schedule a Call
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No commitment required
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Response within 24h
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Free consultation
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;
