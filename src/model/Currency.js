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
 * The Currency model module.
 * @module model/Currency
 * @version 1.0.0
 */
export class Currency {
  /**
   * Constructs a new <code>Currency</code>.
   * @alias module:model/Currency
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Currency} obj Optional instance to populate.
   * @return {module:model/Currency} The populated <code>Currency</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Currency();
      if (data.hasOwnProperty('_syncFields'))
        obj.syncFields = ApiClient.convertToType(data['_syncFields'], ['String']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('localName'))
        obj.localName = ApiClient.convertToType(data['localName'], 'String');
      if (data.hasOwnProperty('englishName'))
        obj.englishName = ApiClient.convertToType(data['englishName'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('symbolLeft'))
        obj.symbolLeft = ApiClient.convertToType(data['symbolLeft'], 'String');
      if (data.hasOwnProperty('symbolRight'))
        obj.symbolRight = ApiClient.convertToType(data['symbolRight'], 'String');
      if (data.hasOwnProperty('symbolSubLeft'))
        obj.symbolSubLeft = ApiClient.convertToType(data['symbolSubLeft'], 'String');
      if (data.hasOwnProperty('symbolSubRight'))
        obj.symbolSubRight = ApiClient.convertToType(data['symbolSubRight'], 'String');
      if (data.hasOwnProperty('thousandsPoint'))
        obj.thousandsPoint = ApiClient.convertToType(data['thousandsPoint'], 'String');
      if (data.hasOwnProperty('decimalPoint'))
        obj.decimalPoint = ApiClient.convertToType(data['decimalPoint'], 'String');
      if (data.hasOwnProperty('decimalDigits'))
        obj.decimalDigits = ApiClient.convertToType(data['decimalDigits'], 'Number');
      if (data.hasOwnProperty('defaultCurrency'))
        obj.defaultCurrency = ApiClient.convertToType(data['defaultCurrency'], 'Number');
      if (data.hasOwnProperty('exchangeRate'))
        obj.exchangeRate = ApiClient.convertToType(data['exchangeRate'], 'String');
      if (data.hasOwnProperty('exchangeRateDate'))
        obj.exchangeRateDate = ApiClient.convertToType(data['exchangeRateDate'], 'Number');
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
Currency.prototype.syncFields = undefined;

/**
 * @member {String} name
 */
Currency.prototype.name = undefined;

/**
 * @member {String} localName
 */
Currency.prototype.localName = undefined;

/**
 * @member {String} englishName
 */
Currency.prototype.englishName = undefined;

/**
 * @member {String} code
 */
Currency.prototype.code = undefined;

/**
 * @member {String} symbolLeft
 */
Currency.prototype.symbolLeft = undefined;

/**
 * @member {String} symbolRight
 */
Currency.prototype.symbolRight = undefined;

/**
 * @member {String} symbolSubLeft
 */
Currency.prototype.symbolSubLeft = undefined;

/**
 * @member {String} symbolSubRight
 */
Currency.prototype.symbolSubRight = undefined;

/**
 * @member {String} thousandsPoint
 */
Currency.prototype.thousandsPoint = undefined;

/**
 * @member {String} decimalPoint
 */
Currency.prototype.decimalPoint = undefined;

/**
 * @member {Number} decimalDigits
 */
Currency.prototype.decimalDigits = undefined;

/**
 * @member {Number} defaultCurrency
 */
Currency.prototype.defaultCurrency = undefined;

/**
 * @member {String} exchangeRate
 */
Currency.prototype.exchangeRate = undefined;

/**
 * @member {Number} exchangeRateDate
 */
Currency.prototype.exchangeRateDate = undefined;

/**
 * @member {Number} id
 */
Currency.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
Currency.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
Currency.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
Currency.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
Currency.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
Currency.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
Currency.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
Currency.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
Currency.prototype.tags = undefined;


