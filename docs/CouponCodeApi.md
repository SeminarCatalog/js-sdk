# SeminarCatalogApi.CouponCodeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**couponcodeCreate**](CouponCodeApi.md#couponcodeCreate) | **POST** /api/couponcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**couponcodeDelete**](CouponCodeApi.md#couponcodeDelete) | **DELETE** /api/couponcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**couponcodeGet**](CouponCodeApi.md#couponcodeGet) | **GET** /api/couponcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**couponcodeList**](CouponCodeApi.md#couponcodeList) | **GET** /api/couponcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**couponcodeUpdate**](CouponCodeApi.md#couponcodeUpdate) | **PUT** /api/couponcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="couponcodeCreate"></a>
# **couponcodeCreate**
> CouponCode couponcodeCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();
apiInstance.couponcodeCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeDelete"></a>
# **couponcodeDelete**
> CouponCode couponcodeDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.couponcodeDelete(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeGet"></a>
# **couponcodeGet**
> CouponCode couponcodeGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.couponcodeGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeList"></a>
# **couponcodeList**
> CouponCode couponcodeList()

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

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponcodeUpdate"></a>
# **couponcodeUpdate**
> CouponCode couponcodeUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponCodeApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.couponcodeUpdate(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 

### Return type

[**CouponCode**](CouponCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

