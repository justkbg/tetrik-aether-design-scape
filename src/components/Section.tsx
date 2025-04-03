
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
  withContainer?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  fullHeight = false,
  withContainer = true,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24',
        fullHeight && 'min-h-screen flex items-center',
        className
      )}
    >
      {withContainer ? (
        <div className="container mx-auto px-4">{children}</div>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
