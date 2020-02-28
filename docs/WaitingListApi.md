# SeminarCatalogApi.WaitingListApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**waitinglistCreate**](WaitingListApi.md#waitinglistCreate) | **POST** /api/waitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**waitinglistDelete**](WaitingListApi.md#waitinglistDelete) | **DELETE** /api/waitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**waitinglistGet**](WaitingListApi.md#waitinglistGet) | **GET** /api/waitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**waitinglistList**](WaitingListApi.md#waitinglistList) | **GET** /api/waitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**waitinglistUpdate**](WaitingListApi.md#waitinglistUpdate) | **PUT** /api/waitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="waitinglistCreate"></a>
# **waitinglistCreate**
> WaitingList waitinglistCreate(waitingListPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.WaitingListApi();

const waitingListPost = new SeminarCatalogApi.WaitingList(); // WaitingList | 

apiInstance.waitinglistCreate(waitingListPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **waitingListPost** | [**WaitingList**](WaitingList.md)|  | 

### Return type

[**WaitingList**](WaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="waitinglistDelete"></a>
# **waitinglistDelete**
> WaitingList waitinglistDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.WaitingListApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.waitinglistDelete(id).then((data) => {
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

[**WaitingList**](WaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="waitinglistGet"></a>
# **waitinglistGet**
> WaitingList waitinglistGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.WaitingListApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.waitinglistGet(id).then((data) => {
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

[**WaitingList**](WaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="waitinglistList"></a>
# **waitinglistList**
> WaitingListPaginationResult waitinglistList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.WaitingListApi();
apiInstance.waitinglistList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**WaitingListPaginationResult**](WaitingListPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="waitinglistUpdate"></a>
# **waitinglistUpdate**
> WaitingList waitinglistUpdate(id, waitingListPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.WaitingListApi();

const id = 56; // Number | The resource identifier

const waitingListPut = new SeminarCatalogApi.WaitingList(); // WaitingList | 

apiInstance.waitinglistUpdate(id, waitingListPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **waitingListPut** | [**WaitingList**](WaitingList.md)|  | 

### Return type

[**WaitingList**](WaitingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

