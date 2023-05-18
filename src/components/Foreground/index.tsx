import effectLeftImg from '../../assets/effect-left.svg';
import effectRightImg from '../../assets/effect-right.svg';

import {
  ForegroundContainer,
  ForegroundShadowEffectLeft,
  ForegroundShadowEffectCenter,
  ForegroundShadowEffectRight,
} from './styles';

export function Foreground() {
  return (
    <ForegroundContainer>
      <img src={effectLeftImg} draggable="false" alt="cover-left" />
      <img src={effectRightImg} draggable="false" alt="cover-right" />

      <ForegroundShadowEffectLeft />
      <ForegroundShadowEffectCenter />
      <ForegroundShadowEffectRight />
    </ForegroundContainer>
  );
}
