import React from 'react';

export default ({
    children,
    className,
    area,
    colStart,
    rowStart,
    colSpan,
    rowSpan,
    padding,
    margin,
    ...props
}) => {
    return (
        <section
            {...props}
            className={className}
            style={{
                gridColumn: `${colStart} / span ${colSpan}`,
                gridRow: `${rowStart} / span ${rowSpan}`,
                gridArea: area,
                '--padding': padding,
                '--margin': margin
            }}>
            {children}
        </section>
    );
};
