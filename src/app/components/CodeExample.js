import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypes from 'prop-types';
import { format } from 'prettier/standalone';
import html from 'prettier/parser-html';

const options = { parser: 'html', plugins: [html], htmlWhitespaceSensitivity: 'ignore' };

const simplyfyTags = (content, tags) =>
    tags.reduce(
        (acc, tag) =>
            acc.replace(new RegExp(`(<${tag}.*?>)(.*?)(</${tag}>)`, 'g'), /*'$1...$3'*/ `<${tag}>...</${tag}>`),
        content
    );

const CodeExample = ({ children, className, render = true, tagsToSimplify = [] }) => (
    <>
        {render && <div className={className}>{children}</div>}
        <pre>
            <code className="language-markup">
                {format(simplyfyTags(renderToStaticMarkup(children), tagsToSimplify), options)}
            </code>
        </pre>
    </>
);

CodeExample.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    render: PropTypes.bool,
    tagsToSimplify: PropTypes.arrayOf(PropTypes.string)
};

export default CodeExample;
