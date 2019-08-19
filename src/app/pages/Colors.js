import React from 'react';

const hexToRgb = (hex) =>
    hex
        .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1)
        .match(/.{2}/g)
        .map((x) => parseInt(x, 16))
        .join(' ');

const colors = [
    { title: 'Global Grey', name: 'global-grey', hex: '#262a33' },
    { title: 'Global Alt Grey (gradient)', name: 'global-altgrey-gradient', hex: { from: '#262a33', to: '#3C414E' } },
    { title: 'Global Alt Grey', name: 'global-altgrey', hex: '#3c414e' },
    { title: 'Global light', name: 'global-light', hex: '#f6f7fa', light: true },
    { title: 'Global border', name: 'global-border', hex: '#dde6ec', light: true },
    { title: 'Global muted', name: 'global-muted', hex: '#eeeff1', light: true },
    { title: 'Global success', name: 'global-success', hex: '#5db039' },
    { title: 'Global warning', name: 'global-warning', hex: '#ec5858' },
    { title: 'Global attention', name: 'global-attention', hex: '#eac819', light: true },
    { title: 'PM blue', name: 'pm-blue', hex: '#657ee4' },
    { title: 'PM blue dark', name: 'pm-blue-dark', hex: '#526ee0' },
    { title: 'PM blue light', name: 'pm-blue-light', hex: '#788ee8' },
    { title: 'PV green', name: 'pv-green', hex: '#4da358' },
    { title: 'PV green dark', name: 'pv-green-dark', hex: '#3e8447' },
    { title: 'PV green light', name: 'pv-green-light', hex: '#5fb364' },
    { title: 'White', name: 'white', hex: '#fff', light: true },
    { title: 'Black', name: 'black', hex: '#000' },
    { title: 'Visionary', name: 'visionary', hex: '#6ddcfb' },
    { title: 'Plus', name: 'plus', hex: '#c6e422' },
    { title: 'Professional', name: 'professional', hex: '#d4b46e' }
];

const Colors = () => (
    <>
        <h1>Colors</h1>
        <div className="flex pt2">
            {colors.map(({ title, name, hex, light }) => (
                <div key={name} className="w33 colortile pr1 pb1">
                    <div className="flex flex-nowrap bordered-container p1 h100">
                        <div className={`square-color bg-${name}`}></div>
                        <div className="flex-item-fluid pl1">
                            <h2 className="h5">{title}</h2>
                            <p className="mb0-5">
                                Hex:
                                <code className="border bg-global-border p0-25 ml0-5 rounded">
                                    {typeof hex === 'string' ? hex : `${hex.from}-${hex.to}`}
                                </code>
                            </p>
                            <p className="mt0-5">
                                RGB:
                                {typeof hex === 'string' ? (
                                    <code className="border bg-global-border p0-25 ml0-5 rounded">{hexToRgb(hex)}</code>
                                ) : (
                                    <>
                                        <code className="border bg-global-border p0-25 ml0-5 rounded">
                                            {hexToRgb(hex.from)}
                                        </code>
                                        -
                                        <code className="border bg-global-border p0-25 ml0-5 rounded">
                                            {hexToRgb(hex.to)}
                                        </code>
                                    </>
                                )}
                            </p>

                            <p className="mt0-5 mb0-5">CSS classes:</p>
                            <p className="mt0-5 mb0-5">
                                <code
                                    className={`border p0-25 rounded bg-${name} color-${
                                        light ? 'global-grey' : 'global-light'
                                    }`}
                                >
                                    .bg-{name}
                                </code>
                            </p>
                            <p className="mt0-5">
                                <code
                                    className={`border p0-25 rounded color-${name} bg-${
                                        light ? 'global-grey' : 'global-light'
                                    }`}
                                >
                                    .color-{name}
                                </code>
                            </p>

                            <p className="mt0-5 mb0-5">
                                For SVG bg
                                <br />
                                <code
                                    className={`border p0-25 rounded bg-${name} color-${
                                        light ? 'global-grey' : 'global-light'
                                    }`}
                                >
                                    .fill-{name}
                                </code>
                            </p>
                            <p className="mt0-5">
                                Sass:
                                <br />
                                <code className="border bg-global-border p0-25 rounded">$pm-{name}</code>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
);

export default Colors;
