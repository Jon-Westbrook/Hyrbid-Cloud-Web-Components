import React from 'react';

export interface GooglestarsProps {
  product: string;
  count: number;
  score: number;
}

const Googlestars: React.FC<GooglestarsProps> = ({ product, count, score }) => (
  <script type="application/ld+json">
    {`{"@context":"http://schema.org","@type":"SoftwareApplication","applicationCategory":"BusinessApplication","name":"${product}","aggregateRating":{"@type":"AggregateRating","ratingValue":${score},"reviewCount":${count},"bestRating":10,"worstRating":0}}`}
  </script>
);

export default Googlestars;
