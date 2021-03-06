/*
 * SeminarCatalog API
 * Rest API for SeminarCatalog Administration
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@databay.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 */

import {ApiClient} from '../ApiClient';

/**
 * The Product model module.
 * @module model/Product
 * @version 1.0.0
 */
export class Product {
  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Product();
      if (data.hasOwnProperty('_syncFields'))
        obj.syncFields = ApiClient.convertToType(data['_syncFields'], ['String']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('subtitle'))
        obj.subtitle = ApiClient.convertToType(data['subtitle'], 'String');
      if (data.hasOwnProperty('identifier'))
        obj.identifier = ApiClient.convertToType(data['identifier'], 'String');
      if (data.hasOwnProperty('teaser'))
        obj.teaser = ApiClient.convertToType(data['teaser'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('externalUrl'))
        obj.externalUrl = ApiClient.convertToType(data['externalUrl'], 'String');
      if (data.hasOwnProperty('rolesVisibility'))
        obj.rolesVisibility = ApiClient.convertToType(data['rolesVisibility'], 'String');
      if (data.hasOwnProperty('rolesBooking'))
        obj.rolesBooking = ApiClient.convertToType(data['rolesBooking'], 'String');
      if (data.hasOwnProperty('hideInCatalog'))
        obj.hideInCatalog = ApiClient.convertToType(data['hideInCatalog'], 'Number');
      if (data.hasOwnProperty('costCentre'))
        obj.costCentre = ApiClient.convertToType(data['costCentre'], 'String');
      if (data.hasOwnProperty('payers'))
        obj.payers = ApiClient.convertToType(data['payers'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('foreignId'))
        obj.foreignId = ApiClient.convertToType(data['foreignId'], 'String');
      if (data.hasOwnProperty('language'))
        obj.language = ApiClient.convertToType(data['language'], 'Number');
      if (data.hasOwnProperty('createDate'))
        obj.createDate = ApiClient.convertToType(data['createDate'], 'Number');
      if (data.hasOwnProperty('changeDate'))
        obj.changeDate = ApiClient.convertToType(data['changeDate'], 'Number');
      if (data.hasOwnProperty('deleted'))
        obj.deleted = ApiClient.convertToType(data['deleted'], 'Number');
      if (data.hasOwnProperty('hidden'))
        obj.hidden = ApiClient.convertToType(data['hidden'], 'Number');
      if (data.hasOwnProperty('sorting'))
        obj.sorting = ApiClient.convertToType(data['sorting'], 'Number');
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<String>} syncFields
 */
Product.prototype.syncFields = undefined;

/**
 * @member {String} title
 */
Product.prototype.title = undefined;

/**
 * @member {String} subtitle
 */
Product.prototype.subtitle = undefined;

/**
 * @member {String} identifier
 */
Product.prototype.identifier = undefined;

/**
 * @member {String} teaser
 */
Product.prototype.teaser = undefined;

/**
 * @member {String} description
 */
Product.prototype.description = undefined;

/**
 * @member {String} externalUrl
 */
Product.prototype.externalUrl = undefined;

/**
 * @member {String} rolesVisibility
 */
Product.prototype.rolesVisibility = undefined;

/**
 * @member {String} rolesBooking
 */
Product.prototype.rolesBooking = undefined;

/**
 * @member {Number} hideInCatalog
 */
Product.prototype.hideInCatalog = undefined;

/**
 * @member {String} costCentre
 */
Product.prototype.costCentre = undefined;

/**
 * @member {String} payers
 */
Product.prototype.payers = undefined;

/**
 * @member {Number} id
 */
Product.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
Product.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
Product.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
Product.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
Product.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
Product.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
Product.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
Product.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
Product.prototype.tags = undefined;


