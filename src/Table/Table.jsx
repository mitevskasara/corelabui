import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './table.css';

injectTheme();
injectStyle('Table', {});

const Table = forwardRef(
    (
        {
            headers,
            data,
            className,
            children,
            spacing = '0.5em 1em',
            striped = false,
            bordered = true,
            overflow,
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI-classic CoreLabUI-classic__table`;
        let rowClasses = 'CoreLabUI-classic__table-body-row';
        if (striped)
            rowClasses += ` CoreLabUI-classic__table-body-row--striped`;
        if (bordered)
            rowClasses += ` CoreLabUI-classic__table-body-row--bordered`;
        if (className) classes += ` ${className}`;

        return (
            <table
                {...props}
                className={classes}
                ref={ref}
                style={{ '--spacing': spacing }}>
                {headers && (
                    <thead className="CoreLabUI-classic__table-head">
                        <tr className={rowClasses}>
                            {headers?.map((header, index) => (
                                <th
                                    key={index}
                                    className="CoreLabUI-classic__table-head-column">
                                    <div>
                                        {typeof header === 'string' ||
                                            typeof header === 'number' ? (
                                            <Typography
                                                variant="subtitle2"
                                                htmlElement="p"
                                                margin={false}
                                                overflow={overflow && "ellipsis"}>
                                                {header}
                                            </Typography>
                                        ) : (
                                            header
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                {data ? (
                    <tbody className="CoreLabUI-classic__table-body">
                        {data.map((row, rowId) => (
                            <tr key={rowId} className={rowClasses}>
                                {Object.keys(row)?.map((column, columnId) => (
                                    <td
                                        key={columnId}
                                        className="CoreLabUI-classic__table-body-column">
                                        <div>
                                            {typeof row[column] === 'string' ||
                                                typeof row[column] === 'number' ? (
                                                <Typography
                                                    variant="body2"
                                                    margin={false}
                                                    overflow={overflow && "ellipsis"}>
                                                    {row[column]}
                                                </Typography>
                                            ) : (
                                                row[column]
                                            )}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    children
                )}
            </table>
        );
    }
);

export default Table;
