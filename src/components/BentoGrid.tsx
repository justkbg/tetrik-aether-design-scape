
import React from 'react';
import { cn } from '@/lib/utils';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div className={cn('bento-grid', className)}>
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  className,
  title,
  description,
  header,
  icon,
  children,
  colSpan = 1,
  rowSpan = 1,
}) => {
  return (
    <div
      className={cn(
        'bento-item group p-4 md:p-6 bg-tetrik-dark hover:bg-gradient-to-br from-tetrik-dark to-tetrik-gray',
        className,
        colSpan === 2 && 'md:col-span-2',
        rowSpan === 2 && 'md:row-span-2'
      )}
    >
      {header}
      
      <div className="flex flex-col h-full">
        {icon && <div className="mb-4">{icon}</div>}
        
        {title && (
          <h3 className="text-lg md:text-xl font-medium text-white mb-2 group-hover:text-tetrik-accent transition-colors">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-tetrik-silver text-sm">{description}</p>
        )}
        
        {children}
      </div>
    </div>
  );
};
