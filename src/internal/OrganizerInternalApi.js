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
import {Organizer} from '../model/Organizer';
import {OrganizerPaginationResult} from '../model/OrganizerPaginationResult';

/**
* Organizer internal service.
* @module internal/OrganizerInternalApi
* @version 1.0.0
* @internal Don't use this class directly. Use the associated class located under the api/ folder.
*/
export class OrganizerInternalApi {

    /**
    * Constructs a new OrganizerInternalApi. 
    * @alias module:internal/OrganizerInternalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/Organizer} organizerPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organizer} and HTTP response
     */
    organizerCreateWithHttpInfo(organizerPost) {
      let postBody = organizerPost;

      // verify the required parameter 'organizerPost' is set
      if (organizerPost === undefined || organizerPost === null) {
        throw new Error("Missing the required parameter 'organizerPost' when calling organizerCreate");
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
      let returnType = Organizer;

      return this.apiClient.callApi(
        '/api/organizer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/Organizer} organizerPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organizer}
     */
    organizerCreate(organizerPost) {
      return this.organizerCreateWithHttpInfo(organizerPost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organizer} and HTTP response
     */
    organizerDeleteWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organizerDelete");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling organizerDelete");
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
      let returnType = Organizer;

      return this.apiClient.callApi(
        '/api/organizer/{id}/{lng}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organizer}
     */
    organizerDelete(id, lng) {
      return this.organizerDeleteWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organizer} and HTTP response
     */
    organizerGetWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organizerGet");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling organizerGet");
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
      let returnType = Organizer;

      return this.apiClient.callApi(
        '/api/organizer/{id}/{lng}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organizer}
     */
    organizerGet(id, lng) {
      return this.organizerGetWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OrganizerPaginationResult} and HTTP response
     */
    organizerListWithHttpInfo() {
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
      let returnType = OrganizerPaginationResult;

      return this.apiClient.callApi(
        '/api/organizer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OrganizerPaginationResult}
     */
    organizerList() {
      return this.organizerListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/Organizer} organizerPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organizer} and HTTP response
     */
    organizerUpdateWithHttpInfo(id, organizerPut) {
      let postBody = organizerPut;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organizerUpdate");
      }

      // verify the required parameter 'organizerPut' is set
      if (organizerPut === undefined || organizerPut === null) {
        throw new Error("Missing the required parameter 'organizerPut' when calling organizerUpdate");
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
      let returnType = Organizer;

      return this.apiClient.callApi(
        '/api/organizer/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/Organizer} organizerPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organizer}
     */
    organizerUpdate(id, organizerPut) {
      return this.organizerUpdateWithHttpInfo(id, organizerPut)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
