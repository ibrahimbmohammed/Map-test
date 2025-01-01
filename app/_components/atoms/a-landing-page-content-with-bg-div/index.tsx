import LandingPageBackgroundImage from '@/public/assets/webp/landing-page-background.webp';

interface LandingPageContentWithBgDivProps {
  children: React.ReactNode | React.ReactNode[];
}

function LandingPageContentWithBgDiv({ children }: LandingPageContentWithBgDivProps) {
  return (
    <div className="relative bg-white">
      <img
        loading="lazy"
        src={LandingPageBackgroundImage.src}
        alt="background"
        className="absolute top-0 left-0 w-full opacity-70"
      />
      <div className="relative z-10 min-h-[70rem] xl:min-h-[100rem] text-black">{children}</div>
    </div>
  );
}

export default LandingPageContentWithBgDiv;
