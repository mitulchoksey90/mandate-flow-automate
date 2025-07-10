import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import heroImage from "@/assets/hero-payment-flow.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-accent-light/20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full opacity-10 -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full opacity-10 translate-y-48 -translate-x-48" />
      
      <div className="relative container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-soft border">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                NPCI Compliant & RBI Approved
              </span>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Collect Recurring Payments{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Automatically
                </span>
              </h1>
              <div className="text-lg text-muted-foreground">
                No Cheques, No Paperwork, No Hassle.
              </div>
            </div>

            {/* Sub-headline */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Set up e-Mandates online via Aadhaar, Debit Card or Net Banking — 
              fully automated reminders, retries & real-time dashboard.
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                "100% Paperless Setup",
                "Automated Retries",
                "Real-time Dashboard",
                "Zero Manual Effort"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="gradient" size="xl" className="min-w-48">
                Book a Free Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="min-w-48">
                <Play className="w-5 h-5" />
                Watch Demo Video
              </Button>
            </div>

            {/* Social proof */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Trusted by 50+ merchants and growing
              </p>
              <div className="flex items-center gap-6 justify-center lg:justify-start opacity-60">
                <div className="text-sm font-semibold">RBI</div>
                <div className="text-sm font-semibold">NPCI</div>
                <div className="text-sm font-semibold">NACH</div>
                <div className="text-sm font-semibold">e-Mandate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong animate-float">
              <img 
                src={heroImage} 
                alt="Automated recurring payment flow"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-medium border animate-pulse-soft">
              <div className="text-sm text-muted-foreground">Success Rate</div>
              <div className="text-2xl font-bold text-accent">99.8%</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-medium border animate-pulse-soft">
              <div className="text-sm text-muted-foreground">Avg. Setup Time</div>
              <div className="text-2xl font-bold text-primary">5 mins</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};