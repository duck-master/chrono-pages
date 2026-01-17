import { PageData, Theme } from '@/types/page';
import { Clock, Sun, Sparkles } from 'lucide-react';

interface PageContentProps {
  page: PageData;
  isActive: boolean;
}

const themeIcons: Record<Theme, React.ReactNode> = {
  past: <Clock className="w-4 h-4" />,
  present: <Sun className="w-4 h-4" />,
  future: <Sparkles className="w-4 h-4" />,
};

const themeLabels: Record<Theme, string> = {
  past: 'Past',
  present: 'Present',
  future: 'Future',
};

export const PageContent = ({ page, isActive }: PageContentProps) => {
  const themeClass = `theme-${page.theme}`;

  return (
    <div
      className={`page-container ${themeClass} ${isActive ? 'animate-fade-in' : ''}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Theme indicator */}
        <div className={`theme-indicator mb-8 ${isActive ? 'animate-slide-up' : ''}`} style={{ animationDelay: '0.1s' }}>
          {themeIcons[page.theme]}
          <span>{themeLabels[page.theme]}</span>
        </div>

        {/* Subtitle */}
        <p 
          className={`page-subheading ${isActive ? 'animate-slide-up' : ''}`}
          style={{ animationDelay: '0.2s' }}
        >
          {page.subtitle}
        </p>

        {/* Title */}
        <h1 
          className={`page-heading ${isActive ? 'animate-slide-up' : ''}`}
          style={{ animationDelay: '0.3s' }}
        >
          {page.title}
        </h1>

        {/* Decorative line */}
        <div 
          className={`accent-line w-24 mx-auto mb-8 ${isActive ? 'animate-slide-up' : ''}`}
          style={{ animationDelay: '0.4s' }}
        />

        {/* Body text */}
        <p 
          className={`page-body mx-auto ${isActive ? 'animate-slide-up' : ''}`}
          style={{ animationDelay: '0.5s' }}
        >
          {page.body}
        </p>

        {/* Image placeholder area */}
        {page.imageUrl && (
          <div 
            className={`mt-12 rounded-2xl overflow-hidden shadow-lg ${isActive ? 'animate-slide-up' : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            <img 
              src={page.imageUrl} 
              alt={page.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
