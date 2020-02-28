# SeminarCatalogApi.TaskApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taskCreate**](TaskApi.md#taskCreate) | **POST** /api/task | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**taskDelete**](TaskApi.md#taskDelete) | **DELETE** /api/task/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**taskGet**](TaskApi.md#taskGet) | **GET** /api/task/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**taskList**](TaskApi.md#taskList) | **GET** /api/task | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**taskUpdate**](TaskApi.md#taskUpdate) | **PUT** /api/task/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="taskCreate"></a>
# **taskCreate**
> Task taskCreate(taskPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TaskApi();

const taskPost = new SeminarCatalogApi.Task(); // Task | 

apiInstance.taskCreate(taskPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskPost** | [**Task**](Task.md)|  | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taskDelete"></a>
# **taskDelete**
> Task taskDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TaskApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.taskDelete(id).then((data) => {
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

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taskGet"></a>
# **taskGet**
> Task taskGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TaskApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.taskGet(id).then((data) => {
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

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taskList"></a>
# **taskList**
> TaskPaginationResult taskList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TaskApi();
apiInstance.taskList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TaskPaginationResult**](TaskPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="taskUpdate"></a>
# **taskUpdate**
> Task taskUpdate(id, taskPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TaskApi();

const id = 56; // Number | The resource identifier

const taskPut = new SeminarCatalogApi.Task(); // Task | 

apiInstance.taskUpdate(id, taskPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **taskPut** | [**Task**](Task.md)|  | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

