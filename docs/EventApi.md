# SeminarCatalogApi.EventApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventCreate**](EventApi.md#eventCreate) | **POST** /api/event | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**eventDelete**](EventApi.md#eventDelete) | **DELETE** /api/event/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**eventGet**](EventApi.md#eventGet) | **GET** /api/event/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**eventList**](EventApi.md#eventList) | **GET** /api/event | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**eventUpdate**](EventApi.md#eventUpdate) | **PUT** /api/event/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="eventCreate"></a>
# **eventCreate**
> Event eventCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EventApi();
apiInstance.eventCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="eventDelete"></a>
# **eventDelete**
> Event eventDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EventApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.eventDelete(id).then((data) => {
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

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="eventGet"></a>
# **eventGet**
> Event eventGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EventApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.eventGet(id).then((data) => {
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

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="eventList"></a>
# **eventList**
> Event eventList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EventApi();
apiInstance.eventList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="eventUpdate"></a>
# **eventUpdate**
> Event eventUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EventApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.eventUpdate(id).then((data) => {
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

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

