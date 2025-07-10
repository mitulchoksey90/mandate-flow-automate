import { UserPlus, Settings, Repeat } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Setup e-Mandate",
      description: "Customer completes one-time e-Mandate setup using Aadhaar, Debit Card, or Net Banking in under 5 minutes",
      details: ["Fully digital process", "NPCI compliant", "Instant activation"]
    },
    {
      step: "02",
      icon: Settings,
      title: "Configure Schedule",
      description: "Set payment amount, frequency, and start date. Our system handles all the technical complexities",
      details: ["Flexible scheduling", "Amount customization", "Automated setup"]
    },
    {
      step: "03",
      icon: Repeat,
      title: "Automatic Collections",
      description: "Sit back and relax while payments are collected automatically with smart retries and notifications",
      details: ["Auto-debit processing", "Smart retry logic", "Real-time updates"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process to start collecting recurring payments automatically
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-primary">{step.step}</span>
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {step.details.map((detail, detailIndex) => (
                    <span 
                      key={detailIndex}
                      className="px-3 py-1 bg-primary-light/20 text-primary text-sm font-medium rounded-full"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 rounded-2xl bg-gradient-card border shadow-soft flex items-center justify-center">
                  <div className="w-32 h-32 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <step.icon className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};