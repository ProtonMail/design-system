import React from 'react';
import { format } from 'prettier/standalone';
import css from 'prettier/parser-postcss';

const Typography = () => (
    <>
        <h1>Typography (TBD)</h1>
        <h2>Typeface</h2>
        <p>
            ProtonMail V4.0 utilizes a system font stack. System fonts are the default fonts used by any given OS,
            helping performance by eliminating the need to download font files.
        </p>

        <pre>
            <code className="language-css">
                {format(
                    `body {
                        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
                    }`,
                    { parser: 'css', plugins: [css] }
                )}
            </code>
        </pre>

        <h2>Font sizes (TBD)</h2>
        <p>
            You can use also use <code>class="h1"</code>, <code>class="h2"</code>, <code>class="h3"</code>, etc. to
            style elements like <code>h1</code>, <code>h2</code>, <code>h3</code>, etc.
        </p>

        {[36, 28, 20, 18, 17, 16].map((size, i) => (
            <p className={`h${i + 1}`}>
                This is a heading <code>h{i + 1}</code> (equiv {size}px)
            </p>
        ))}

        <hr />

        <h2>Other helpers (TBD)</h2>
        <p className="smaller">This text is smaller (equiv 10px)</p>
        <p className="small">This text is small (equiv 12px)</p>
        <p className="big">This text is big (equiv 16px)</p>
        <p className="bigger">This text is bigger (equiv 18px)</p>
        <p className="biggest">This text is biggest (equiv 20px)</p>

        <h2>Other styles</h2>
        <p>
            Styles for keyboard tips: use <kbd>command</kbd> + <kbd>enter</kbd>.<br />
            Or <kbd>↑</kbd> <kbd>↑</kbd> <kbd>↓</kbd> <kbd>↓</kbd> <kbd>←</kbd> <kbd>→</kbd> <kbd>←</kbd> <kbd>→</kbd>{' '}
            <kbd className="uppercase">B</kbd> <kbd className="uppercase">A</kbd>.
        </p>
    </>
);

export default Typography;
