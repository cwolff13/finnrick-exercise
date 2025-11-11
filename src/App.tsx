import FinnrickWidget from "./components/FinnrickWidget";

function App() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Finnrick Rating Widget
          </h1>
          <p
            className="text-gray-600"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <strong>Note:</strong> The widget is fully responsive. Resize your
            browser window to see the mobile layout (stacked) vs desktop layout
            (horizontal).
          </p>
        </div>

        {/* Example 1: Product Rating */}
        <div>
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Product Rating
          </h2>
          <FinnrickWidget ratingId="polaris" />
        </div>

        {/* Example 2: Long Vendor/Product Name */}
        <div>
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Long Vendor/Product Name
          </h2>
          <FinnrickWidget ratingId="shanghai" />
        </div>
      </div>
    </div>
  );
}

export default App;
