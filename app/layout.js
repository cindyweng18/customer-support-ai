// app/layout.js

import React from 'react';
import './globals.css'; // Import global styles

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}