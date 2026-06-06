import React, { useState } from 'react';
import { Play, Download, CheckCircle, Clock, Award, MessageCircle, Book, Users } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  certificate: string;
}

const modules: Module[] = [
  {
    id: '1',
    title: 'Product Upload Training',
    duration: '2 hours (self-paced)',
    description: 'Master the art of creating professional product catalogs on GeM portal with comprehensive training on product categorization, specifications, and inventory management.',
    topics: [
      'How to create product catalog on GeM',
      'Product categorization and specification upload',
      'Image optimization and upload guidelines',
      'Price management and updates',
      'Inventory tracking and management'
    ],
    certificate: 'Product Upload Specialist'
  },
  {
    id: '2',
    title: 'Bidding Training',
    duration: '3 hours (self-paced)',
    description: 'Learn the complete tender bidding process from understanding tender documents to post-bid management with hands-on practice and real examples.',
    topics: [
      'Understanding tender documents',
      'BOQ (Bill of Quantity) bid preparation',
      'Technical and financial bid submission',
      'L1 comparison and bid tracking',
      'Post-bid management and follow-up'
    ],
    certificate: 'Tender Bidding Professional'
  }
];

const TrainingModulesPage: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Training Modules</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Master GeM Portal operations with our comprehensive training programs designed for success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">5 Hours Total</h3>
              <p className="text-sm text-white/80">Self-paced learning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Award className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Certification</h3>
              <p className="text-sm text-white/80">Upon completion</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-sm text-white/80">24/7 assistance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Training Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module) => (
            <div key={module.id} className="bg-card rounded-lg border-2 border-border p-6 hover:border-primary/30 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">{module.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary" />
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{module.description}</p>

              {/* Curriculum */}
              <div className="mb-4">
                <button
                  onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                  className="flex items-center gap-2 text-primary font-semibold mb-3 hover:text-primary/80 transition-colors"
                >
                  <Book className="w-4 h-4" />
                  Curriculum
                </button>
                {expandedModule === module.id && (
                  <ul className="space-y-2 ml-6">
                    {module.topics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Certificate */}
              <div className="flex items-center gap-2 mb-4 p-3 bg-secondary/10 rounded-md">
                <Award className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-foreground">
                  Certificate: <span className="text-secondary">{module.certificate}</span>
                </span>
              </div>

              {/* Video Preview */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-sm text-muted-foreground">Watch Introduction</p>
                </div>
              </div>

              {/* Downloadable Resources */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Download className="w-4 h-4" />
                <span>Includes: PDF guides, Excel templates, practice exercises</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Training Section */}
        <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 border-2 border-[#25D366]/30 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Get Training on WhatsApp</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Complete your training journey via WhatsApp with daily video lessons, PDF worksheets, interactive quizzes, and 1-on-1 instructor support.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Learn at your own pace</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">24/7 access to materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">1-on-1 instructor support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Live doubt clearing sessions</span>
                </li>
              </ul>
              <a
                href="https://wa.me/919876543210?text=I%20want%20to%20enroll%20for%20WhatsApp%20training"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#25D366]/90 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Start WhatsApp Training
              </a>
            </div>
            <div className="aspect-square bg-white/50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <p className="text-sm text-muted-foreground">WhatsApp Training Interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Training Package */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 border-2 border-primary/20">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">
              Professional Training Program
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Complete Training Package</h2>
            <div className="text-5xl font-bold text-primary mb-2">₹10,000 <span className="text-2xl text-muted-foreground">+ GST</span></div>
            <p className="text-lg text-muted-foreground">Total: ₹11,800 (including 18% GST)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">What's Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Both Module 1 & 2 (Product Upload + Bidding)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">WhatsApp training support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Live weekly Q&A sessions (Zoom/Google Meet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Professional certification on completion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">6 months access to all materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">30-day money-back guarantee</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Payment Options:</h3>
              <div className="space-y-3 mb-6">
                <div className="bg-card rounded-lg p-4 border-2 border-primary">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">One-time Payment</span>
                    <span className="text-lg font-bold text-primary">₹11,800</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Pay once, lifetime access</p>
                </div>
                <div className="bg-card rounded-lg p-4 border-2 border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">EMI Option</span>
                    <span className="text-lg font-bold text-secondary">₹3,933 × 3</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Easy monthly installments</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-md">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">30-Day Money-Back Guarantee</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-bold text-lg">
              Enroll Now for ₹10,000 + GST
            </button>
            <p className="text-xs text-muted-foreground mt-3">Limited seats available • Secure payment gateway</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingModulesPage;
