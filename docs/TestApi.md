# SeminarCatalogApi.TestApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testCreate**](TestApi.md#testCreate) | **POST** /api/test | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**testDelete**](TestApi.md#testDelete) | **DELETE** /api/test/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**testGet**](TestApi.md#testGet) | **GET** /api/test/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**testList**](TestApi.md#testList) | **GET** /api/test | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**testUpdate**](TestApi.md#testUpdate) | **PUT** /api/test/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="testCreate"></a>
# **testCreate**
> Test testCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestApi();
apiInstance.testCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testDelete"></a>
# **testDelete**
> Test testDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.testDelete(id).then((data) => {
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

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testGet"></a>
# **testGet**
> Test testGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.testGet(id).then((data) => {
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

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testList"></a>
# **testList**
> TestPaginationResult testList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestApi();
apiInstance.testList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TestPaginationResult**](TestPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testUpdate"></a>
# **testUpdate**
> Test testUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.testUpdate(id).then((data) => {
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

[**Test**](Test.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

