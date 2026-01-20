import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  cursorClassName?: string;
  showCursor?: boolean;
}

export const TypewriterText = ({
  text,
  speed = 25,
  delay = 0,
  onComplete,
  className = '',
  cursorClassName = '',
  showCursor = true,
}: TypewriterTextProps) => {
  const { displayedText, isComplete, hasStarted } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  });

  if (!hasStarted) {
    return <span className={className}>&nbsp;</span>;
  }

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className={`inline-block w-[2px] h-[1em] bg-accent-blue ml-[1px] animate-pulse ${cursorClassName}`} />
      )}
    </span>
  );
};
