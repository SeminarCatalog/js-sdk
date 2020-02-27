# SeminarCatalogApi.MediaApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mediaCreate**](MediaApi.md#mediaCreate) | **POST** /api/media | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**mediaDelete**](MediaApi.md#mediaDelete) | **DELETE** /api/media/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**mediaGet**](MediaApi.md#mediaGet) | **GET** /api/media/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**mediaList**](MediaApi.md#mediaList) | **GET** /api/media | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**mediaUpdate**](MediaApi.md#mediaUpdate) | **PUT** /api/media/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="mediaCreate"></a>
# **mediaCreate**
> Media mediaCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.MediaApi();
apiInstance.mediaCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Media**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="mediaDelete"></a>
# **mediaDelete**
> Media mediaDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.MediaApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.mediaDelete(id).then((data) => {
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

[**Media**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="mediaGet"></a>
# **mediaGet**
> Media mediaGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.MediaApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.mediaGet(id).then((data) => {
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

[**Media**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="mediaList"></a>
# **mediaList**
> [Media] mediaList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.MediaApi();
apiInstance.mediaList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Media]**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="mediaUpdate"></a>
# **mediaUpdate**
> Media mediaUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.MediaApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.mediaUpdate(id).then((data) => {
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

[**Media**](Media.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

