import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface TenderImage {
  id: string;
  title: string;
  category: string;
  dueDate: string;
  referenceNumber: string;
  imageUrl: string;
}

const tenderImages: TenderImage[] = [
  {
    id: '1',
    title: 'Railway Infrastructure Development',
    category: 'Infrastructure',
    dueDate: 'March 30, 2026',
    referenceNumber: 'RFP/2026/001',
    imageUrl: ''
  },
  {
    id: '2',
    title: 'Medical Equipment Supply',
    category: 'Healthcare',
    dueDate: 'April 5, 2026',
    referenceNumber: 'RFP/2026/002',
    imageUrl: ''
  },
  {
    id: '3',
    title: 'IT Infrastructure Upgrade',
    category: 'Technology',
    dueDate: 'April 10, 2026',
    referenceNumber: 'RFP/2026/003',
    imageUrl: ''
  },
  {
    id: '4',
    title: 'School Building Construction',
    category: 'Construction',
    dueDate: 'April 15, 2026',
    referenceNumber: 'RFP/2026/004',
    imageUrl: ''
  },
  {
    id: '5',
    title: 'Water Supply Project',
    category: 'Infrastructure',
    dueDate: 'April 20, 2026',
    referenceNumber: 'RFP/2026/005',
    imageUrl: ''
  },
  {
    id: '6',
    title: 'Road Development Project',
    category: 'Infrastructure',
    dueDate: 'April 25, 2026',
    referenceNumber: 'RFP/2026/006',
    imageUrl: ''
  }
];

export const TenderGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<TenderImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % tenderImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + tenderImages.length) % tenderImages.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenderImages.map((tender) => (
          <div
            key={tender.id}
            className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(tender)}
          >
            {/* Placeholder Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">📄</span>
                  </div>
                  <p className="text-sm text-muted-foreground px-4">Tender Document Preview</p>
                </div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                {tender.category}
              </div>
              
              {/* Due Date */}
              <div className="absolute top-3 right-3 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                Due: {tender.dueDate}
              </div>
              
              {/* Reference Number Watermark */}
              <div className="absolute bottom-3 left-3 text-xs text-white/70 font-mono">
                {tender.referenceNumber}
              </div>
            </div>
            
            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {tender.title}
              </h3>
              <button className="text-secondary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                View Details
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg relative mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-primary/30 rounded-lg mx-auto flex items-center justify-center">
                    <span className="text-5xl">📄</span>
                  </div>
                  <div className="text-white space-y-2">
                    <p className="text-lg font-semibold">Tender Document Preview</p>
                    <p className="text-sm text-white/70">{selectedImage.referenceNumber}</p>
                  </div>
                </div>
              </div>

              {/* Category and Due Date */}
              <div className="absolute top-4 left-4 right-4 flex justify-between">
                <div className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                  {selectedImage.category}
                </div>
                <div className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full">
                  Due: {selectedImage.dueDate}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-card rounded-lg p-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">Reference: {selectedImage.referenceNumber}</p>
              <div className="flex gap-3">
                <button 
                  className="px-6 py-2 rounded-md transition-colors text-white font-semibold"
                  style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #E67A3B 100%)', boxShadow: '0 4px 12px rgba(255,140,66,0.3)' }}
                >
                  View Full Details
                </button>
                <button className="px-6 py-2 border-2 border-primary text-primary rounded-md hover:bg-primary/10 transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};