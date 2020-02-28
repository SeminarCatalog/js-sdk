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
> Seminar seminarCreate(seminarPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarApi();

const seminarPost = new SeminarCatalogApi.Seminar(); // Seminar | 

apiInstance.seminarCreate(seminarPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seminarPost** | [**Seminar**](Seminar.md)|  | 

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
> SeminarPaginationResult seminarList()

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

[**SeminarPaginationResult**](SeminarPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarUpdate"></a>
# **seminarUpdate**
> Seminar seminarUpdate(id, seminarPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarApi();

const id = 56; // Number | The resource identifier

const seminarPut = new SeminarCatalogApi.Seminar(); // Seminar | 

apiInstance.seminarUpdate(id, seminarPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **seminarPut** | [**Seminar**](Seminar.md)|  | 

### Return type

[**Seminar**](Seminar.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

