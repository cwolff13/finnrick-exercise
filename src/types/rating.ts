export interface RatingData {
  grade: string;
  rating: string;
  vendorName: string;
  productName?: string;
  sampleCount: number;
  lastTestDate: string;
}

export interface FinnrickWidgetProps {
  ratingId?: string;
  grade?: string;
  rating?: string;
  vendorName?: string;
  productName?: string;
  sampleCount?: number;
  lastTestDate?: string;
}

