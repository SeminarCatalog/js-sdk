# SeminarCatalogApi.LocationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationCreate**](LocationApi.md#locationCreate) | **POST** /api/location | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**locationDelete**](LocationApi.md#locationDelete) | **DELETE** /api/location/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**locationGet**](LocationApi.md#locationGet) | **GET** /api/location/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**locationList**](LocationApi.md#locationList) | **GET** /api/location | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**locationUpdate**](LocationApi.md#locationUpdate) | **PUT** /api/location/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="locationCreate"></a>
# **locationCreate**
> BookingInterest locationCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LocationApi();
apiInstance.locationCreate().then((data) => {
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

<a name="locationDelete"></a>
# **locationDelete**
> BookingInterest locationDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LocationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.locationDelete(id).then((data) => {
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

<a name="locationGet"></a>
# **locationGet**
> BookingInterest locationGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LocationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.locationGet(id).then((data) => {
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

<a name="locationList"></a>
# **locationList**
> BookingInterest locationList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LocationApi();
apiInstance.locationList().then((data) => {
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

<a name="locationUpdate"></a>
# **locationUpdate**
> BookingInterest locationUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LocationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.locationUpdate(id).then((data) => {
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

