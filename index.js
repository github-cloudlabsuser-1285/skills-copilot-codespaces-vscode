import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// /workspaces/skills-copilot-codespaces-vscode/pages/index.js


const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

const reverseSentence = (sentence) => {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
};

const reversed = reverseSentence("Hello, World");
console.log(reversed);

const extractNames = (data) => {
    return data.flatMap(arr => arr.map(obj => obj.name));
};

// Example usage:
const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];

console.log(extractNames(data)); // ['John', 'Jane', 'Bob']

export default MarkdownEditor;