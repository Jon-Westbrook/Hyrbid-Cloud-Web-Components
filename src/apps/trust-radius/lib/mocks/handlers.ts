import { rest } from 'msw';
import apiResponse from '../../components/api-data-example.json';

export const handlers = [
  rest.get(
    'https://www.trustradius.com/api/v2/tqw/:trustRadiusId',
    (req, res, ctx) => {
      return res(ctx.json(apiResponse));
    },
  ),
];
