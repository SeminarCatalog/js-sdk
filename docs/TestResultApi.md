# SeminarCatalogApi.TestResultApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testresultCreate**](TestResultApi.md#testresultCreate) | **POST** /api/testresult | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**testresultDelete**](TestResultApi.md#testresultDelete) | **DELETE** /api/testresult/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**testresultGet**](TestResultApi.md#testresultGet) | **GET** /api/testresult/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**testresultList**](TestResultApi.md#testresultList) | **GET** /api/testresult | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**testresultUpdate**](TestResultApi.md#testresultUpdate) | **PUT** /api/testresult/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="testresultCreate"></a>
# **testresultCreate**
> TestResult testresultCreate(testResultPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestResultApi();

const testResultPost = new SeminarCatalogApi.TestResult(); // TestResult | 

apiInstance.testresultCreate(testResultPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testResultPost** | [**TestResult**](TestResult.md)|  | 

### Return type

[**TestResult**](TestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testresultDelete"></a>
# **testresultDelete**
> TestResult testresultDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestResultApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.testresultDelete(id).then((data) => {
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

[**TestResult**](TestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testresultGet"></a>
# **testresultGet**
> TestResult testresultGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestResultApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.testresultGet(id).then((data) => {
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

[**TestResult**](TestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testresultList"></a>
# **testresultList**
> TestResultPaginationResult testresultList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestResultApi();
apiInstance.testresultList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TestResultPaginationResult**](TestResultPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="testresultUpdate"></a>
# **testresultUpdate**
> TestResult testresultUpdate(id, testResultPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TestResultApi();

const id = 56; // Number | The resource identifier

const testResultPut = new SeminarCatalogApi.TestResult(); // TestResult | 

apiInstance.testresultUpdate(id, testResultPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **testResultPut** | [**TestResult**](TestResult.md)|  | 

### Return type

[**TestResult**](TestResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

