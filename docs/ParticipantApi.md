# SeminarCatalogApi.ParticipantApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**participantCreate**](ParticipantApi.md#participantCreate) | **POST** /api/participant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**participantDelete**](ParticipantApi.md#participantDelete) | **DELETE** /api/participant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**participantGet**](ParticipantApi.md#participantGet) | **GET** /api/participant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**participantList**](ParticipantApi.md#participantList) | **GET** /api/participant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**participantUpdate**](ParticipantApi.md#participantUpdate) | **PUT** /api/participant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="participantCreate"></a>
# **participantCreate**
> Participant participantCreate(participantPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipantApi();

const participantPost = new SeminarCatalogApi.Participant(); // Participant | 

apiInstance.participantCreate(participantPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participantPost** | [**Participant**](Participant.md)|  | 

### Return type

[**Participant**](Participant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participantDelete"></a>
# **participantDelete**
> Participant participantDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.participantDelete(id).then((data) => {
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

[**Participant**](Participant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participantGet"></a>
# **participantGet**
> Participant participantGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.participantGet(id).then((data) => {
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

[**Participant**](Participant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participantList"></a>
# **participantList**
> ParticipantPaginationResult participantList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipantApi();
apiInstance.participantList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ParticipantPaginationResult**](ParticipantPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participantUpdate"></a>
# **participantUpdate**
> Participant participantUpdate(id, participantPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipantApi();

const id = 56; // Number | The resource identifier

const participantPut = new SeminarCatalogApi.Participant(); // Participant | 

apiInstance.participantUpdate(id, participantPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **participantPut** | [**Participant**](Participant.md)|  | 

### Return type

[**Participant**](Participant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

