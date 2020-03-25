# SeminarCatalogApi.CouponCodeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**couponcodeCreate**](CouponCodeApi.md#couponcodeCreate) | **POST** /api/couponcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**couponcodeDelete**](CouponCodeApi.md#couponcodeDelete) | **DELETE** /api/couponcode/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**couponcodeGet**](CouponCodeApi.md#couponcodeGet) | **GET** /api/couponcode/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**couponcodeList**](CouponCodeApi.md#couponcodeList) | **GET** /api/couponcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**couponcodeUpdate**](CouponCodeApi.md#couponcodeUpdate) | **PUT** /api/couponcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="couponcodeCreate"></a>
# **couponcodeCreate**
> CouponCode couponcodeCreate(couponCodePost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();

const couponCodePost = new SeminarCatalogApi.CouponCode(); // CouponCode | 

apiInstance.couponcodeCreate(couponCodePost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **couponCodePost** | [**CouponCode**](CouponCode.md)|  | 

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeDelete"></a>
# **couponcodeDelete**
> CouponCode couponcodeDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.couponcodeDelete(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeGet"></a>
# **couponcodeGet**
> CouponCode couponcodeGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.couponcodeGet(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeList"></a>
# **couponcodeList**
> CouponCodePaginationResult couponcodeList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();
apiInstance.couponcodeList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CouponCodePaginationResult**](CouponCodePaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeUpdate"></a>
# **couponcodeUpdate**
> CouponCode couponcodeUpdate(id, couponCodePut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();

const id = 56; // Number | The resource identifier

const couponCodePut = new SeminarCatalogApi.CouponCode(); // CouponCode | 

apiInstance.couponcodeUpdate(id, couponCodePut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **couponCodePut** | [**CouponCode**](CouponCode.md)|  | 

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

