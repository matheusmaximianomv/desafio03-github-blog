import { CardContainer, CardHeader, CardBody } from './styles';

import { humanizeDate } from '../../utils/formatter';

interface ICardProps {
  heading: string;
  createdAt: string;
  content: string;
}

export function Card({ heading, createdAt, content }: ICardProps) {
  function applyTruncateEffectMultipleLines(): string {
    const maxCharacters = 205;

    if (content.length > maxCharacters) {
      return content.substring(0, maxCharacters).concat('...');
    }

    return content;
  }

  return (
    <CardContainer tabIndex={0}>
      <CardHeader>
        <h3>{heading}</h3>
        <span>{humanizeDate(new Date(createdAt))}</span>
      </CardHeader>

      <CardBody>{applyTruncateEffectMultipleLines()}</CardBody>
    </CardContainer>
  );
}
