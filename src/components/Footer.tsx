import { Phone, Mail, MessageCircle, LogIn, Shield, FileText } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Recurring Payments Platform
            </h3>
            <p className="text-background/80 mb-6 max-w-md">
              Automate your recurring payment collections with our NPCI-compliant e-Mandate platform. 
              Zero paperwork, maximum efficiency.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">support@recurringpay.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-accent" />
                <span className="text-sm">WhatsApp: +91 9876543210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-background/80 hover:text-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-sm text-background/80 hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-background/80 hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#jewellery" className="text-sm text-background/80 hover:text-accent transition-colors">
                  Jewellery Solutions
                </a>
              </li>
              <li>
                <button className="text-sm text-background/80 hover:text-accent transition-colors flex items-center gap-2">
                  <LogIn className="w-3 h-3" />
                  Merchant Login
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-semibold mb-4">Compliance</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-background/80 hover:text-accent transition-colors flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  RBI Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-background/80 hover:text-accent transition-colors flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  NPCI Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-background/80 hover:text-accent transition-colors flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-background/80 hover:text-accent transition-colors flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-background/80 hover:text-accent transition-colors flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Recurring Payments Platform. All rights reserved.
            </p>
            
            {/* Trust badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-background/10 rounded-full">
                <Shield className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium">RBI Approved</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-background/10 rounded-full">
                <Shield className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium">NPCI Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-background/10 rounded-full">
                <Shield className="w-3 h-3 text-accent" />
                <span className="text-xs font-medium">ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};