import React from 'react';

interface ErrorsBlockProps {
  imageSrc?: string;
  title: string;
  description: string;
}

const ErrorsBlock: React.FC<ErrorsBlockProps> = ({
  imageSrc = 'src/assets/images/star.svg',
  title,
  description
}) => {
  return (
    <aside className="errors-block">
      <div className="errors-block-content">
        <img
          src={imageSrc}
          alt={title}
          className="errors-block-image"
        />
        <div className="errors-block-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </aside>
  );
};

export default ErrorsBlock;