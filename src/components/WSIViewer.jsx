//this is an alternate approach that does not fetch detection results, but uses openseadragon to directly plot the bounding boxes on the image
import React, { useEffect, useState, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import { detectionResults } from '../data';
import './WSIViewer.css';

const WSIViewer = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const canvasRef = useRef(null);
  const viewerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.src = '/image.png';

    image.onload = () => {
      // Set canvas size to match image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw image
      ctx.drawImage(image, 0, 0);

      // Draw RBCs
      detectionResults.forEach(([x1, y1, x2, y2]) => {
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
      });

      // Initialize OpenSeadragon with the canvas
      viewerRef.current = OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
        tileSources: {
          type: 'legacy-image-pyramid',
          levels: [{
            url: canvas.toDataURL(),
            width: canvas.width,
            height: canvas.height
          }]
        },
        showNavigator: true,
        navigatorPosition: 'TOP_RIGHT',
        showZoomControl: true,
        showHomeControl: true,
        showFullPageControl: true,
        minZoomLevel: 0.1,
        maxZoomLevel: 100,
        visibilityRatio: 1.0,
      });

      viewerRef.current.addHandler('zoom', () => {
        setZoomLevel(viewerRef.current.viewport.getZoom(true).toFixed(2));
      });
    };

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="wsi-viewer-container">
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div id="openseadragon1" className="wsi-viewer"></div>
      <div className="zoom-level-indicator">
        Zoom Level: {zoomLevel}x
      </div>
    </div>
  );
};

export default WSIViewer;
