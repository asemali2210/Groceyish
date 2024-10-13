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

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'components.link', false>;
    footerLinkWithIcon: Schema.Attribute.Component<
      'components.link-with-icon',
      true
    >;
    footerColumn: Schema.Attribute.Component<'custom.footer-box', true>;
    developer: Schema.Attribute.Component<'components.link', false>;
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

export interface CustomFooterBox extends Struct.ComponentSchema {
  collectionName: 'components_custom_footer_boxes';
  info: {
    displayName: 'footerBox';
    description: '';
  };
  attributes: {
    boxHeading: Schema.Attribute.String;
    boxItem: Schema.Attribute.Component<'components.link', true>;
  };
}

export interface CustomCategries extends Struct.ComponentSchema {
  collectionName: 'components_custom_categries';
  info: {
    displayName: 'categries';
    description: '';
  };
  attributes: {
    haeading: Schema.Attribute.String;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface ComponentsProducts extends Struct.ComponentSchema {
  collectionName: 'components_components_products';
  info: {
    displayName: 'products';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ComponentsLinkWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_components_link_with_icons';
  info: {
    displayName: 'linkWithIcon';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    icon: Schema.Attribute.String;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'components.link', false>;
    ctaBtn: Schema.Attribute.Component<'components.link', false>;
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
    icon: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.hero-section': LayoutHeroSection;
      'layout.footer': LayoutFooter;
      'layout.featrues-sections': LayoutFeatruesSections;
      'custom.footer-box': CustomFooterBox;
      'custom.categries': CustomCategries;
      'components.products': ComponentsProducts;
      'components.link': ComponentsLink;
      'components.link-with-icon': ComponentsLinkWithIcon;
      'components.header': ComponentsHeader;
      'components.featrue': ComponentsFeatrue;
    }
  }
}
