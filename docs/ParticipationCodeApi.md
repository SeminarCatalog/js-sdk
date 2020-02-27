# SeminarCatalogApi.ParticipationCodeApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**participationcodeCreate**](ParticipationCodeApi.md#participationcodeCreate) | **POST** /api/participationcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**participationcodeDelete**](ParticipationCodeApi.md#participationcodeDelete) | **DELETE** /api/participationcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**participationcodeGet**](ParticipationCodeApi.md#participationcodeGet) | **GET** /api/participationcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**participationcodeList**](ParticipationCodeApi.md#participationcodeList) | **GET** /api/participationcode | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**participationcodeUpdate**](ParticipationCodeApi.md#participationcodeUpdate) | **PUT** /api/participationcode/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="participationcodeCreate"></a>
# **participationcodeCreate**
> ParticipationCode participationcodeCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();
apiInstance.participationcodeCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeDelete"></a>
# **participationcodeDelete**
> ParticipationCode participationcodeDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.participationcodeDelete(id).then((data) => {
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

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeGet"></a>
# **participationcodeGet**
> ParticipationCode participationcodeGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.participationcodeGet(id).then((data) => {
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

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeList"></a>
# **participationcodeList**
> [ParticipationCode] participationcodeList()

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

[**[ParticipationCode]**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="participationcodeUpdate"></a>
# **participationcodeUpdate**
> ParticipationCode participationcodeUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ParticipationCodeApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.participationcodeUpdate(id).then((data) => {
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

[**ParticipationCode**](ParticipationCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

