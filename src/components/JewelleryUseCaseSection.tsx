import { 
  Gem, 
  GraduationCap, 
  Dumbbell, 
  BookOpen, 
  Home, 
  Shield,
  Calendar,
  CreditCard,
  MousePointer
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const JewelleryUseCaseSection = () => {
  const useCases = [
    {
      icon: Gem,
      title: "Jewellery Stores",
      description: "Automate gold scheme collections and jewelry installment payments",
      features: ["Monthly gold savings", "EMI collections", "Zero paperwork"]
    },
    {
      icon: GraduationCap,
      title: "Educational Institutes",
      description: "Collect school fees, coaching fees, and course installments seamlessly",
      features: ["Monthly school fees", "Coaching classes", "Course payments"]
    },
    {
      icon: Dumbbell,
      title: "Gyms & Fitness",
      description: "Automate membership renewals and personal training payments",
      features: ["Monthly memberships", "PT sessions", "Class packages"]
    },
    {
      icon: BookOpen,
      title: "Libraries & Subscriptions",
      description: "Collect library memberships, toy library fees, and subscription services",
      features: ["Library memberships", "Toy library fees", "Digital subscriptions"]
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Streamline property EMIs, maintenance fees, and rental collections",
      features: ["Property EMIs", "Maintenance fees", "Rental payments"]
    },
    {
      icon: Shield,
      title: "Insurance & Utilities",
      description: "Automate premium collections and utility bill payments",
      features: ["Insurance premiums", "Utility bills", "Service charges"]
    }
  ];

  const benefits = [
    {
      icon: Calendar,
      title: "Scheduled Collections",
      description: "Set up recurring payments for any business model"
    },
    {
      icon: CreditCard,
      title: "No Payment Delays",
      description: "Ensure timely collections without manual follow-ups"
    },
    {
      icon: MousePointer,
      title: "One-Click Cancellation",
      description: "Customers can easily cancel mandates with a single click"
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
              Perfect for Every Business
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Automate Collections Across Industries
            </h2>
            <p className="text-xl text-muted-foreground">
              From jewellery stores to educational institutes — automate recurring payments with zero paperwork
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-card rounded-xl p-6 shadow-soft border hover:shadow-medium transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-accent-light/20 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft border">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Key Benefits for All Industries
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-lg bg-accent-light/20 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <Button variant="accent" size="lg">
                Book a Free Demo for Your Industry
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Businesses Served", value: "100+" },
              { label: "Monthly Collections", value: "₹2Cr+" },
              { label: "Success Rate", value: "99.5%" },
              { label: "Industries Covered", value: "10+" }
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