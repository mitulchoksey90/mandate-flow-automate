import dashboardImage from "@/assets/dashboard-mockup.jpg";
import { BarChart3, Calendar, AlertCircle, TrendingUp } from "lucide-react";

export const DashboardSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Total Collections",
      description: "Track all successful payments and revenue"
    },
    {
      icon: Calendar,
      title: "Upcoming Debits",
      description: "See scheduled payments and amounts"
    },
    {
      icon: AlertCircle,
      title: "Failed Payments",
      description: "Monitor and retry failed transactions"
    },
    {
      icon: TrendingUp,
      title: "Custom Reports",
      description: "Generate reports for any date range"
    }
  ];

  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real-time Dashboard & Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get complete visibility into your recurring payment collections with detailed insights and reports
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={dashboardImage} 
                alt="Payment management dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-medium border">
              <div className="text-sm text-muted-foreground">This Month</div>
              <div className="text-2xl font-bold text-accent">₹2.4L</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-medium border">
              <div className="text-sm text-muted-foreground">Success Rate</div>
              <div className="text-2xl font-bold text-primary">99.2%</div>
            </div>
          </div>

          {/* Features list */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Everything You Need to Track Collections
              </h3>
              <p className="text-muted-foreground">
                Our comprehensive dashboard gives you complete control over your recurring payment operations.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-xl shadow-soft border">
                  <div className="w-12 h-12 rounded-lg bg-primary-light/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <div className="p-4 bg-accent-light/20 rounded-xl border border-accent/20">
                <p className="text-sm font-medium text-accent-foreground">
                  💡 Pro Tip: Export detailed reports for any date range, month, or financial year for easy accounting and reconciliation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};