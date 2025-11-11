import type { RatingData } from "../types/rating";

// Current: Mock API with hardcoded data for prototype
// Production requirements (backend):
// - CORS policy to restrict API access to registered domains
// - Rate limiting to prevent abuse
// - Input sanitization for ratingId

export async function fetchRatingData(
  ratingId: string
): Promise<RatingData | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Mock data based on ratingId
  const mockData: Record<string, RatingData> = {
    polaris: {
      grade: "A",
      rating: "GREAT",
      vendorName: "Polaris Peptides",
      productName: "Semaglutide",
      sampleCount: 6,
      lastTestDate: "19 Feb 2025",
    },
    shanghai: {
      grade: "A",
      rating: "GREAT",
      vendorName: "Shanghai Innovy Chemical New Materials",
      productName: "Tesamorelin, CJC-1295, Ipamorelin",
      sampleCount: 6,
      lastTestDate: "19 Feb 2025",
    },
  };

  return mockData[ratingId] || mockData.polaris;
}
