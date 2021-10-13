import {
  TrustRadiusPersonalReview,
  TrustRadiusReview,
} from '../components/TrustRadius';

const fetchReviews = async (
  trustRadiusId: string,
): Promise<[TrustRadiusReview[], TrustRadiusPersonalReview]> => {
  const response = await window.fetch(
    `https://www.trustradius.com/api/v2/tqw/${trustRadiusId}`,
  );
  const parsed = await response.json();
  return [parsed.data, parsed.config.products[0]];
};

export default fetchReviews;
