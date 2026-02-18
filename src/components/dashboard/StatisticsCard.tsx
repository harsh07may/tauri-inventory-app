import { isValidElement, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { COLORMAP } from '@/constants'



type StatisticsCardProps = {
    icon: ReactNode
    value: string
    title: string
    className?: string
    color?: keyof typeof COLORMAP
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
                    COLORMAP[color]
                )}
            >
                {icon}
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-0.5">
                <span
                    className={cn(
                        'text-lg font-semibold uppercase tracking-wide',
                        COLORMAP[color]
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