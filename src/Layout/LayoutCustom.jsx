import React from 'react';

export const LayoutCustom = ({
    children,
    className,
    area,
    colStart,
    rowStart,
    colSpan,
    rowSpan,
    ...props
}) => {
    return (
        <section
            {...props}
            className={className}
            style={{
                gridColumn: `${colStart} / span ${colSpan}`,
                gridRow: `${rowStart} / span ${rowSpan}`,
                gridArea: area
            }}>
            {children}
        </section>
    );
};
