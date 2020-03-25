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
import {PaymentMethod} from '../model/PaymentMethod';
import {PaymentMethodPaginationResult} from '../model/PaymentMethodPaginationResult';

/**
* PaymentMethod internal service.
* @module internal/PaymentMethodInternalApi
* @version 1.0.0
* @internal Don't use this class directly. Use the associated class located under the api/ folder.
*/
export class PaymentMethodInternalApi {

    /**
    * Constructs a new PaymentMethodInternalApi. 
    * @alias module:internal/PaymentMethodInternalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/PaymentMethod} paymentMethodPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethod} and HTTP response
     */
    paymentmethodCreateWithHttpInfo(paymentMethodPost) {
      let postBody = paymentMethodPost;

      // verify the required parameter 'paymentMethodPost' is set
      if (paymentMethodPost === undefined || paymentMethodPost === null) {
        throw new Error("Missing the required parameter 'paymentMethodPost' when calling paymentmethodCreate");
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
      let returnType = PaymentMethod;

      return this.apiClient.callApi(
        '/api/paymentmethod', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/PaymentMethod} paymentMethodPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethod}
     */
    paymentmethodCreate(paymentMethodPost) {
      return this.paymentmethodCreateWithHttpInfo(paymentMethodPost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethod} and HTTP response
     */
    paymentmethodDeleteWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling paymentmethodDelete");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling paymentmethodDelete");
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
      let returnType = PaymentMethod;

      return this.apiClient.callApi(
        '/api/paymentmethod/{id}/{lng}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethod}
     */
    paymentmethodDelete(id, lng) {
      return this.paymentmethodDeleteWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethod} and HTTP response
     */
    paymentmethodGetWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling paymentmethodGet");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling paymentmethodGet");
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
      let returnType = PaymentMethod;

      return this.apiClient.callApi(
        '/api/paymentmethod/{id}/{lng}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethod}
     */
    paymentmethodGet(id, lng) {
      return this.paymentmethodGetWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethodPaginationResult} and HTTP response
     */
    paymentmethodListWithHttpInfo() {
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
      let returnType = PaymentMethodPaginationResult;

      return this.apiClient.callApi(
        '/api/paymentmethod', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethodPaginationResult}
     */
    paymentmethodList() {
      return this.paymentmethodListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/PaymentMethod} paymentMethodPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PaymentMethod} and HTTP response
     */
    paymentmethodUpdateWithHttpInfo(id, paymentMethodPut) {
      let postBody = paymentMethodPut;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling paymentmethodUpdate");
      }

      // verify the required parameter 'paymentMethodPut' is set
      if (paymentMethodPut === undefined || paymentMethodPut === null) {
        throw new Error("Missing the required parameter 'paymentMethodPut' when calling paymentmethodUpdate");
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
      let returnType = PaymentMethod;

      return this.apiClient.callApi(
        '/api/paymentmethod/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/PaymentMethod} paymentMethodPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PaymentMethod}
     */
    paymentmethodUpdate(id, paymentMethodPut) {
      return this.paymentmethodUpdateWithHttpInfo(id, paymentMethodPut)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
