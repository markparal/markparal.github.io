# Dark Mode Implementation

This website now includes a comprehensive dark mode feature with the following capabilities:

## Features

- **Theme Toggle**: A floating button in the top-right corner allows users to switch between light and dark modes
- **System Preference Detection**: Automatically detects the user's system preference (light/dark) on first visit
- **Persistent Storage**: Remembers the user's theme preference using localStorage
- **Smooth Transitions**: All theme changes include smooth CSS transitions
- **Responsive Design**: The theme toggle button adapts to mobile screens

## Implementation Details

### CSS Variables
The theme system uses CSS custom properties (variables) defined in `assets/css/style.scss`:

- Light mode variables are defined in `:root`
- Dark mode variables are defined in `[data-theme="dark"]`
- All colors, backgrounds, and borders are controlled by these variables

### JavaScript Functionality
Theme management is handled by `assets/js/theme.js`:

- Initializes theme based on localStorage or system preference
- Handles theme switching with smooth transitions
- Listens for system theme changes
- Exposes theme management functions globally for debugging

### HTML Structure
The theme toggle button is added to `_layouts/default.html`:

```html
<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
  <span id="theme-icon">🌙</span>
</button>
```

## Styled Elements

The dark mode implementation includes styling for:

- Body background and text
- Navigation bar
- Headers (h1-h6)
- Links and buttons
- Code blocks and syntax highlighting
- Tables
- Blockquotes
- Lists
- Footer
- Horizontal rules

## Browser Support

- Modern browsers with CSS custom properties support
- Graceful degradation for older browsers
- LocalStorage for theme persistence

## Customization

To modify the dark mode colors, edit the CSS variables in `assets/css/style.scss`:

```scss
[data-theme="dark"] {
  --bg-primary: #1a1a1a;
  --text-primary: #e0e0e0;
  // ... other variables
}
```

## Testing

To test the dark mode:

1. Build the site: `bundle exec jekyll build`
2. Serve locally: `bundle exec jekyll serve`
3. Click the theme toggle button (🌙/☀️) in the top-right corner
4. Refresh the page to verify persistence
5. Test on mobile devices for responsive design 