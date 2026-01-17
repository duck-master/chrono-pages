import { useState, useCallback, useEffect } from "react";
import { pagesData } from "@/data/pages";
import { PageContent } from "./PageContent";
import { PageNavigation } from "./PageNavigation";
import { Theme } from "@/types/page";

const getThemeClass = (theme: Theme): string => {
  if (theme === "welcome") return "theme-present";
  return `theme-${theme}`;
};

export const PageViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changePage = useCallback(
    (newPage: number) => {
      if (newPage < 0 || newPage >= pagesData.length || isTransitioning) return;

      setIsTransitioning(true);
      setCurrentPage(newPage);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    },
    [isTransitioning],
  );

  const handlePrevious = useCallback(() => {
    changePage(currentPage - 1);
  }, [currentPage, changePage]);

  const handleNext = useCallback(() => {
    changePage(currentPage + 1);
  }, [currentPage, changePage]);

  const handleGoToPage = useCallback(
    (index: number) => {
      changePage(index);
    },
    [changePage],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        handlePrevious();
      } else if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " "
      ) {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevious, handleNext]);

  // Touch/swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 50;

      if (touchStartX - touchEndX > swipeThreshold) {
        handleNext();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        handlePrevious();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handlePrevious, handleNext]);

  const currentPageData = pagesData[currentPage];
  const themeClass = getThemeClass(currentPageData.theme);

  return (
    <div className={`relative min-h-screen ${themeClass}`}>
      <PageContent
        key={currentPage}
        page={currentPageData}
        isActive={!isTransitioning}
      />

      <PageNavigation
        currentPage={currentPage}
        totalPages={pagesData.length}
        pages={pagesData}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onGoToPage={handleGoToPage}
      />
    </div>
  );
};
