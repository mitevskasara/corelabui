import React, { forwardRef } from 'react';
import Typography from '../Typography';
import { injectTheme } from '../Theme';
import { injectStyle } from '../utils';
import './table.css';

injectTheme();
injectStyle('Table', {});

export const stylesheet = injectStylesheetServerSide('Table', {});

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
            textOverflow,
            ...props
        },
        ref
    ) => {
        let classes = `CoreLabUI CoreLabUI__table`;
        let rowClasses = 'CoreLabUI__table-body-row';
        if (striped) rowClasses += ` CoreLabUI__table-body-row--striped`;
        if (bordered) rowClasses += ` CoreLabUI__table-body-row--bordered`;
        if (className) classes += ` ${className}`;

        return (
            <table
                {...props}
                className={classes}
                ref={ref}
                style={{ '--spacing': spacing }}>
                {headers && (
                    <thead className="CoreLabUI__table-head">
                        <tr className={rowClasses}>
                            {headers?.map((header, index) => (
                                <th
                                    key={index}
                                    className="CoreLabUI__table-head-column">
                                    <div>
                                        {typeof header === 'string' ||
                                            typeof header === 'number' ? (
                                            <Typography
                                                variant="subtitle2"
                                                htmlElement="p"
                                                margin={false}
                                                overflow={
                                                    textOverflow && 'ellipsis'
                                                }>
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
                    <tbody className="CoreLabUI__table-body">
                        {data.map((row, rowId) => (
                            <tr key={rowId} className={rowClasses}>
                                {Object.keys(row)?.map((column, columnId) => (
                                    <td
                                        key={columnId}
                                        className="CoreLabUI__table-body-column">
                                        <div>
                                            {typeof row[column] === 'string' ||
                                                typeof row[column] === 'number' ? (
                                                <Typography
                                                    variant="body2"
                                                    margin={false}
                                                    overflow={
                                                        textOverflow &&
                                                        'ellipsis'
                                                    }>
                                                    {row[column]}
                                                </Typography>
                                            ) : typeof row[column] ===
                                                'object' ? (
                                                <Typography
                                                    variant="body2"
                                                    margin={false}
                                                    overflow={
                                                        textOverflow &&
                                                        'ellipsis'
                                                    }
                                                    dangerouslySetInnerHTML={
                                                        row[column]?.node && {
                                                            __html: row[column]
                                                                ?.text
                                                        }
                                                    }
                                                />
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
