# SeminarCatalogApi.ProviderInfoApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**providerinfoCreate**](ProviderInfoApi.md#providerinfoCreate) | **POST** /api/providerinfo | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**providerinfoDelete**](ProviderInfoApi.md#providerinfoDelete) | **DELETE** /api/providerinfo/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**providerinfoGet**](ProviderInfoApi.md#providerinfoGet) | **GET** /api/providerinfo/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**providerinfoList**](ProviderInfoApi.md#providerinfoList) | **GET** /api/providerinfo | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**providerinfoUpdate**](ProviderInfoApi.md#providerinfoUpdate) | **PUT** /api/providerinfo/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="providerinfoCreate"></a>
# **providerinfoCreate**
> BookingInterest providerinfoCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProviderInfoApi();
apiInstance.providerinfoCreate().then((data) => {
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

<a name="providerinfoDelete"></a>
# **providerinfoDelete**
> BookingInterest providerinfoDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProviderInfoApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.providerinfoDelete(id).then((data) => {
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

<a name="providerinfoGet"></a>
# **providerinfoGet**
> BookingInterest providerinfoGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProviderInfoApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.providerinfoGet(id).then((data) => {
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

<a name="providerinfoList"></a>
# **providerinfoList**
> BookingInterest providerinfoList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProviderInfoApi();
apiInstance.providerinfoList().then((data) => {
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

<a name="providerinfoUpdate"></a>
# **providerinfoUpdate**
> BookingInterest providerinfoUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProviderInfoApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.providerinfoUpdate(id).then((data) => {
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

