import React from 'react';

export interface ISidebarSlideOverProps {
  openSidebar?: boolean;
  toggleOpenSidebar: () => void;
  children?: React.ReactNode;
}
