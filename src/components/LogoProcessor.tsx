import { useEffect, useState } from 'react';
import { processImageFromUrl } from '@/utils/backgroundRemoval';

interface LogoProcessorProps {
  originalImagePath: string;
  onProcessed: (processedImageUrl: string) => void;
  className?: string;
  alt?: string;
}

const LogoProcessor = ({ originalImagePath, onProcessed, className, alt }: LogoProcessorProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      setError(null);
      
      try {
        const processed = await processImageFromUrl(originalImagePath);
        setProcessedImageUrl(processed);
        onProcessed(processed);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, [originalImagePath, onProcessed]);

  if (isProcessing) {
    return (
      <div className={className}>
        <div className="animate-pulse bg-gray-300 rounded w-5 h-6"></div>
      </div>
    );
  }

  if (error) {
    // Fallback to original image
    return (
      <img 
        src={originalImagePath}
        alt={alt}
        className={className}
      />
    );
  }

  return (
    <img 
      src={processedImageUrl || originalImagePath}
      alt={alt}
      className={className}
    />
  );
};

export default LogoProcessor;