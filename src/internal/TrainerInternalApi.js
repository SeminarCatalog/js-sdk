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

import {ApiClient} from "../ApiClient";
import {Trainer} from '../model/Trainer';
import {TrainerPaginationResult} from '../model/TrainerPaginationResult';

/**
* Trainer internal service.
* @module internal/TrainerInternalApi
* @version 1.0.0
* @internal Don't use this class directly. Use the associated class located under the api/ folder.
*/
export class TrainerInternalApi {

    /**
    * Constructs a new TrainerInternalApi. 
    * @alias module:internal/TrainerInternalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/Trainer} trainerPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Trainer} and HTTP response
     */
    trainerCreateWithHttpInfo(trainerPost) {
      let postBody = trainerPost;

      // verify the required parameter 'trainerPost' is set
      if (trainerPost === undefined || trainerPost === null) {
        throw new Error("Missing the required parameter 'trainerPost' when calling trainerCreate");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = Trainer;

      return this.apiClient.callApi(
        '/api/trainer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/Trainer} trainerPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trainer}
     */
    trainerCreate(trainerPost) {
      return this.trainerCreateWithHttpInfo(trainerPost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Trainer} and HTTP response
     */
    trainerDeleteWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainerDelete");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling trainerDelete");
      }


      let pathParams = {
        'id': id,
        'lng': lng
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = Trainer;

      return this.apiClient.callApi(
        '/api/trainer/{id}/{lng}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trainer}
     */
    trainerDelete(id, lng) {
      return this.trainerDeleteWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Trainer} and HTTP response
     */
    trainerGetWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainerGet");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling trainerGet");
      }


      let pathParams = {
        'id': id,
        'lng': lng
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = Trainer;

      return this.apiClient.callApi(
        '/api/trainer/{id}/{lng}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trainer}
     */
    trainerGet(id, lng) {
      return this.trainerGetWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TrainerPaginationResult} and HTTP response
     */
    trainerListWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = TrainerPaginationResult;

      return this.apiClient.callApi(
        '/api/trainer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TrainerPaginationResult}
     */
    trainerList() {
      return this.trainerListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/Trainer} trainerPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Trainer} and HTTP response
     */
    trainerUpdateWithHttpInfo(id, trainerPut) {
      let postBody = trainerPut;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling trainerUpdate");
      }

      // verify the required parameter 'trainerPut' is set
      if (trainerPut === undefined || trainerPut === null) {
        throw new Error("Missing the required parameter 'trainerPut' when calling trainerUpdate");
      }


      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = Trainer;

      return this.apiClient.callApi(
        '/api/trainer/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/Trainer} trainerPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Trainer}
     */
    trainerUpdate(id, trainerPut) {
      return this.trainerUpdateWithHttpInfo(id, trainerPut)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
