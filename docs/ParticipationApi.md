# SeminarCatalogApi.ParticipationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**participationCreate**](ParticipationApi.md#participationCreate) | **POST** /api/participation | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**participationDelete**](ParticipationApi.md#participationDelete) | **DELETE** /api/participation/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**participationGet**](ParticipationApi.md#participationGet) | **GET** /api/participation/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**participationList**](ParticipationApi.md#participationList) | **GET** /api/participation | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**participationUpdate**](ParticipationApi.md#participationUpdate) | **PUT** /api/participation/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="participationCreate"></a>
# **participationCreate**
> Participation participationCreate(participationPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationApi();

const participationPost = new SeminarCatalogApi.Participation(); // Participation | 

apiInstance.participationCreate(participationPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participationPost** | [**Participation**](Participation.md)|  | 

### Return type

[**Participation**](Participation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationDelete"></a>
# **participationDelete**
> Participation participationDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.participationDelete(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**Participation**](Participation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationGet"></a>
# **participationGet**
> Participation participationGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.participationGet(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**Participation**](Participation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationList"></a>
# **participationList**
> ParticipationPaginationResult participationList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationApi();
apiInstance.participationList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ParticipationPaginationResult**](ParticipationPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationUpdate"></a>
# **participationUpdate**
> Participation participationUpdate(id, participationPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationApi();

const id = 56; // Number | The resource identifier

const participationPut = new SeminarCatalogApi.Participation(); // Participation | 

apiInstance.participationUpdate(id, participationPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **participationPut** | [**Participation**](Participation.md)|  | 

### Return type

[**Participation**](Participation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

