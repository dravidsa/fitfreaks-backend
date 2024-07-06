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
  };
  attributes: {
    event_catagory: Attribute.String;
    event_catagory_desc: Attribute.String;
    price: Attribute.Integer;
    tickets_allowed: Attribute.Integer;
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

export interface SiteComponentProducts extends Schema.Component {
  collectionName: 'components_site_component_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
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
      'site-component.attendee-catagories': SiteComponentAttendeeCatagories;
      'site-component.charges': SiteComponentCharges;
      'site-component.event-categories': SiteComponentEventCategories;
      'site-component.group-names': SiteComponentGroupNames;
      'site-component.products': SiteComponentProducts;
      'site-component.sport': SiteComponentSport;
      'site-component.team': SiteComponentTeam;
      'site-component.testimonial': SiteComponentTestimonial;
      'site-component.tshirt-sizes': SiteComponentTshirtSizes;
    }
  }
}
