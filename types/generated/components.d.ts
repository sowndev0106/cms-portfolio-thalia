import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionTextInfoSection extends Schema.Component {
  collectionName: 'components_section_text_info_sections';
  info: {
    displayName: 'Text Info Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    flexImage: Attribute.Component<'elements.flex-images'>;
    tagElement: Attribute.String;
    contactButton: Attribute.Component<'elements.button'>;
    colorTitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'yellow-green'>;
    colorSubTitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    >;
  };
}

export interface SectionSwiperCardSection extends Schema.Component {
  collectionName: 'components_section_swiper_card_sections';
  info: {
    displayName: 'Swiper Card Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    colorSubtitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'yellow-green'>;
    colorTitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'white'>;
    cards: Attribute.Component<'elements.card', true>;
    tagElement: Attribute.String;
    contactButton: Attribute.Component<'elements.button'>;
  };
}

export interface SectionGirdImageSection extends Schema.Component {
  collectionName: 'components_section_gird_image_sections';
  info: {
    displayName: 'Gird Image section';
    description: '';
  };
  attributes: {
    colorSubtitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'yellow-green'>;
    colortTitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'white'>;
    title: Attribute.String;
    subTitle: Attribute.String;
    images: Attribute.Component<'elements.grid-image'>;
    tagElement: Attribute.String;
    contactButton: Attribute.Component<'elements.button'>;
  };
}

export interface SectionDivideImageSection extends Schema.Component {
  collectionName: 'components_section_divide_image_sections';
  info: {
    displayName: 'Divide Image Section';
    icon: 'picture';
    description: '';
  };
  attributes: {
    colorSubtitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'yellow-green'>;
    colorTitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'white'>;
    title: Attribute.String;
    subTitle: Attribute.String;
    contactButton: Attribute.Component<'elements.button'>;
    tagElement: Attribute.String;
    divideImage: Attribute.Component<'elements.divide-images'>;
  };
}

export interface ElementsLinkUrl extends Schema.Component {
  collectionName: 'components_elements_link_urls';
  info: {
    displayName: 'LinkUrl';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    target: Attribute.Enumeration<
      ['non', '_blank', '_self', '_parent', '_top']
    >;
    title: Attribute.String;
    color: Attribute.Enumeration<['yellow-green', 'purple', 'black', 'white']>;
    fontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
  };
}

export interface ElementsGridImage extends Schema.Component {
  collectionName: 'components_elements_grid_images';
  info: {
    displayName: 'Grid Image';
    description: '';
  };
  attributes: {
    columnNumberOnMobile: Attribute.Integer;
    columnNumberOnDesktop: Attribute.Integer;
    allowViewImage: Attribute.Boolean;
    borderImageColor: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'yellow-green'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface ElementsFlexImages extends Schema.Component {
  collectionName: 'components_elements_flex_images';
  info: {
    displayName: 'Flex images';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    widthOnMobile: Attribute.Enumeration<
      [
        'w-0.5',
        'w-1',
        'w-1.5',
        'w-2',
        'w-2.5',
        'w-3',
        'w-3.5',
        'w-4',
        'w-5',
        'w-6',
        'w-7',
        'w-8',
        'w-9',
        'w-10',
        'w-11',
        'w-12',
        'w-14',
        'w-16',
        'w-20',
        'w-24',
        'w-28',
        'w-32',
        'w-36',
        'w-40',
        'w-44',
        'w-48',
        'w-52',
        'w-56',
        'w-60',
        'w-64',
        'w-72',
        'w-80',
        'w-96',
        'w-auto'
      ]
    >;
    widthOnDesktop: Attribute.Enumeration<
      [
        'w-0.5',
        'w-1',
        'w-1.5',
        'w-2',
        'w-2.5',
        'w-3',
        'w-3.5',
        'w-4',
        'w-5',
        'w-6',
        'w-7',
        'w-8',
        'w-9',
        'w-10',
        'w-11',
        'w-12',
        'w-14',
        'w-16',
        'w-20',
        'w-24',
        'w-28',
        'w-32',
        'w-36',
        'w-40',
        'w-44',
        'w-48',
        'w-52',
        'w-56',
        'w-60',
        'w-64',
        'w-72',
        'w-80',
        'w-96',
        'w-auto'
      ]
    >;
  };
}

export interface ElementsDivideImages extends Schema.Component {
  collectionName: 'components_elements_divide_images';
  info: {
    displayName: 'divide Image';
    icon: 'server';
    description: '';
  };
  attributes: {
    leftImages: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    rightImages: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    borderImageColor: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'yellow-green'>;
    allowViewImage: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    colorTitle: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'white'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.String;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
    description: '';
  };
  attributes: {
    tooltip: Attribute.String;
    icon: Attribute.Media<'images'>;
    borderRadius: Attribute.Enumeration<
      [
        'rounded-none',
        'rounded-sm',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-3xl',
        'rounded-ful'
      ]
    > &
      Attribute.DefaultTo<'rounded-ful'>;
    backgroundColor: Attribute.Enumeration<
      ['yellow-green', 'purple', 'black', 'white']
    > &
      Attribute.DefaultTo<'yellow-green'>;
    title: Attribute.String;
    target: Attribute.Enumeration<
      ['non', '_blank', '_self', '_parent', '_top']
    > &
      Attribute.DefaultTo<'_blank'>;
    color: Attribute.Enumeration<['yellow-green', 'purple', 'black', 'white']> &
      Attribute.DefaultTo<'black'>;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.text-info-section': SectionTextInfoSection;
      'section.swiper-card-section': SectionSwiperCardSection;
      'section.gird-image-section': SectionGirdImageSection;
      'section.divide-image-section': SectionDivideImageSection;
      'elements.link-url': ElementsLinkUrl;
      'elements.grid-image': ElementsGridImage;
      'elements.flex-images': ElementsFlexImages;
      'elements.divide-images': ElementsDivideImages;
      'elements.card': ElementsCard;
      'elements.button': ElementsButton;
    }
  }
}
