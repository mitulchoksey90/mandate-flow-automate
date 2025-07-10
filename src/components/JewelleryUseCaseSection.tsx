import { Gem, Calendar, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const JewelleryUseCaseSection = () => {
  const benefits = [
    {
      icon: Gem,
      title: "Perfect for Gold Schemes",
      description: "Automate monthly gold savings and installment collections"
    },
    {
      icon: Calendar,
      title: "Scheduled Collections",
      description: "Set up recurring payments for jewelry installment plans"
    },
    {
      icon: CreditCard,
      title: "No Payment Delays",
      description: "Ensure timely EMI collections without manual follow-ups"
    },
    {
      icon: Smartphone,
      title: "Digital Experience",
      description: "Offer customers a modern, paperless payment experience"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-light/20 text-accent font-medium rounded-full mb-4">
              <Gem className="w-4 h-4" />
              Perfect for Jewellery Business
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Automate Jewellery Installment Collections
            </h2>
            <p className="text-xl text-muted-foreground">
              Perfect for jewellery installment schemes — automate monthly gold payments with zero paperwork
            </p>
          </div>

          {/* Main content */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border">
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Transform Your Gold Scheme Collections
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether it's monthly gold savings schemes, jewelry installment plans, or EMI collections, 
                  our automated e-Mandate system ensures you never miss a payment again.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium">Automated monthly gold scheme collections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium">Seamless jewelry installment management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium">Zero paperwork for your customers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium">Automated reminders and retries</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-background p-4 rounded-xl shadow-soft border text-center">
                    <div className="w-10 h-10 rounded-lg bg-accent-light/20 flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="accent" size="lg">
                Learn More About Jewellery Solutions
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Jewellery Stores", value: "25+" },
              { label: "Monthly Collections", value: "₹50L+" },
              { label: "Success Rate", value: "99.5%" },
              { label: "Customer Satisfaction", value: "4.9/5" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};