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
import {Coupon} from '../model/Coupon';
import {CouponPaginationResult} from '../model/CouponPaginationResult';

/**
* Coupon internal service.
* @module internal/CouponInternalApi
* @version 1.0.0
* @internal Don't use this class directly. Use the associated class located under the api/ folder.
*/
export class CouponInternalApi {

    /**
    * Constructs a new CouponInternalApi. 
    * @alias module:internal/CouponInternalApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/Coupon} couponPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */
    couponCreateWithHttpInfo(couponPost) {
      let postBody = couponPost;

      // verify the required parameter 'couponPost' is set
      if (couponPost === undefined || couponPost === null) {
        throw new Error("Missing the required parameter 'couponPost' when calling couponCreate");
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
      let returnType = Coupon;

      return this.apiClient.callApi(
        '/api/coupon', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
     * @param {module:model/Coupon} couponPost 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */
    couponCreate(couponPost) {
      return this.couponCreateWithHttpInfo(couponPost)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */
    couponDeleteWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling couponDelete");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling couponDelete");
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
      let returnType = Coupon;

      return this.apiClient.callApi(
        '/api/coupon/{id}/{lng}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */
    couponDelete(id, lng) {
      return this.couponDeleteWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */
    couponGetWithHttpInfo(id, lng) {
      let postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling couponGet");
      }

      // verify the required parameter 'lng' is set
      if (lng === undefined || lng === null) {
        throw new Error("Missing the required parameter 'lng' when calling couponGet");
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
      let returnType = Coupon;

      return this.apiClient.callApi(
        '/api/coupon/{id}/{lng}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
     * @param {Number} id Numeric identifier for this resource
     * @param {Number} lng Numeric identifier for this resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */
    couponGet(id, lng) {
      return this.couponGetWithHttpInfo(id, lng)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CouponPaginationResult} and HTTP response
     */
    couponListWithHttpInfo() {
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
      let returnType = CouponPaginationResult;

      return this.apiClient.callApi(
        '/api/coupon', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CouponPaginationResult}
     */
    couponList() {
      return this.couponListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/Coupon} couponPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Coupon} and HTTP response
     */
    couponUpdateWithHttpInfo(id, couponPut) {
      let postBody = couponPut;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling couponUpdate");
      }

      // verify the required parameter 'couponPut' is set
      if (couponPut === undefined || couponPut === null) {
        throw new Error("Missing the required parameter 'couponPut' when calling couponUpdate");
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
      let returnType = Coupon;

      return this.apiClient.callApi(
        '/api/coupon/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update
     * @param {Number} id The resource identifier
     * @param {module:model/Coupon} couponPut 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Coupon}
     */
    couponUpdate(id, couponPut) {
      return this.couponUpdateWithHttpInfo(id, couponPut)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
