import React, { useEffect, useState } from 'react';
import OpenSeadragon from 'openseadragon';
import './WSIViewer.css';


const WSIViewer = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [detectionResults, setDetectionResults] = useState([]);

  useEffect(() => {
    fetch('/output.json')
      .then(response => response.json())
      .then(data => {
        const results = data?.inference_results?.output?.detection_results || [];
        setDetectionResults(results);
      })
      .catch(error => console.error('Error:', error));
  }, []);



  //opneseadragon buttons
  useEffect(() => {
    const viewer = OpenSeadragon({
      id: 'openseadragon1',
      prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
      tileSources: {
        type: 'image',
        url: '/image.png',
      },
      showNavigator: true,
      showZoomControl: true,
      showHomeControl: true,
      showFullPageControl: true,
      gestureSettingsMouse: {
        clickToZoom: true,
      },
      // zoom inand out
      minZoomLevel: 0.1,
      maxZoomLevel: 100,
      visibilityRatio: 1.0,
    });


    viewer.addHandler('open', () => {
       //plot boxes
      if (viewer.source?.dimensions) {
        const { x: imageWidth, y: imageHeight } = viewer.source.dimensions;

        detectionResults.forEach(([x1, y1, x2, y2, label]) => {
          const normalizedX1 = x1 / imageWidth;
          const normalizedY1 = y1 / imageHeight;
          const normalizedWidth = (x2 - x1) / imageWidth;
          const normalizedHeight = (y2 - y1) / imageHeight;

          const overlayElement = document.createElement('div');
          overlayElement.className = 'bounding-box';
          overlayElement.title = label;

          viewer.addOverlay({
            element: overlayElement,
            location: new OpenSeadragon.Rect(
              normalizedX1,
              normalizedY1,
              normalizedWidth,
              normalizedHeight
            ),
          });
        });
      }
    });

    viewer.addHandler('zoom', () => {
      setZoomLevel(viewer.viewport.getZoom(true).toFixed(2));
    });

    return () => viewer.destroy();
  }, [detectionResults]);


  
  return (
    <div className="wsi-viewer-container">
      <div id="openseadragon1" className="wsi-viewer"></div>
      <div id="navigator" className="wsi-navigator" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 10, background: 'transparent' }}></div>
      <div className="zoom-level-indicator">
        Zoom Level: {zoomLevel}x
      </div>  
    </div>
  );
};

export default WSIViewer;