# SeminarCatalogApi.CurrencyApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currencyCreate**](CurrencyApi.md#currencyCreate) | **POST** /api/currency | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**currencyDelete**](CurrencyApi.md#currencyDelete) | **DELETE** /api/currency/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**currencyGet**](CurrencyApi.md#currencyGet) | **GET** /api/currency/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**currencyList**](CurrencyApi.md#currencyList) | **GET** /api/currency | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**currencyUpdate**](CurrencyApi.md#currencyUpdate) | **PUT** /api/currency/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="currencyCreate"></a>
# **currencyCreate**
> BookingInterest currencyCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CurrencyApi();
apiInstance.currencyCreate().then((data) => {
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

<a name="currencyDelete"></a>
# **currencyDelete**
> BookingInterest currencyDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CurrencyApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.currencyDelete(id).then((data) => {
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

<a name="currencyGet"></a>
# **currencyGet**
> BookingInterest currencyGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CurrencyApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.currencyGet(id).then((data) => {
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

<a name="currencyList"></a>
# **currencyList**
> BookingInterest currencyList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CurrencyApi();
apiInstance.currencyList().then((data) => {
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

<a name="currencyUpdate"></a>
# **currencyUpdate**
> BookingInterest currencyUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CurrencyApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.currencyUpdate(id).then((data) => {
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

