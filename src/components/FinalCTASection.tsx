import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = () => {
  return (
    <section className="py-16 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full -translate-y-48 -translate-x-48" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/10 rounded-full translate-y-48 translate-x-48" />
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Automate Your Collections?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Join 50+ merchants who have eliminated manual payment collection hassles. 
              Book a free demo and see how easy recurring payments can be.
            </p>
          </div>

          {/* Benefits highlight */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">5 mins</div>
              <div className="text-sm text-primary-foreground/80">
                Average setup time
              </div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">99.8%</div>
              <div className="text-sm text-primary-foreground/80">
                Success rate
              </div>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold mb-1">₹0</div>
              <div className="text-sm text-primary-foreground/80">
                Setup charges
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="secondary" 
              size="xl" 
              className="min-w-56 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Demo Today
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="min-w-56 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Phone className="w-5 h-5" />
              Call +91 9876543210
            </Button>
          </div>

          {/* Additional info */}
          <div className="text-sm text-primary-foreground/80">
            <p className="mb-2">
              💬 WhatsApp support available • 🔒 100% secure & NPCI compliant
            </p>
            <p>
              No credit card required for demo • Setup can be completed in the same day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};