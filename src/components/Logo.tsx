const LOGO_RATIO = 1000 / 344;

type LogoProps = {
  height?: number;
  className?: string;
};

export function Logo({ height = 32, className = "" }: LogoProps) {
  const width = Math.round(height * LOGO_RATIO);

  return (
    <img
      src="/haidos-logo.png"
      alt=""
      width={width}
      height={height}
      className={`block w-auto ${className}`}
      style={{ height, width }}
      decoding="async"
    />
  );
}
