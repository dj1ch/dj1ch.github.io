import { forwardRef } from "react";
import type { ReactNode, SVGProps } from "react";

type BaseProps = Omit<SVGProps<SVGSVGElement>, "role" | "viewBox" | "xmlns"> & { size?: number };

const Base = forwardRef<SVGSVGElement, BaseProps>(({ d, size = 16, width = size, height = size, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    width={width}
    height={height}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  />
));

type IconProps = Omit<BaseProps, "children">;

const create = (children: ReactNode) =>
  forwardRef<SVGSVGElement, IconProps>((props, ref) => (
    <Base ref={ref} {...props}>
      {children}
    </Base>
  ));

/**
 * How to add icons ?
 *
 * - Go to https://lucide.dev/icons
 *
 * - Copy the icon as SVG, example:
 *    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
 *      <path d="M18 6 6 18" />
 *      <path d="m6 6 12 12" />
 *    </svg>
 *
 * - create component with `create` function then copy paste path elements, example:
 *    export const IconX = create(
 *      <>
 *        <path d="M18 6 6 18" />
 *        <path d="m6 6 12 12" />
 *      </>
 *    );
 */

// TODO : update icons

export const IconArrowRight = create(
  <>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </>
);

export const IconExternalLink = create(
  <>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </>
);

export const IconImage = create(
  <>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </>
);

export const IconUser = create(
  <>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </>
);

export const IconWifi = create(
  <>
    <path d="M12 20h.01"/>
    <path d="M2 8.82a15 15 0 0 1 20 0"/>
    <path d="M5 12.859a10 10 0 0 1 14 0"/>
    <path d="M8.5 16.429a5 5 0 0 1 7 0"/>
  </>
);

export const IconRouter = create(
  <>
    <rect width="20" height="8" x="2" y="14" rx="2"/>
    <path d="M6.01 18H6"/>
    <path d="M10.01 18H10"/>
    <path d="M15 10v4"/>
    <path d="M17.84 7.17a4 4 0 0 0-5.66 0"/>
    <path d="M20.66 4.34a8 8 0 0 0-11.31 0"/>
  </>
);

export const IconKnife = create(
  <>
    <path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"/>
    <path d="M18 6h.01"/>
    <path d="M6 18h.01"/>
    <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"/>
    <path d="M18 11.66V22a4 4 0 0 0 4-4V6"/>
  </>
);

export const IconDatabase = create(
  <>
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M3 5V19A9 3 0 0 0 21 19V5"/>
    <path d="M3 12A9 3 0 0 0 21 12"/>
  </>
);

export const IconGps = create(
  <>
    <line x1="2" x2="5" y1="12" y2="12"/>
    <line x1="19" x2="22" y1="12" y2="12"/>
    <line x1="12" x2="12" y1="2" y2="5"/>
    <line x1="12" x2="12" y1="19" y2="22"/>
    <circle cx="12" cy="12" r="7"/>
    <circle cx="12" cy="12" r="3"/>
  </>
);

export const IconPot = create(
  <>
    <path d="M2 12h20"/>
    <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/>
    <path d="m4 8 16-4"/>
    <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/>
  </>
);

export const IconNfc = create(
  <>
    <rect width="7" height="12" x="2" y="6" rx="1"/>
    <path d="M13 8.32a7.43 7.43 0 0 1 0 7.36"/>
    <path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"/>
    <path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"/>
  </>
);

export const IconPcb = create(
  <>
    <rect width="18" height="18" x="3" y="3" rx="2"/>
    <path d="M11 9h4a2 2 0 0 0 2-2V3"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="M7 21v-4a2 2 0 0 1 2-2h4"/>
    <circle cx="15" cy="15" r="2"/>
  </>
);

export const IconHouse = create(
  <>
    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  </>
);

export const IconChip = create(
  <>
    <path d="M18 12h2"/>
    <path d="M18 16h2"/>
    <path d="M18 20h2"/>
    <path d="M18 4h2"/>
    <path d="M18 8h2"/>
    <path d="M4 12h2"/>
    <path d="M4 16h2"/>
    <path d="M4 20h2"/>
    <path d="M4 4h2"/>
    <path d="M4 8h2"/>
    <path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"/>
  </>
);

export const IconNotebook = create(
  <>
    <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/>
    <path d="M2 6h4"/>
    <path d="M2 10h4"/>
    <path d="M2 14h4"/>
    <path d="M2 18h4"/>
    <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/>
  </>
);