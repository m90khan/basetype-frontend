import { MediaBelowContent } from '@components/UI/common/Hero/MediaBelowContent';
import { MediaSlider } from '@components/UI/common/Hero/MediaSlider';
import { MediaUnderContent } from '@components/UI/common/Hero/MediaUnderContent';
import { MinimalHero } from '@components/UI/common/Hero/MinimalHero';
import { TypeHero } from '@components/UI/common/Hero/TypeHero';

const components = {
  minimal: MinimalHero,
  type: TypeHero,
  'media-under-content': MediaUnderContent,
  'media-below-content': MediaBelowContent,
  mediaSlider: MediaSlider,
};

const PageHero: React.FC<any> = ({ variant, page }: any) => {
  // @ts-ignore
  const Block: React.FC<any> = components[variant];
  return <Block {...page} />;
};

export default PageHero;
