# SeminarCatalogApi.ParticipationCodeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**participationcodeCreate**](ParticipationCodeApi.md#participationcodeCreate) | **POST** /api/participationcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**participationcodeDelete**](ParticipationCodeApi.md#participationcodeDelete) | **DELETE** /api/participationcode/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**participationcodeGet**](ParticipationCodeApi.md#participationcodeGet) | **GET** /api/participationcode/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**participationcodeList**](ParticipationCodeApi.md#participationcodeList) | **GET** /api/participationcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**participationcodeUpdate**](ParticipationCodeApi.md#participationcodeUpdate) | **PUT** /api/participationcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="participationcodeCreate"></a>
# **participationcodeCreate**
> ParticipationCode participationcodeCreate(participationCodePost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();

const participationCodePost = new SeminarCatalogApi.ParticipationCode(); // ParticipationCode | 

apiInstance.participationcodeCreate(participationCodePost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **participationCodePost** | [**ParticipationCode**](ParticipationCode.md)|  | 

### Return type

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeDelete"></a>
# **participationcodeDelete**
> ParticipationCode participationcodeDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.participationcodeDelete(id, lng).then((data) => {
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

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeGet"></a>
# **participationcodeGet**
> ParticipationCode participationcodeGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.participationcodeGet(id, lng).then((data) => {
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

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeList"></a>
# **participationcodeList**
> ParticipationCodePaginationResult participationcodeList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();
apiInstance.participationcodeList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ParticipationCodePaginationResult**](ParticipationCodePaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeUpdate"></a>
# **participationcodeUpdate**
> ParticipationCode participationcodeUpdate(id, participationCodePut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();

const id = 56; // Number | The resource identifier

const participationCodePut = new SeminarCatalogApi.ParticipationCode(); // ParticipationCode | 

apiInstance.participationcodeUpdate(id, participationCodePut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **participationCodePut** | [**ParticipationCode**](ParticipationCode.md)|  | 

### Return type

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

