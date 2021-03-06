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
 * The CouponCode model module.
 * @module model/CouponCode
 * @version 1.0.0
 */
export class CouponCode {
  /**
   * Constructs a new <code>CouponCode</code>.
   * @alias module:model/CouponCode
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CouponCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CouponCode} obj Optional instance to populate.
   * @return {module:model/CouponCode} The populated <code>CouponCode</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CouponCode();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('_syncFields'))
        obj.syncFields = ApiClient.convertToType(data['_syncFields'], ['String']);
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
 * @member {String} code
 */
CouponCode.prototype.code = undefined;

/**
 * @member {Array.<String>} syncFields
 */
CouponCode.prototype.syncFields = undefined;

/**
 * @member {Number} id
 */
CouponCode.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
CouponCode.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
CouponCode.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
CouponCode.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
CouponCode.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
CouponCode.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
CouponCode.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
CouponCode.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
CouponCode.prototype.tags = undefined;


