import { PageData, Theme } from '@/types/page';
import { Clock, Sun, Sparkles, Star } from 'lucide-react';

interface PageContentProps {
  page: PageData;
  isActive: boolean;
}

const themeIcons: Record<Theme, React.ReactNode> = {
  welcome: <Star className="w-5 h-5" />,
  past: <Clock className="w-5 h-5" />,
  present: <Sun className="w-5 h-5" />,
  future: <Sparkles className="w-5 h-5" />,
};

const themeLabels: Record<Theme, string> = {
  welcome: 'Welcome',
  past: 'Past',
  present: 'Present',
  future: 'Future',
};

const getThemeClass = (theme: Theme): string => {
  if (theme === 'welcome') return 'theme-present'; // Use present theme for welcome
  return `theme-${theme}`;
};

export const PageContent = ({ page, isActive }: PageContentProps) => {
  const themeClass = getThemeClass(page.theme);

  const renderTitle = () => {
    if (!page.title) return null;
    
    if (page.highlightedWord) {
      return (
        <h1 
          className={`page-heading ${isActive ? 'animate-slide-up' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          {page.title} <span className="page-highlight">{page.highlightedWord}</span>
        </h1>
      );
    }
    
    return (
      <h1 
        className={`page-heading ${isActive ? 'animate-slide-up' : ''}`}
        style={{ animationDelay: '0.2s' }}
      >
        {page.title}
      </h1>
    );
  };

  return (
    <div className={`page-container ${themeClass} ${isActive ? 'animate-fade-in' : ''}`}>
      <div className="max-w-5xl mx-auto text-center w-full">
        {/* Theme indicator */}
        <div className={`theme-indicator mb-6 ${isActive ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          {themeIcons[page.theme]}
          <span className="text-base font-semibold">{themeLabels[page.theme]}</span>
        </div>

        {/* Subtitle */}
        {page.subtitle && (
          <p 
            className={`page-subheading ${isActive ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '0.15s' }}
          >
            {page.subtitle}
          </p>
        )}

        {/* Title */}
        {renderTitle()}

        {/* Question (if no title) */}
        {!page.title && page.question && (
          <h1 
            className={`page-heading ${isActive ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            {page.question}
          </h1>
        )}

        {/* Decorative line */}
        <div 
          className={`accent-line w-32 mx-auto mb-8 ${isActive ? 'animate-slide-up' : ''}`}
          style={{ animationDelay: '0.3s' }}
        />

        {/* Body text */}
        {page.body && (
          <p 
            className={`page-body mx-auto ${isActive ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            {page.body}
          </p>
        )}

        {/* Prompts list */}
        {page.prompts && (
          <div className={`mt-8 space-y-2 ${isActive ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            {page.prompts.map((prompt, index) => (
              <div key={index} className="page-list-item">
                {prompt}
              </div>
            ))}
          </div>
        )}

        {/* Fun facts list */}
        {page.funFacts && (
          <div className={`mt-8 space-y-3 ${isActive ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.4s' }}>
            {page.funFacts.map((fact, index) => (
              <div key={index} className="page-list-item flex items-start gap-3">
                <span className="accent-dot mt-2 flex-shrink-0" />
                <span className="text-left">{fact}</span>
              </div>
            ))}
          </div>
        )}

        {/* Main Image */}
        {page.imageUrl && !page.tofuDishes && (
          <div 
            className={`mt-10 rounded-3xl overflow-hidden shadow-xl mx-auto max-w-lg ${isActive ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '0.5s' }}
          >
            <img 
              src={page.imageUrl} 
              alt={page.title || 'Page image'}
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
        )}

        {/* Tofu dishes grid */}
        {page.tofuDishes && (
          <>
            <div 
              className={`mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 ${isActive ? 'animate-slide-up' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >
              {page.tofuDishes.map((dish, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  style={{ 
                    backgroundColor: 'hsl(var(--page-accent-light) / 0.2)',
                  }}
                >
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                  <p 
                    className="py-3 px-2 text-base md:text-lg font-medium"
                    style={{ color: 'hsl(var(--page-text))' }}
                  >
                    {dish.name}
                  </p>
                </div>
              ))}
            </div>
            {page.question && (
              <p 
                className={`page-question ${isActive ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: '0.6s' }}
              >
                {page.question}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
