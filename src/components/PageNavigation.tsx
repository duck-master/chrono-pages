import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageData, Theme } from '@/types/page';

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  pages: PageData[];
  onPrevious: () => void;
  onNext: () => void;
  onGoToPage: (index: number) => void;
}

const themeColors: Record<Theme, string> = {
  past: 'bg-past-accent',
  present: 'bg-present-accent',
  future: 'bg-future-accent',
};

const themeBorderColors: Record<Theme, string> = {
  past: 'border-past-accent',
  present: 'border-present-accent',
  future: 'border-future-accent',
};

export const PageNavigation = ({
  currentPage,
  totalPages,
  pages,
  onPrevious,
  onNext,
  onGoToPage,
}: PageNavigationProps) => {
  const currentTheme = pages[currentPage]?.theme || 'present';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-t from-black/10 to-transparent">
        {/* Previous button */}
        <button
          onClick={onPrevious}
          disabled={currentPage === 0}
          className={`
            p-3 rounded-full transition-all duration-300
            ${currentPage === 0 
              ? 'opacity-30 cursor-not-allowed' 
              : 'opacity-70 hover:opacity-100 hover:scale-110'
            }
          `}
          style={{ 
            backgroundColor: 'hsl(var(--page-accent) / 0.2)',
            color: 'hsl(var(--page-accent))'
          }}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Page dots */}
        <div className="flex items-center gap-2">
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => onGoToPage(index)}
              className={`
                transition-all duration-300 rounded-full
                ${index === currentPage 
                  ? 'w-8 h-3' 
                  : 'w-3 h-3 hover:scale-125'
                }
              `}
              style={{
                backgroundColor: index === currentPage
                  ? 'hsl(var(--page-accent))'
                  : 'hsl(var(--page-accent) / 0.3)',
              }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={onNext}
          disabled={currentPage === totalPages - 1}
          className={`
            p-3 rounded-full transition-all duration-300
            ${currentPage === totalPages - 1 
              ? 'opacity-30 cursor-not-allowed' 
              : 'opacity-70 hover:opacity-100 hover:scale-110'
            }
          `}
          style={{ 
            backgroundColor: 'hsl(var(--page-accent) / 0.2)',
            color: 'hsl(var(--page-accent))'
          }}
          aria-label="Next page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Page counter */}
      <div 
        className="absolute bottom-2 right-6 text-sm font-medium opacity-60"
        style={{ color: 'hsl(var(--page-text))' }}
      >
        {currentPage + 1} / {totalPages}
      </div>
    </div>
  );
};
