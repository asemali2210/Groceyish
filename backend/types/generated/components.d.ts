import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutFeatruesSections extends Struct.ComponentSchema {
  collectionName: 'components_layout_featrues_sections';
  info: {
    displayName: 'Featrues Sections';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    descriptions: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'components.featrue', true>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentsFeatrue extends Struct.ComponentSchema {
  collectionName: 'components_components_featrues';
  info: {
    displayName: 'Featrue';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    icons: Schema.Attribute.Enumeration<
      ['CiBadgeDollar', 'FaTruckArrowRight', 'IoReloadOutline']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.hero-section': LayoutHeroSection;
      'layout.featrues-sections': LayoutFeatruesSections;
      'components.link': ComponentsLink;
      'components.featrue': ComponentsFeatrue;
    }
  }
}
