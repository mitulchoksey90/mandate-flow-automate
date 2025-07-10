import { 
  CheckCircle, 
  RefreshCw, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Shield,
  Clock,
  Target,
  Zap
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "100% Paperless Setup",
      description: "e-Mandate setup via Aadhaar, Debit Card or Net Banking with zero paperwork",
      color: "text-accent"
    },
    {
      icon: RefreshCw,
      title: "Auto-Retry System",
      description: "Up to 5 automatic retry attempts if the first debit fails",
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "No Bounced Cheques",
      description: "Eliminate cheque hassles and processing delays completely",
      color: "text-accent"
    },
    {
      icon: MessageSquare,
      title: "Smart Reminders",
      description: "Automated SMS, Email, and WhatsApp reminders to maintain balance",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboard",
      description: "Track collections, upcoming debits, failed payments with custom reports",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Account Reconciliation",
      description: "Automated reconciliation saves hours of manual work",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Never Miss Due Dates",
      description: "Collect recurring payments without remembering due dates",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Perfect for Jewellers",
      description: "Ideal for installment plans, EMIs, and subscription businesses",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Zero Manual Effort",
      description: "Fully automated end-to-end payment collection process",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Effortless Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate recurring payments and eliminate manual collection hassles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-lg bg-primary-light/20 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};