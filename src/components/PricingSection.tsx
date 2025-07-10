import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  const features = [
    "Unlimited e-Mandate setups",
    "Automated retry system",
    "Real-time dashboard",
    "SMS, Email & WhatsApp notifications",
    "Custom reporting",
    "Account reconciliation",
    "24/7 technical support",
    "NPCI compliance included"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              No hidden fees, no setup charges. Pay only for successful transactions.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-medium border relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary rounded-full opacity-10 -translate-y-16 translate-x-16" />
            
            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6">
                Most Popular Choice
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  Pay Per Transaction
                </div>
                <div className="text-xl text-muted-foreground mb-4">
                  No monthly fees • No setup charges
                </div>
                <div className="text-lg text-accent font-semibold">
                  Competitive transaction rates starting from ₹2 per successful debit
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button variant="gradient" size="xl" className="w-full md:w-auto">
                  Talk to Us for Custom Pricing
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-sm text-muted-foreground">
                  Volume discounts available • Enterprise plans for large businesses
                </p>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">
                No Setup Fee
              </div>
              <div className="text-sm text-muted-foreground">
                Get started without any upfront costs
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">
                No Monthly Fee
              </div>
              <div className="text-sm text-muted-foreground">
                Pay only for successful transactions
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">
                Volume Discounts
              </div>
              <div className="text-sm text-muted-foreground">
                Better rates for higher transaction volumes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};