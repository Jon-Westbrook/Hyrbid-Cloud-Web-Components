import React, { ImgHTMLAttributes } from 'react';

export interface PublicImageProps extends ImgHTMLAttributes<unknown> {
  imgPath: string;
  widgetId: string;
}

export function grabEnvVar(name: string): string | undefined {
  return process.env[name];
}

const PublicImage: React.FC<PublicImageProps> = ({
  imgPath,
  widgetId,
  ...props
}) => (
  <img
    src={
      imgPath && widgetId
        ? `${process.env.PUBLIC_ASSETS_URL}/${widgetId}/${imgPath}`
        : undefined
    }
    {...props}
  />
);

export default PublicImage;
