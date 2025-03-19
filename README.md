# WSI Viewer

A Whole Slide Image (WSI) viewer application built with React and OpenSeadragon for viewing and analyzing blood sample images with detection results.

## Live Demos

- **Main Version (with detection results)**: [wsislider.netlify.app](https://wsislider.netlify.app/)
- **Alternative Version**: [alt-wsi-slider.netlify.app](https://alt-wsi-slider.netlify.app/)

## Branches

### Main Branch
- Implements detection result visualization from `output.json`
- Displays bounding boxes for detected RBCs
- Shows detailed sample analysis in left panel
- Features zoom controls and navigation

### Alternate-WSI Branch
- Direct image viewing without detection overlays
- Pure OpenSeadragon implementation
- Simpler interface focused on image navigation
- Basic zoom and pan controls

## Features

- **OpenSeadragon Integration**: High-performance viewing of large medical images
- **Interactive Controls**: 
  - Zoom in/out
  - Pan
  - Reset view
  - Full-screen mode
- **Navigation Window**: Mini-map for easy navigation
- **Zoom Level Indicator**: Real-time zoom level display
- **Responsive Layout**: Adapts to different screen sizes

## Technology Stack

- React
- OpenSeadragon
- Vite
- CSS3
- ESLint
