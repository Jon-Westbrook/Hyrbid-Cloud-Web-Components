import { Action } from 'redux';

export interface TrustRadiusActionWindowResize extends Action<'WINDOW_RESIZE'> {
  width: number;
}

export const windowResizeAction = (
  width: number,
): TrustRadiusActionWindowResize => ({
  type: 'WINDOW_RESIZE',
  width,
});

export default windowResizeAction;
