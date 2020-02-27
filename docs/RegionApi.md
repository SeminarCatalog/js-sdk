# SeminarCatalogApi.RegionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**regionCreate**](RegionApi.md#regionCreate) | **POST** /api/region | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**regionDelete**](RegionApi.md#regionDelete) | **DELETE** /api/region/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**regionGet**](RegionApi.md#regionGet) | **GET** /api/region/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**regionList**](RegionApi.md#regionList) | **GET** /api/region | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**regionUpdate**](RegionApi.md#regionUpdate) | **PUT** /api/region/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="regionCreate"></a>
# **regionCreate**
> Region regionCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RegionApi();
apiInstance.regionCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="regionDelete"></a>
# **regionDelete**
> Region regionDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RegionApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.regionDelete(id).then((data) => {
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

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="regionGet"></a>
# **regionGet**
> Region regionGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RegionApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.regionGet(id).then((data) => {
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

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="regionList"></a>
# **regionList**
> RegionPaginationResult regionList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RegionApi();
apiInstance.regionList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RegionPaginationResult**](RegionPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="regionUpdate"></a>
# **regionUpdate**
> Region regionUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RegionApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.regionUpdate(id).then((data) => {
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

[**Region**](Region.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

