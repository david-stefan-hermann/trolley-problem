import React, { useRef, useState, useEffect } from 'react'

const CircleSegments = ({ segments }) => {

    const wheelContainerRef = useRef(null)
    const [wheelContainerWidth, setWheelContainerWidth] = useState(0)

    useEffect(() => {
        setWheelContainerWidth(wheelContainerRef.current.offsetWidth)

        const handleResize = () => {
            setWheelContainerWidth(wheelContainerRef.current.offsetWidth)
        }

        window.addEventListener('resize', handleResize)

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const size = wheelContainerWidth - 40 // Diameter of the circle
    const radius = size / 2 - 2     // - 2 to account for the stroke width
    const centerX = radius + 2      // + 2 to account for the stroke width
    const centerY = radius + 2      // + 2 to account for the stroke width


    const drawSegment = (index, total) => {
        const angle = (2 * Math.PI) / total
        const startAngle = angle * index
        const endAngle = angle * (index + 1)

        const startX = centerX + radius * Math.cos(startAngle)
        const startY = centerY + radius * Math.sin(startAngle)
        const endX = centerX + radius * Math.cos(endAngle)
        const endY = centerY + radius * Math.sin(endAngle)

        const largeArcFlag = angle > Math.PI ? 1 : 0

        const pathData = [
            `M${centerX},${centerY}`,
            `L${startX},${startY}`,
            `A${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`,
            'Z'
        ].join(' ')

        // Calculate label position
        const labelAngle = startAngle + angle / 2
        const labelX = centerX + (radius - 20) * Math.cos(labelAngle) // 20 is the margin from the edge
        const labelY = centerY + (radius - 20) * Math.sin(labelAngle)

        return {
            pathData,
            labelX,
            labelY,
            labelText: segments[index].label
        }
    }

    return (
        <div className="flex justify-center flex-col w-full max-w-sm 2xl:max-w-xl" ref={wheelContainerRef}>
            {size > 0 &&
                <svg width={size} height={size} className="mx-auto">
                    {segments.map((segment, index) => {
                        const { pathData, labelX, labelY, labelText } = drawSegment(index, segments.length)
                        // Calculate the angle in degrees and adjust for text orientation
                        const angle = (index / segments.length) * 360
                        const rotationAngle = angle + 20 // Subtract 90 degrees to align text radially with the middle of the segment

                        return (
                            <g key={index}>
                                <path
                                    d={pathData}
                                    // fill={`hsl(360, 0%, ${(index * 360 / segments.length) / 7.2}%)`}
                                    fill='white'
                                    stroke="black" // Color of the outline
                                    strokeWidth="4" // Width of the outline
                                />
                                <text
                                    x={labelX}
                                    y={labelY}
                                    className='text-sm 2xl:text-2xl'
                                    fill="black"
                                    textAnchor="end"
                                    alignmentBaseline="middle"
                                    transform={`rotate(${rotationAngle}, ${labelX}, ${labelY})`}>
                                    {labelText}
                                </text>
                            </g>
                        )
                    })}
                </svg>
            }
        </div>
    )
}

export default CircleSegments
