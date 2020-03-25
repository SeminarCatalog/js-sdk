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
 * The Country model module.
 * @module model/Country
 * @version 1.0.0
 */
export class Country {
  /**
   * Constructs a new <code>Country</code>.
   * @alias module:model/Country
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Country} obj Optional instance to populate.
   * @return {module:model/Country} The populated <code>Country</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Country();
      if (data.hasOwnProperty('_syncFields'))
        obj.syncFields = ApiClient.convertToType(data['_syncFields'], ['String']);
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('localName'))
        obj.localName = ApiClient.convertToType(data['localName'], 'String');
      if (data.hasOwnProperty('englishName'))
        obj.englishName = ApiClient.convertToType(data['englishName'], 'String');
      if (data.hasOwnProperty('isEuMember'))
        obj.isEuMember = ApiClient.convertToType(data['isEuMember'], 'String');
      if (data.hasOwnProperty('termsAndConditions'))
        obj.termsAndConditions = ApiClient.convertToType(data['termsAndConditions'], 'String');
      if (data.hasOwnProperty('privacyPolicy'))
        obj.privacyPolicy = ApiClient.convertToType(data['privacyPolicy'], 'String');
      if (data.hasOwnProperty('cancellationInfo'))
        obj.cancellationInfo = ApiClient.convertToType(data['cancellationInfo'], 'String');
      if (data.hasOwnProperty('defaultCountry'))
        obj.defaultCountry = ApiClient.convertToType(data['defaultCountry'], 'Number');
      if (data.hasOwnProperty('isFavorite'))
        obj.isFavorite = ApiClient.convertToType(data['isFavorite'], 'Number');
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
Country.prototype.syncFields = undefined;

/**
 * @member {String} code
 */
Country.prototype.code = undefined;

/**
 * @member {String} name
 */
Country.prototype.name = undefined;

/**
 * @member {String} localName
 */
Country.prototype.localName = undefined;

/**
 * @member {String} englishName
 */
Country.prototype.englishName = undefined;

/**
 * @member {String} isEuMember
 */
Country.prototype.isEuMember = undefined;

/**
 * @member {String} termsAndConditions
 */
Country.prototype.termsAndConditions = undefined;

/**
 * @member {String} privacyPolicy
 */
Country.prototype.privacyPolicy = undefined;

/**
 * @member {String} cancellationInfo
 */
Country.prototype.cancellationInfo = undefined;

/**
 * @member {Number} defaultCountry
 */
Country.prototype.defaultCountry = undefined;

/**
 * @member {Number} isFavorite
 */
Country.prototype.isFavorite = undefined;

/**
 * @member {Number} id
 */
Country.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
Country.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
Country.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
Country.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
Country.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
Country.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
Country.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
Country.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
Country.prototype.tags = undefined;


