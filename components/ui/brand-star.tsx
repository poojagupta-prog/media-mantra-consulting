import type { SVGProps } from "react";

type BrandStarProps = SVGProps<SVGSVGElement> & { size?: number | string };

/** Vector ribbon mark traced from the supplied artwork. Inherits the local foreground. */
export function BrandStar({ size, ...props }: BrandStarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="120 200 1370 580"
      width={size ?? "2.36em"}
      height={size ?? "1em"}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Continuous silhouette, with no white background or fixed mint fill. */}
      <path
        opacity=".82"
        d="M132 647 C128 633 138 627 148 640 C175 670 201 684 218 675 C251 660 307 549 397 381 L433 324 C464 281 498 267 527 291 C562 316 615 397 684 473 C730 425 772 366 817 308 C848 270 879 269 902 303 C927 338 957 418 1001 491 C1047 570 1084 612 1126 646 C1215 583 1279 471 1336 332 L1290 328 C1278 328 1278 318 1287 312 L1403 220 C1425 204 1435 209 1441 231 L1479 373 C1482 385 1473 386 1465 382 L1422 358 C1375 517 1324 637 1251 708 C1209 750 1166 772 1124 767 C1067 768 1017 733 974 682 C928 627 891 549 852 466 C795 550 741 619 684 618 C617 619 558 523 503 439 C432 547 362 664 300 706 C241 749 150 738 132 647 Z"
      />
      {/* Tonal folds retain the ribbon's overlapping structure in any theme. */}
      <path
        opacity=".5"
        d="M397 381 C427 339 457 368 503 439 C473 393 449 356 426 362 C416 363 406 370 397 381 Z M597 571 C625 544 655 505 684 473 C737 533 791 551 852 466 C795 550 741 619 684 618 C650 619 622 598 597 571 Z M1007 713 C1047 697 1088 675 1126 646 C1165 676 1205 696 1251 708 C1209 750 1166 772 1124 767 C1081 768 1042 748 1007 713 Z"
      />
    </svg>
  );
}
