import styled from 'styled-components';

export const ForegroundContainer = styled.div`
  width: 100%;
  height: 18.5rem;

  background-color: ${(props) => props.theme['gray-800']};

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: -1;
  overflow: hidden;

  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ForegroundShadowEffectLeft = styled.div`
  position: absolute;
  width: 155.25px;
  height: 155.25px;
  right: -15.43px;
  top: -52.14px;
  background: ${(props) => props.theme['blue-100']};
  filter: blur(184px);
  transform: rotate(15deg);
  z-index: -2;
`;

export const ForegroundShadowEffectCenter = styled.div`
  position: absolute;

  width: 891px;
  height: 52px;
  left: calc(50% - 891px / 2 - 2.5px);
  top: 235px;
  background: ${(props) => props.theme['blue-100']};
  filter: blur(106px);
  z-index: -2;
`;

export const ForegroundShadowEffectRight = styled.div`
  position: absolute;
  width: 236px;
  height: 236px;
  left: -130px;
  top: -96px;
  background: ${(props) => props.theme['blue-100']};
  filter: blur(200px);
  z-index: -2;
`;
