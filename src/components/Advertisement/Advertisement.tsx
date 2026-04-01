import React from 'react';


interface AdvertisementProps {
  image?: string;
  title: string;
  subtitle: string;
  link: string;
}

const Advertisement: React.FC<AdvertisementProps> = ({
  image = 'src/assets/images/star.png',
  title,
  subtitle,
  link
}) => {
  return (
    <div className="advertisement">
      <a href={link}>
        <img
          src={image}
          alt={title}
          className="advertisement-image"
        />
        <div className="advertisement-text">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default Advertisement;