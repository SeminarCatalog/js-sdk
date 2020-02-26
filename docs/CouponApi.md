# SeminarCatalogApi.CouponApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**couponCreate**](CouponApi.md#couponCreate) | **POST** /api/coupon | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**couponDelete**](CouponApi.md#couponDelete) | **DELETE** /api/coupon/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**couponGet**](CouponApi.md#couponGet) | **GET** /api/coupon/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**couponList**](CouponApi.md#couponList) | **GET** /api/coupon | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**couponUpdate**](CouponApi.md#couponUpdate) | **PUT** /api/coupon/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="couponCreate"></a>
# **couponCreate**
> BookingInterest couponCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponApi();
apiInstance.couponCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponDelete"></a>
# **couponDelete**
> BookingInterest couponDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.couponDelete(id).then((data) => {
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

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponGet"></a>
# **couponGet**
> BookingInterest couponGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.couponGet(id).then((data) => {
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

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponList"></a>
# **couponList**
> BookingInterest couponList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponApi();
apiInstance.couponList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="couponUpdate"></a>
# **couponUpdate**
> BookingInterest couponUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CouponApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.couponUpdate(id).then((data) => {
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

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

