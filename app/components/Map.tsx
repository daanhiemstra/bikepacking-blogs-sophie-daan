'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GPXParser } from 'gpxparser';

interface MapProps {
  gpxFiles: string[];
  className?: string;
}

interface TrackPoint {
  lat: number;
  lon: number;
}

export default function Map({ gpxFiles, className = '' }: MapProps) {
  const [tracks, setTracks] = useState<TrackPoint[][]>([]);
  const [bounds, setBounds] = useState<[[number, number], [number, number]] | null>(null);

  useEffect(() => {
    const loadGPXFiles = async () => {
      const loadedTracks: TrackPoint[][] = [];
      let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;

      for (const gpxFile of gpxFiles) {
        try {
          const response = await fetch(gpxFile);
          const gpxText = await response.text();
          const gpx = new GPXParser();
          gpx.parse(gpxText);

          const track = gpx.tracks[0].points.map(point => ({
            lat: point.lat,
            lon: point.lon,
          }));

          track.forEach(point => {
            minLat = Math.min(minLat, point.lat);
            maxLat = Math.max(maxLat, point.lat);
            minLon = Math.min(minLon, point.lon);
            maxLon = Math.max(maxLon, point.lon);
          });

          loadedTracks.push(track);
        } catch (error) {
          console.error(`Error loading GPX file ${gpxFile}:`, error);
        }
      }

      setTracks(loadedTracks);
      setBounds([[minLat, minLon], [maxLat, maxLon]]);
    };

    loadGPXFiles();
  }, [gpxFiles]);

  if (!bounds) {
    return <div className={`${className} animate-pulse bg-celadon/20`} />;
  }

  return (
    <MapContainer
      bounds={bounds}
      className={className}
      style={{ background: 'rgb(var(--color-cream))' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {tracks.map((track, index) => (
        <Polyline
          key={index}
          positions={track.map(point => [point.lat, point.lon])}
          color="#970c10"
          weight={3}
          opacity={0.8}
        />
      ))}
    </MapContainer>
  );
}