'use client';

import { useState } from 'react';

export function CodeBlock({ children, language = 'javascript' }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="relative group bg-black border border-gray-800 rounded-lg overflow-hidden my-6">
      {/* Copy button positioned at top right corner */}
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 z-10 flex items-center space-x-1 text-xs text-white hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100 bg-gray-800/50 hover:bg-gray-700/70 px-2 py-1 rounded"
      >
        {copied ? (
          <>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Copy</span>
          </>
        )}
      </button>

      {/* Language label */}
      {language && (
        <div className="px-4 py-2 border-b border-gray-800">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            {language}
          </span>
        </div>
      )}

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm text-white font-mono leading-relaxed bg-black">
          <code className="text-white">{children}</code>
        </pre>
      </div>
    </div>
  );
}

export function InlineCode({ children }) {
  return (
    <code className="bg-black text-green-400 px-2 py-1 rounded text-sm font-mono border border-gray-800">
      {children}
    </code>
  );
}