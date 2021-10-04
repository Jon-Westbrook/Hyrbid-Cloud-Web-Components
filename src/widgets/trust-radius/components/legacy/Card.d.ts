import React from 'react';

export interface CardProps {
  stars: string;
  data: any;
  width: number;
  theme: string;
}

export type Card = React.FC;
