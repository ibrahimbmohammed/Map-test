import { Tab } from "@headlessui/react";

interface CustomTabItemProps {
  index: number;
  selectedIndex: number;
  label: string;
  description: string;
}

export const CustomTabItem = ({
  index,
  selectedIndex,
  label,
  description,
}: CustomTabItemProps) => {
  const getStyles = (index: number) => {
    // Special case for the third tab (index 2)
    if (index === 2) {
      return {
        containerClass:
          selectedIndex === 2
            ? "bg-primaryBlueColor"
            : "bg-white border border-[#98A2B3]",
        textClass: selectedIndex === 2 ? "text-white" : "text-[#98A2B3]",
        textOpacity: selectedIndex === 2 ? "opacity-100" : "opacity-50",
      };
    }

    // For other tabs
    switch (selectedIndex) {
      case index:
        return {
          containerClass: "bg-primaryBlueColor",
          textClass: "text-white",
          textOpacity: "opacity-100"
        };
      case 0:
        return { 
          containerClass: "bg-white border border-[#98A2B3]",
          textClass: "text-[#98A2B3]",
          textOpacity: "opacity-50"
        };
      case 3:
        return {
          containerClass: "bg-[#E7F6EC]",
          textClass: "text-[#0F973D]",
          textOpacity: "opacity-100"
        };
      default:
        return {
          containerClass: "bg-[#E7F6EC]",
          textClass: "text-[#0F973D]",
          textOpacity: "opacity-100"
        };
    }
  };

  const { containerClass, textClass, textOpacity } = getStyles(index);

  return (
    <Tab className="outline-0 " disabled={selectedIndex !== index}>
      <div className="flex space-x-3">
        <div
          className={`${containerClass} rounded-full w-8 h-8 flex items-center justify-center`}
        >
          <p className={textClass}>{index + 1}</p>
        </div>
        <div className="flex flex-col items-start disabled:opacity-50">
          <p
            className={`text-[#101928] text-[16px] font-normal ${textOpacity}`}
          >
            {label}
          </p>
          <p className={`text-[#475367] text-[12px] font-thin ${textOpacity}`}>
            {description}
          </p>
        </div>
      </div>
    </Tab>
  );
};