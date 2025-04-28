import type { Schema, Attribute } from '@strapi/strapi';

export interface DetailsDetails extends Schema.Component {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
    description: '';
  };
  attributes: {
    feature: Attribute.String;
  };
}

export interface SiteComponentAchievements extends Schema.Component {
  collectionName: 'components_site_component_achievements';
  info: {
    displayName: 'achievements';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SiteComponentAttendeeCatagories extends Schema.Component {
  collectionName: 'components_site_component_attendee_catagories';
  info: {
    displayName: 'attendee_catagories';
    description: '';
  };
  attributes: {
    catagory_name: Attribute.String;
    catagory_desc: Attribute.String;
  };
}

export interface SiteComponentCharges extends Schema.Component {
  collectionName: 'components_site_component_charges';
  info: {
    displayName: 'charges';
    description: '';
  };
  attributes: {
    GST_flag: Attribute.Boolean;
    GST_Source: Attribute.Enumeration<['event', 'customer']>;
    GST: Attribute.Float;
    misc_charges: Attribute.Enumeration<['no', 'percent', 'flat']>;
    misc_charges_source: Attribute.Enumeration<['event', 'customer']>;
    misc_percent: Attribute.Float;
    misc_flat: Attribute.Integer;
  };
}

export interface SiteComponentEventCategories extends Schema.Component {
  collectionName: 'components_site_component_event_categories';
  info: {
    displayName: 'event_categories';
    description: '';
  };
  attributes: {
    event_catagory: Attribute.String;
    event_catagory_desc: Attribute.Text;
    price: Attribute.Integer;
    tickets_allowed: Attribute.Integer;
    gpxFile: Attribute.Text;
  };
}

export interface SiteComponentGallery extends Schema.Component {
  collectionName: 'components_site_component_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    description: Attribute.String;
  };
}

export interface SiteComponentGroupNames extends Schema.Component {
  collectionName: 'components_site_component_group_names';
  info: {
    displayName: 'group_names';
    description: '';
  };
  attributes: {};
}

export interface SiteComponentMediaGallary extends Schema.Component {
  collectionName: 'components_site_component_media_gallaries';
  info: {
    displayName: 'media_gallary';
  };
  attributes: {
    description: Attribute.String;
    date: Attribute.Date;
    image: Attribute.Media;
  };
}

export interface SiteComponentOurApproach extends Schema.Component {
  collectionName: 'components_site_component_our_approaches';
  info: {
    displayName: 'our_approach';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    name: Attribute.String;
    image: Attribute.Media;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
  };
}

export interface SiteComponentOurTeam extends Schema.Component {
  collectionName: 'components_site_component_our_teams';
  info: {
    displayName: 'our_team';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
    achivements: Attribute.Text;
  };
}

export interface SiteComponentProducts extends Schema.Component {
  collectionName: 'components_site_component_products';
  info: {
    displayName: 'services';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SiteComponentSport extends Schema.Component {
  collectionName: 'components_site_component_sports';
  info: {
    displayName: 'sport';
    icon: 'shirt';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface SiteComponentTeam extends Schema.Component {
  collectionName: 'components_site_component_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SiteComponentTestimonial extends Schema.Component {
  collectionName: 'components_site_component_testimonials';
  info: {
    displayName: 'testimonial';
    description: '';
  };
  attributes: {
    description: Attribute.String;
    image: Attribute.Media;
    name: Attribute.String;
  };
}

export interface SiteComponentTshirtSizes extends Schema.Component {
  collectionName: 'components_site_component_tshirt_sizes';
  info: {
    displayName: 'tshirt_sizes';
    description: '';
  };
  attributes: {
    size: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'details.details': DetailsDetails;
      'site-component.achievements': SiteComponentAchievements;
      'site-component.attendee-catagories': SiteComponentAttendeeCatagories;
      'site-component.charges': SiteComponentCharges;
      'site-component.event-categories': SiteComponentEventCategories;
      'site-component.gallery': SiteComponentGallery;
      'site-component.group-names': SiteComponentGroupNames;
      'site-component.media-gallary': SiteComponentMediaGallary;
      'site-component.our-approach': SiteComponentOurApproach;
      'site-component.our-team': SiteComponentOurTeam;
      'site-component.products': SiteComponentProducts;
      'site-component.sport': SiteComponentSport;
      'site-component.team': SiteComponentTeam;
      'site-component.testimonial': SiteComponentTestimonial;
      'site-component.tshirt-sizes': SiteComponentTshirtSizes;
    }
  }
}
