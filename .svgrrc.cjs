module.exports = {
  // TypeScript generation
  typescript: true,

  // Adds viewBox and optimizes for icons
  icon: true,

  // Export without "Svg" prefix
  exportType: 'named',

  // Filenames in kebab-case (modern style)
  filenameCase: 'kebab',

  // Use custom template
  // eslint-disable-next-line
  template: require('./svgr-template.cjs'),

  // Don't format with prettier (using our own formatter)
  prettier: false,

  // SVGO optimization
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // Keep viewBox for proper scaling
            removeViewBox: false,
            // Remove unnecessary attributes
            cleanupIds: true,
          },
        },
      },
      // Custom plugin: replace ALL colors (fill/stroke) with currentColor
      // This allows controlling color via className="text-color-500"
      {
        name: 'convertColorsToCurrentColor',
        fn: () => {
          return {
            element: {
              enter: (node) => {
                // Replace fill with currentColor (except 'none')
                if (node.attributes.fill && node.attributes.fill !== 'none') {
                  node.attributes.fill = 'currentColor';
                }
                // Replace stroke with currentColor (except 'none')
                if (node.attributes.stroke && node.attributes.stroke !== 'none') {
                  node.attributes.stroke = 'currentColor';
                }
              },
            },
          };
        },
      },
    ],
  },

  // Add props to SVG element
  svgProps: {
    className: '{cn(className)}',
  },

  // Index file for auto-export
  indexTemplate: (filePaths) => {
    const exports = filePaths.map((filePath) => {
      const filename = filePath.path.split(/[\\/]/).pop().replace('.tsx', '');

      // Convert kebab-case to PascalCase for component name
      const componentName = filename
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

      return `export { ${componentName} } from './${filename}';`;
    });

    return exports.join('\n') + '\n';
  },
};
