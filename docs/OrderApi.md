# SeminarCatalogApi.OrderApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderCreate**](OrderApi.md#orderCreate) | **POST** /api/order | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**orderDelete**](OrderApi.md#orderDelete) | **DELETE** /api/order/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**orderGet**](OrderApi.md#orderGet) | **GET** /api/order/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**orderList**](OrderApi.md#orderList) | **GET** /api/order | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**orderUpdate**](OrderApi.md#orderUpdate) | **PUT** /api/order/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="orderCreate"></a>
# **orderCreate**
> BookingInterest orderCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrderApi();
apiInstance.orderCreate().then((data) => {
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

<a name="orderDelete"></a>
# **orderDelete**
> BookingInterest orderDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrderApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.orderDelete(id).then((data) => {
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

<a name="orderGet"></a>
# **orderGet**
> BookingInterest orderGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrderApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.orderGet(id).then((data) => {
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

<a name="orderList"></a>
# **orderList**
> BookingInterest orderList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrderApi();
apiInstance.orderList().then((data) => {
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

<a name="orderUpdate"></a>
# **orderUpdate**
> BookingInterest orderUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.OrderApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.orderUpdate(id).then((data) => {
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

