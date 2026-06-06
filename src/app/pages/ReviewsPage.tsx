import React, { useState } from 'react';
import { Star, Filter, Search, TrendingUp } from 'lucide-react';
import { ReviewCard, Review } from '../components/ReviewCard';
import { ReviewForm } from '../components/ReviewForm';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    title: 'Excellent GeM registration support',
    text: 'The team at Phoenix Tender Tech provided outstanding support for our GeM registration. They handled all documentation efficiently and kept us informed throughout the process. Highly professional and knowledgeable. Would definitely recommend their services.',
    date: 'March 15, 2026',
    verified: true,
    service: 'GeM Registration',
    helpful: 12
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    title: 'Professional training exceeded expectations',
    text: 'I enrolled in the professional training program and it was worth every penny. The instructors are experts in their field, and the WhatsApp support made learning convenient. The bidding training module especially helped me win my first tender. Great investment for anyone serious about government tenders.',
    date: 'March 10, 2026',
    verified: true,
    service: 'Professional Training',
    helpful: 18
  },
  {
    id: '3',
    name: 'Amit Patel',
    location: 'Surat, Gujarat',
    rating: 5,
    title: 'Best tender consultancy in Gujarat',
    text: 'We have been working with Phoenix Tender Tech for over 6 months now. Their expertise in tender bidding has helped us secure multiple government contracts. The team is responsive, professional, and truly understands the complexities of government procurement.',
    date: 'March 5, 2026',
    verified: true,
    service: 'Tender Bidding',
    helpful: 15
  },
  {
    id: '4',
    name: 'Sneha Desai',
    location: 'Vadodara, Gujarat',
    rating: 4,
    title: 'Good service, quick response',
    text: 'The vendor registration process was smooth and completed within the promised timeframe. The team was helpful in clarifying all our doubts. Only minor improvement needed in follow-up communication, but overall very satisfied with the service.',
    date: 'February 28, 2026',
    verified: true,
    service: 'Vendor Registration',
    helpful: 8
  },
  {
    id: '5',
    name: 'Vijay Singh',
    location: 'Delhi, NCR',
    rating: 5,
    title: 'Outstanding compliance support',
    text: 'Phoenix Tender Tech helped us maintain all our compliance requirements for government contracts. Their ISO certifications give us confidence in their quality standards. The digital signature feature is particularly useful for quick tender submissions.',
    date: 'February 20, 2026',
    verified: true,
    service: 'Compliance Services',
    helpful: 10
  },
  {
    id: '6',
    name: 'Meera Shah',
    location: 'Rajkot, Gujarat',
    rating: 5,
    title: 'WhatsApp training is amazing',
    text: 'The WhatsApp training delivery is a game-changer! I could learn during my commute and the instructors were always available to answer questions. The product upload training helped me set up my catalog correctly on the first try. Highly recommend this modern approach to learning.',
    date: 'February 15, 2026',
    verified: true,
    service: 'Professional Training',
    helpful: 22
  }
];

const ReviewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const ratingBreakdown = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => r.rating === star).length,
    percentage: (reviews.filter(r => r.rating === star).length / reviews.length) * 100
  }));

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesService = selectedService === 'all' || review.service === selectedService;
    return matchesSearch && matchesService;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === 'highest') return b.rating - a.rating;
    if (sortBy === 'lowest') return a.rating - b.rating;
    if (sortBy === 'helpful') return b.helpful - a.helpful;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            See what our clients say about their experience with Phoenix Tender Tech
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-lg border-2 border-border p-6 text-center">
            <div className="text-5xl font-bold text-primary mb-2">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'fill-secondary text-secondary' : 'text-muted'}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>

          <div className="bg-card rounded-lg border-2 border-border p-6 text-center">
            <div className="text-5xl font-bold text-primary mb-2">{reviews.length}+</div>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              <span>Total Reviews</span>
            </div>
          </div>

          <div className="bg-card rounded-lg border-2 border-border p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Rating Breakdown</h3>
            {ratingBreakdown.map(({ star, count, percentage }) => (
              <div key={star} className="flex items-center gap-2 mb-2">
                <span className="text-xs text-muted-foreground w-6">{star}★</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${percentage}%` }} />
                </div>
                <span className="text-xs text-muted-foreground w-8 text-right">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none"
            >
              <option value="all">All Services</option>
              <option value="GeM Registration">GeM Registration</option>
              <option value="Tender Bidding">Tender Bidding</option>
              <option value="Professional Training">Professional Training</option>
              <option value="Vendor Registration">Vendor Registration</option>
              <option value="Compliance Services">Compliance Services</option>
            </select>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border-2 border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
          >
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {sortedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Write Review Section */}
        <div className="max-w-3xl mx-auto">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
