# SeminarCatalogApi.SeminarConfigurationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**seminarconfigurationCreate**](SeminarConfigurationApi.md#seminarconfigurationCreate) | **POST** /api/seminarconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**seminarconfigurationDelete**](SeminarConfigurationApi.md#seminarconfigurationDelete) | **DELETE** /api/seminarconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**seminarconfigurationGet**](SeminarConfigurationApi.md#seminarconfigurationGet) | **GET** /api/seminarconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**seminarconfigurationList**](SeminarConfigurationApi.md#seminarconfigurationList) | **GET** /api/seminarconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**seminarconfigurationUpdate**](SeminarConfigurationApi.md#seminarconfigurationUpdate) | **PUT** /api/seminarconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="seminarconfigurationCreate"></a>
# **seminarconfigurationCreate**
> SeminarConfiguration seminarconfigurationCreate(seminarConfigurationPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarConfigurationApi();

const seminarConfigurationPost = new SeminarCatalogApi.SeminarConfiguration(); // SeminarConfiguration | 

apiInstance.seminarconfigurationCreate(seminarConfigurationPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seminarConfigurationPost** | [**SeminarConfiguration**](SeminarConfiguration.md)|  | 

### Return type

[**SeminarConfiguration**](SeminarConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarconfigurationDelete"></a>
# **seminarconfigurationDelete**
> SeminarConfiguration seminarconfigurationDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarConfigurationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.seminarconfigurationDelete(id).then((data) => {
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

[**SeminarConfiguration**](SeminarConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarconfigurationGet"></a>
# **seminarconfigurationGet**
> SeminarConfiguration seminarconfigurationGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarConfigurationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.seminarconfigurationGet(id).then((data) => {
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

[**SeminarConfiguration**](SeminarConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarconfigurationList"></a>
# **seminarconfigurationList**
> SeminarConfigurationPaginationResult seminarconfigurationList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarConfigurationApi();
apiInstance.seminarconfigurationList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SeminarConfigurationPaginationResult**](SeminarConfigurationPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="seminarconfigurationUpdate"></a>
# **seminarconfigurationUpdate**
> SeminarConfiguration seminarconfigurationUpdate(id, seminarConfigurationPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SeminarConfigurationApi();

const id = 56; // Number | The resource identifier

const seminarConfigurationPut = new SeminarCatalogApi.SeminarConfiguration(); // SeminarConfiguration | 

apiInstance.seminarconfigurationUpdate(id, seminarConfigurationPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **seminarConfigurationPut** | [**SeminarConfiguration**](SeminarConfiguration.md)|  | 

### Return type

[**SeminarConfiguration**](SeminarConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

