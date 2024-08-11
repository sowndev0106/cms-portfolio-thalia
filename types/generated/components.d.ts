import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionHomepageGirdImages extends Schema.Component {
  collectionName: 'components_section_homepage_gird_images';
  info: {
    displayName: 'gird-images';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    horizontalImages: Attribute.Component<'common.horizontal-images', true>;
  };
}

export interface SectionGirdImagesSectionGirdImages extends Schema.Component {
  collectionName: 'components_section_gird_images_section_gird_images';
  info: {
    displayName: 'section-gird-images';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface CommonImageProperties extends Schema.Component {
  collectionName: 'components_common_image_properties';
  info: {
    displayName: 'image-properties';
  };
  attributes: {
    borderColor: Attribute.String;
    borderRadiusTopLeft: Attribute.Integer;
    borderRadiusTopRight: Attribute.Integer;
    borderRadiusBottomRight: Attribute.Integer;
    borderRadiusBottomLeft: Attribute.Integer;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonHorizontalImages extends Schema.Component {
  collectionName: 'components_common_horizontal_images';
  info: {
    displayName: 'horizontalImages';
    description: '';
  };
  attributes: {
    leftImages: Attribute.Component<'common.image-properties', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section-homepage.gird-images': SectionHomepageGirdImages;
      'section-gird-images.section-gird-images': SectionGirdImagesSectionGirdImages;
      'common.image-properties': CommonImageProperties;
      'common.horizontal-images': CommonHorizontalImages;
    }
  }
}
