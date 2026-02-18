export const STOCK_THRESHOLD = 5;

/** Utility Color Map to add colors dynamically.
 * Tailwind scans your source files as plain text, it has no way of understanding string concatenation or interpolation.
 * @see https://tailwindcss.com/docs/detecting-classes-in-source-files#how-classes-are-detected */
export const COLORMAP = {
    blue: "text-blue-400",
    gray: "text-gray-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
    red: "text-red-400",
    purple: "text-purple-400",
} as const