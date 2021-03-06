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
 * The ParticipationCode model module.
 * @module model/ParticipationCode
 * @version 1.0.0
 */
export class ParticipationCode {
  /**
   * Constructs a new <code>ParticipationCode</code>.
   * @alias module:model/ParticipationCode
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ParticipationCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ParticipationCode} obj Optional instance to populate.
   * @return {module:model/ParticipationCode} The populated <code>ParticipationCode</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ParticipationCode();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('redemptionDate'))
        obj.redemptionDate = ApiClient.convertToType(data['redemptionDate'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
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
ParticipationCode.prototype.code = undefined;

/**
 * @member {Number} redemptionDate
 */
ParticipationCode.prototype.redemptionDate = undefined;

/**
 * @member {Number} status
 */
ParticipationCode.prototype.status = undefined;

/**
 * @member {Array.<String>} syncFields
 */
ParticipationCode.prototype.syncFields = undefined;

/**
 * @member {Number} id
 */
ParticipationCode.prototype.id = undefined;

/**
 * @member {String} foreignId
 */
ParticipationCode.prototype.foreignId = undefined;

/**
 * @member {Number} language
 */
ParticipationCode.prototype.language = undefined;

/**
 * @member {Number} createDate
 */
ParticipationCode.prototype.createDate = undefined;

/**
 * @member {Number} changeDate
 */
ParticipationCode.prototype.changeDate = undefined;

/**
 * @member {Number} deleted
 */
ParticipationCode.prototype.deleted = undefined;

/**
 * @member {Number} hidden
 */
ParticipationCode.prototype.hidden = undefined;

/**
 * @member {Number} sorting
 */
ParticipationCode.prototype.sorting = undefined;

/**
 * @member {String} tags
 */
ParticipationCode.prototype.tags = undefined;


