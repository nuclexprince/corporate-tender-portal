import React, { useState } from 'react';
import { Star, ThumbsUp, MapPin, CheckCircle } from 'lucide-react';

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  verified: boolean;
  service: string;
  helpful: number;
}

interface ReviewCardProps {
  review: Review;
  onHelpful?: (id: string) => void;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review, onHelpful }) => {
  const [markedHelpful, setMarkedHelpful] = useState(false);

  const handleHelpful = () => {
    if (!markedHelpful) {
      setMarkedHelpful(true);
      onHelpful?.(review.id);
    }
  };

  return (
    <div className="bg-card rounded-lg border-2 border-border p-6 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-semibold text-foreground">{review.name}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{review.location}</span>
            {review.verified && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1 text-green-600">
                  <CheckCircle className="w-3 h-3" />
                  <span className="text-xs">Verified</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < review.rating ? 'fill-secondary text-secondary' : 'text-muted'}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-3">
        <h4 className="font-semibold text-foreground mb-2">{review.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <span className="font-medium text-primary">{review.service}</span> • {review.date}
        </div>
        <button
          onClick={handleHelpful}
          className={`flex items-center gap-1 text-xs transition-colors ${
            markedHelpful ? 'text-primary' : 'text-muted-foreground hover:text-primary'
          }`}
          disabled={markedHelpful}
        >
          <ThumbsUp className={`w-3 h-3 ${markedHelpful ? 'fill-primary' : ''}`} />
          <span>Helpful {markedHelpful ? `(${review.helpful + 1})` : `(${review.helpful})`}</span>
        </button>
      </div>
    </div>
  );
};
