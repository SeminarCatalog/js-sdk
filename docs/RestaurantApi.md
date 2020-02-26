# SeminarCatalogApi.RestaurantApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restaurantCreate**](RestaurantApi.md#restaurantCreate) | **POST** /api/restaurant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**restaurantDelete**](RestaurantApi.md#restaurantDelete) | **DELETE** /api/restaurant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**restaurantGet**](RestaurantApi.md#restaurantGet) | **GET** /api/restaurant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**restaurantList**](RestaurantApi.md#restaurantList) | **GET** /api/restaurant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**restaurantUpdate**](RestaurantApi.md#restaurantUpdate) | **PUT** /api/restaurant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="restaurantCreate"></a>
# **restaurantCreate**
> BookingInterest restaurantCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RestaurantApi();
apiInstance.restaurantCreate().then((data) => {
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

<a name="restaurantDelete"></a>
# **restaurantDelete**
> BookingInterest restaurantDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RestaurantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.restaurantDelete(id).then((data) => {
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

<a name="restaurantGet"></a>
# **restaurantGet**
> BookingInterest restaurantGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RestaurantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.restaurantGet(id).then((data) => {
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

<a name="restaurantList"></a>
# **restaurantList**
> BookingInterest restaurantList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RestaurantApi();
apiInstance.restaurantList().then((data) => {
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

<a name="restaurantUpdate"></a>
# **restaurantUpdate**
> BookingInterest restaurantUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RestaurantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.restaurantUpdate(id).then((data) => {
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

