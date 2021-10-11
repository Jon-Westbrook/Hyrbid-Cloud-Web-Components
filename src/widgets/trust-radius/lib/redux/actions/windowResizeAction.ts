export interface TrustRadiusActionResize {
  type: 'WINDOW_RESIZE';
  width: number;
}

export const windowResizeAction = (width: number): TrustRadiusActionResize => ({
  type: 'WINDOW_RESIZE',
  width,
});

export default windowResizeAction;
