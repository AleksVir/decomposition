import React from 'react';

interface MapBlockProps {
  title?: string;
  subtitle?: string;
  mapUrl?: string;
}

const MapBlock: React.FC<MapBlockProps> = ({
  title = 'Карта',
  subtitle = 'Интерактивная карта города',
  mapUrl = 'https://example.com/map'
}) => {
  return (
    <div className="map-block card">
      <div className="map-header">
        <h3 className="map-title">{title}</h3>
        <p className="map-subtitle">{subtitle}</p>
      </div>
      <div className="map-container">
        <iframe
          src={mapUrl}
          className="map-iframe"
          title="Интерактивная карта"
          allowFullScreen
        ></iframe>
      </div>
      <div className="map-controls">
        <button className="map-control-btn">
          Увеличить
        </button>
        <button className="map-control-btn">
          Уменьшить
        </button>
        <button className="map-control-btn">
          Центр карты
        </button>
      </div>
    </div>
  );
};

export default MapBlock;
