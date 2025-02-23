import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./map.module.css";
import Modal from "./modal";
import { lat, lng } from "../data";
import { combineLatLng } from "../helpers";
import confetti from "canvas-confetti";

export default function Map({
  apiKey,
  center = { lat: 40.7128, lng: -74.006 },
  zoom = 12,
  mapId,
  path = [], // Add path as a prop, which is an array of lat/lng coordinates
  markers = [], // Array of custom markers with lat, lng, and info
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const pathLineRef = useRef(null);
  const racerMarkerRef = useRef(null);
  const realData = combineLatLng(lat, lng);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: apiKey,
        version: "weekly",
        libraries: ["places"],
      });

      try {
        // Load the Google Maps JavaScript API
        const google = await loader.load();

        // Create the map instance if it doesn't exist
        if (!mapInstanceRef.current) {
          const mapInstance = new google.maps.Map(mapRef.current, {
            center,
            zoom,
            disableDefaultUI: true, // Disable all default UI controls, including the map type toggle
            mapId: mapId,
          });

          mapInstanceRef.current = mapInstance;
        }

        // Add custom markers to the map
        markers.forEach((marker) => {
          const customIcon = {
            url: marker.iconUrl, // Path to your custom marker image
            scaledSize: new google.maps.Size(marker.size, marker.size), // Adjust the size if needed
          };

          const mapMarker = new google.maps.Marker({
            position: marker.position,
            map: mapInstanceRef.current,
            title: marker.title,
            icon: customIcon,
          });

          // Add a click event listener to the marker
          mapMarker.addListener("click", () => {
            setDialogContent({
              title: marker.title,
              description: marker.content,
              image: marker.image,
              icon: marker.iconUrl,
              iconSize: marker.size,
            });
            setIsDialogOpen(true); // Open dialog
          });
        });
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, [apiKey, center, zoom, mapId, markers]); // Only initialize the map on these changes

  useEffect(() => {
    if (path.length > 0 && mapInstanceRef.current) {
      const latestPosition = path[path.length - 1]; // Get last position

      // Ensure the racer marker moves without recreating
      if (!racerMarkerRef.current) {
        racerMarkerRef.current = new google.maps.Marker({
          position: latestPosition,
          map: mapInstanceRef.current,
          icon: {
            url: "racer.png",
            scaledSize: new google.maps.Size(70, 70),
          },
        });
      } else {
        // Move existing marker without removing it
        racerMarkerRef.current.setPosition(latestPosition);
      }

      // Create or update the polyline
      if (!pathLineRef.current) {
        pathLineRef.current = new google.maps.Polyline({
          path: path, // Use the full path array
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 5,
        });
        pathLineRef.current.setMap(mapInstanceRef.current);
      } else {
        pathLineRef.current.setPath(path); // Update polyline path without recreating
      }
      // Check if we have reached the end of the path
      if (path.length === realData.length) {
        // Trigger confetti when the path is fully shown
        confetti({
          particleCount: 200,
          angle: 90,
          spread: 90,
          origin: { x: 0.5, y: 0.5 }, // Center of the screen
        });
      }
    }

    return () => {
      // Remove marker and polyline ONLY when component unmounts
      return () => {
        if (racerMarkerRef.current) {
          racerMarkerRef.current.setMap(null);
          racerMarkerRef.current = null;
        }
        if (pathLineRef.current) {
          pathLineRef.current.setMap(null);
          pathLineRef.current = null;
        }
      };
    };
  }, [path]); // Runs only when path updates

  return (
    <>
      <div ref={mapRef} className={styles.map} />
      <Modal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        content={dialogContent}
      />
    </>
  );
}
