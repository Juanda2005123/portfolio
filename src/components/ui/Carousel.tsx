'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

export type CarouselContextType = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
};

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a CarouselProvider');
  }
  return context;
}

export interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export function Carousel({ children, className }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const checkScrollability = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    // Margen de tolerancia de 5px para redondeo de subpíxeles
    setCanScrollPrev(scrollLeft > 5);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 5);
  }, []);

  const scrollPrev = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const firstItem = el.firstElementChild as HTMLElement | null;
    const step = firstItem ? firstItem.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;

    if (el.scrollLeft <= step) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: -step, behavior: 'smooth' });
    }
  }, []);

  const scrollNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const firstItem = el.firstElementChild as HTMLElement | null;
    const step = firstItem ? firstItem.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const targetScroll = el.scrollLeft + step;

    // Si el siguiente salto sobrepasa o queda casi al final, fijar exactamente en maxScroll
    // Así la última tarjeta queda pegada a la derecha de la pantalla y no queda hueco negro
    if (targetScroll >= maxScroll - 15) {
      el.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: step, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollability();
    const timer = setTimeout(checkScrollability, 150);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScrollability();
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const resizeObserver = new ResizeObserver(() => {
      checkScrollability();
    });
    resizeObserver.observe(el);

    return () => {
      clearTimeout(timer);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      resizeObserver.disconnect();
    };
  }, [checkScrollability]);

  return (
    <CarouselContext.Provider
      value={{
        scrollRef,
        canScrollPrev,
        canScrollNext,
        scrollPrev,
        scrollNext,
      }}
    >
      <div className={cn('relative w-full', className)}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CarouselContent({ children, className, ...props }: CarouselContentProps) {
  const { scrollRef } = useCarousel();
  const [isMouseDown, setIsMouseDown] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    setIsMouseDown(true);
    hasDragged.current = false;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragScrollLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    const el = scrollRef.current;
    if (!el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - dragStartX.current;

    if (Math.abs(walk) > 6) {
      hasDragged.current = true;
    }

    el.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    // Si fue un arrastre con el ratón, prevenir clicks accidentales en botones o links
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged.current = false;
    }
  };

  return (
    <div
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onClickCapture={handleClickCapture}
      className={cn(
        'flex overflow-x-auto no-scrollbar scroll-smooth overscroll-x-contain select-none',
        isMouseDown ? 'cursor-grabbing' : 'cursor-grab',
        className
      )}
      style={{
        WebkitOverflowScrolling: 'touch',
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className, ...props }: CarouselItemProps) {
  return (
    <div
      className={cn('min-w-0 shrink-0 select-none', className)}
      {...props}
    >
      {children}
    </div>
  );
}
