import { useState, useEffect } from "react";
import type { FinnrickWidgetProps, RatingData } from "../types/rating";
import { fetchRatingData } from "../services/api";

export default function FinnrickWidget({
  ratingId,
  grade: propGrade,
  rating: propRating,
  vendorName: propVendorName,
  productName: propProductName,
  sampleCount: propSampleCount,
  lastTestDate: propLastTestDate,
}: FinnrickWidgetProps) {
  const [ratingData, setRatingData] = useState<RatingData | null>(null);

  useEffect(() => {
    if (ratingId) {
      fetchRatingData(ratingId)
        .then((data) => {
          setRatingData(data);
        })
        .catch(() => {
          // Fallback to props if API fails
        });
    }
  }, [ratingId]);

  // Use API data if available, otherwise fall back to props or defaults
  const grade = ratingData?.grade || propGrade || "A";
  const rating = ratingData?.rating || propRating || "GREAT";
  const vendorName =
    ratingData?.vendorName || propVendorName || "Polaris Peptides";
  const productName = ratingData?.productName || propProductName;
  const sampleCount = ratingData?.sampleCount || propSampleCount || 6;
  const lastTestDate =
    ratingData?.lastTestDate || propLastTestDate || "19 Feb 2025";
  return (
    <div
      className="rounded-lg border p-4 w-full max-w-[370px] min-[370px]:max-w-[416px]"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "var(--finnrick-card-bg)",
        borderColor: "var(--finnrick-border-light)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between mb-4 pb-3 border-b"
        style={{ borderColor: "var(--finnrick-border-black)" }}
      >
        <h3
          className="text-xs font-bold tracking-wide"
          style={{ color: "var(--finnrick-text-primary)" }}
        >
          FINNRICK RATING™
        </h3>
        <button
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs font-bold hover:bg-gray-200 transition-colors"
          style={{
            borderColor: "var(--finnrick-icon-gray)",
            color: "var(--finnrick-icon-gray)",
          }}
          aria-label="Information about Finnrick Rating"
        >
          ?
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col min-[370px]:flex-row gap-4 mb-4">
        {/* Rating badge */}
        <div
          className="shrink-0 relative"
          style={{ width: "160px", height: "64px" }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundColor: "var(--finnrick-badge-green)",
              borderRadius: "64px",
            }}
          />

          <div
            className="absolute top-0 left-0 rounded-full flex items-center justify-center"
            style={{
              width: "64px",
              height: "64px",
              border: "1px solid var(--finnrick-card-bg)",
              backgroundColor: "var(--finnrick-badge-green)",
            }}
          >
            <span
              style={{
                fontFamily: "Inter Variable, Inter, sans-serif",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "100%",
                color: "var(--finnrick-badge-text)",
              }}
            >
              {grade}
            </span>
          </div>

          <div
            className="absolute flex items-center"
            style={{
              left: "78px",
              top: "0",
              height: "64px",
            }}
          >
            <span
              style={{
                fontFamily: "Inter Variable, Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--finnrick-badge-text)",
              }}
            >
              {rating}
            </span>
          </div>
        </div>
        {/* Vendor, Product, Testing */}
        <div className="flex flex-col justify-center gap-1 flex-1 min-w-0">
          <h2
            className="text-base min-[370px]:text-lg leading-tight"
            style={{
              color: "var(--finnrick-text-primary)",
              fontWeight: 600,
            }}
          >
            {vendorName}
          </h2>
          {productName && (
            <h3
              className="text-base min-[370px]:text-lg leading-tight"
              style={{
                color: "var(--finnrick-text-primary)",
                fontWeight: 600,
              }}
            >
              {productName}
            </h3>
          )}
          <p
            className="text-xs mt-1"
            style={{ color: "var(--finnrick-text-primary)" }}
          >
            Tested {sampleCount} Sample{sampleCount !== 1 ? "s" : ""}
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--finnrick-text-secondary)" }}
          >
            Last test {lastTestDate}
          </p>
        </div>
      </div>

      {/* Logo */}
      <img
        src="/finnrick-logo-black.svg"
        alt="Finnrick"
        className="h-5 min-[370px]:h-6"
      />
    </div>
  );
}
