# SeminarCatalogApi.SeminarApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seminarCreate**](SeminarApi.md#seminarCreate) | **POST** /api/seminar | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**seminarDelete**](SeminarApi.md#seminarDelete) | **DELETE** /api/seminar/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**seminarGet**](SeminarApi.md#seminarGet) | **GET** /api/seminar/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**seminarList**](SeminarApi.md#seminarList) | **GET** /api/seminar | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**seminarUpdate**](SeminarApi.md#seminarUpdate) | **PUT** /api/seminar/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="seminarCreate"></a>
# **seminarCreate**
> Seminar seminarCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarApi();
apiInstance.seminarCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Seminar**](Seminar.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarDelete"></a>
# **seminarDelete**
> Seminar seminarDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.seminarDelete(id).then((data) => {
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

[**Seminar**](Seminar.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarGet"></a>
# **seminarGet**
> Seminar seminarGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.seminarGet(id).then((data) => {
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

[**Seminar**](Seminar.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarList"></a>
# **seminarList**
> Seminar seminarList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarApi();
apiInstance.seminarList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Seminar**](Seminar.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarUpdate"></a>
# **seminarUpdate**
> Seminar seminarUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.seminarUpdate(id).then((data) => {
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

[**Seminar**](Seminar.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

