import { Star, Users, TrendingUp, Shield } from "lucide-react";

export const SocialProofSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Merchants Trust Us",
      description: "Growing community of satisfied businesses"
    },
    {
      icon: TrendingUp,
      value: "₹10Cr+",
      label: "Payments Processed",
      description: "Reliable processing track record"
    },
    {
      icon: Star,
      value: "99.8%",
      label: "Success Rate",
      description: "Industry-leading payment success"
    },
    {
      icon: Shield,
      value: "100%",
      label: "NPCI Compliant",
      description: "Fully secure and compliant platform"
    }
  ];

  const testimonials = [
    {
      quote: "Our jewelry installment collections became completely automated. No more chasing customers for payments!",
      author: "Rajesh Kumar",
      company: "Kumar Jewellers",
      location: "Mumbai"
    },
    {
      quote: "The e-Mandate setup is so simple. Our customers love the paperless experience.",
      author: "Priya Sharma",
      company: "Gold Palace",
      location: "Delhi"
    },
    {
      quote: "From 60% manual effort to zero. This platform transformed our payment collections.",
      author: "Amit Patel",
      company: "Patel NBFC",
      location: "Ahmedabad"
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-muted-foreground">
            Join 50+ merchants who have automated their recurring payment collections
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-soft border">
              <div className="w-12 h-12 rounded-lg bg-primary-light/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-soft border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground mb-4 font-medium">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-muted-foreground">
                  {testimonial.company}, {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Certified and compliant with industry standards
          </p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="px-4 py-2 bg-card rounded-lg shadow-soft border">
              <span className="font-semibold text-sm">RBI Approved</span>
            </div>
            <div className="px-4 py-2 bg-card rounded-lg shadow-soft border">
              <span className="font-semibold text-sm">NPCI Certified</span>
            </div>
            <div className="px-4 py-2 bg-card rounded-lg shadow-soft border">
              <span className="font-semibold text-sm">NACH Compliant</span>
            </div>
            <div className="px-4 py-2 bg-card rounded-lg shadow-soft border">
              <span className="font-semibold text-sm">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};