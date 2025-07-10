import { Ban, FileX, UserX, TrendingUp } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Ban,
      title: "No Manual Collections",
      description: "Eliminate time-consuming follow-ups and manual reminders"
    },
    {
      icon: FileX,
      title: "No Bounced Cheques",
      description: "Say goodbye to cheque processing delays and bank charges"
    },
    {
      icon: UserX,
      title: "No Follow-up Stress",
      description: "Automated system handles all customer communications"
    },
    {
      icon: TrendingUp,
      title: "Improved Cash Flow",
      description: "Predictable, on-time payments improve your business finances"
    }
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};