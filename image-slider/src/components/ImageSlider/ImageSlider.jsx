import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ImageSlider.css";

function ImageSlider({ url, limit = 8 }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${url}?page=1&limit=${limit}`);

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();

        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [url, limit]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (loading) {
    return <p className="status">Loading images...</p>;
  }

  if (error) {
    return <p className="status error">{error}</p>;
  }

  return (
    <div className="slider">
      <h1>Image Slider</h1>

      <div className="slider-container">
        <button
          className="arrow left"
          onClick={handlePrevious}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        <img
          src={images[currentIndex].download_url}
          alt={`Slider image ${currentIndex + 1}`}
        />

        <button
          className="arrow right"
          onClick={handleNext}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>

      <p className="counter">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}

export default ImageSlider;