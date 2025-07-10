import { ArrowRight, CreditCard, Smartphone, Building2 } from "lucide-react";

export const PaymentFlowSection = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Customer Setup",
      description: "Customer creates e-Mandate using Aadhaar, Debit Card or Net Banking",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Auto Debit",
      description: "Automated recurring payments with up to 5 retry attempts",
      color: "text-accent"
    },
    {
      icon: Building2,
      title: "Your Account",
      description: "Funds automatically credited to your merchant bank account",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Recurring Payments Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, automated flow from customer setup to your bank account
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Flow visualization */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 relative">
                {/* Step card */}
                <div className="bg-gradient-card rounded-xl p-6 shadow-soft border text-center relative z-10">
                  <div className={`w-16 h-16 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-4`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}

                {/* Mobile arrow (below card) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <ArrowRight className="w-8 h-8 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 to-accent-light/5 rounded-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};