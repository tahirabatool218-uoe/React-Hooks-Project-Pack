import { useEffect, useState } from "react";
import "./LoadMore.css";

function LoadMore() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const limit = 20;
  const maxProducts = 100;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://dummyjson.com/products?limit=20&skip=0"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data.products);
        setSkip(20);
      } catch (error) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleLoadMore = async () => {
    if (loading || products.length >= maxProducts) {
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();

      setProducts((prevProducts) => [
        ...prevProducts,
        ...data.products,
      ]);

      setSkip((prevSkip) => prevSkip + limit);
    } catch (error) {
      setError("Failed to load more products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="load-more">
      <h1>Products</h1>

      {error && <p className="error">{error}</p>}

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />

            <div className="product-info">
              <h2>{product.title}</h2>
              <p>{product.category}</p>
              <strong>${product.price}</strong>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <p className="loading">Loading products...</p>
      )}

      <div className="load-more-section">
        <p>
          Showing {products.length} of {maxProducts} products
        </p>

        <button
          onClick={handleLoadMore}
          disabled={loading || products.length >= maxProducts}
        >
          {products.length >= maxProducts
            ? "No More Products"
            : "Load More"}
        </button>
      </div>
    </div>
  );
}

export default LoadMore;