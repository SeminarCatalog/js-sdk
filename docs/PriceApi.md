# SeminarCatalogApi.PriceApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**priceCreate**](PriceApi.md#priceCreate) | **POST** /api/price | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**priceDelete**](PriceApi.md#priceDelete) | **DELETE** /api/price/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**priceGet**](PriceApi.md#priceGet) | **GET** /api/price/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**priceList**](PriceApi.md#priceList) | **GET** /api/price | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**priceUpdate**](PriceApi.md#priceUpdate) | **PUT** /api/price/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="priceCreate"></a>
# **priceCreate**
> BookingInterest priceCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PriceApi();
apiInstance.priceCreate().then((data) => {
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

<a name="priceDelete"></a>
# **priceDelete**
> BookingInterest priceDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PriceApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.priceDelete(id).then((data) => {
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

<a name="priceGet"></a>
# **priceGet**
> BookingInterest priceGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PriceApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.priceGet(id).then((data) => {
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

<a name="priceList"></a>
# **priceList**
> BookingInterest priceList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PriceApi();
apiInstance.priceList().then((data) => {
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

<a name="priceUpdate"></a>
# **priceUpdate**
> BookingInterest priceUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PriceApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.priceUpdate(id).then((data) => {
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

