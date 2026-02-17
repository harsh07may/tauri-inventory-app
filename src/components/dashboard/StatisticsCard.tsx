import { isValidElement, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Utility Color Map to add colors dynamically.
 * Tailwind scans your source files as plain text, it has no way of understanding string concatenation or interpolation.
 * @see https://tailwindcss.com/docs/detecting-classes-in-source-files#how-classes-are-detected */
const colorMap = {
    blue: "text-blue-400",
    gray: "text-gray-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
    red: "text-red-400",
    purple: "text-purple-400",
} as const

type StatisticsCardProps = {
    icon: ReactNode
    value: string
    title: string
    className?: string
    color?: keyof typeof colorMap
}



const StatisticsCard = ({
    icon,
    value,
    title,
    className,
    color = "blue"
}: StatisticsCardProps) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 rounded-3xl px-2 py-4 max-w-md bg-white shadow-sm min-w-40',
                className
            )}
        >
            {/* Icon container */}
            <div
                className={cn(
                    'flex size-12 shrink-0 items-center justify-center rounded-2xl',
                    colorMap[color]
                )}
            >
                {icon}
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-0.5">
                <span
                    className={cn(
                        'text-lg font-semibold uppercase tracking-wide',
                        colorMap[color]
                    )}
                >
                    {title}
                </span>
                <span className="text-xl font-bold text-gray-800 leading-tight">
                    {value}
                </span>
            </div>
        </div>
    )
}

export default StatisticsCard