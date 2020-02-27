# SeminarCatalogApi.EducationHistoryItemApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**educationhistoryitemCreate**](EducationHistoryItemApi.md#educationhistoryitemCreate) | **POST** /api/educationhistoryitem | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**educationhistoryitemDelete**](EducationHistoryItemApi.md#educationhistoryitemDelete) | **DELETE** /api/educationhistoryitem/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**educationhistoryitemGet**](EducationHistoryItemApi.md#educationhistoryitemGet) | **GET** /api/educationhistoryitem/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**educationhistoryitemList**](EducationHistoryItemApi.md#educationhistoryitemList) | **GET** /api/educationhistoryitem | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**educationhistoryitemUpdate**](EducationHistoryItemApi.md#educationhistoryitemUpdate) | **PUT** /api/educationhistoryitem/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="educationhistoryitemCreate"></a>
# **educationhistoryitemCreate**
> EducationHistoryItem educationhistoryitemCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EducationHistoryItemApi();
apiInstance.educationhistoryitemCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EducationHistoryItem**](EducationHistoryItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="educationhistoryitemDelete"></a>
# **educationhistoryitemDelete**
> EducationHistoryItem educationhistoryitemDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EducationHistoryItemApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.educationhistoryitemDelete(id).then((data) => {
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

[**EducationHistoryItem**](EducationHistoryItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="educationhistoryitemGet"></a>
# **educationhistoryitemGet**
> EducationHistoryItem educationhistoryitemGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EducationHistoryItemApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.educationhistoryitemGet(id).then((data) => {
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

[**EducationHistoryItem**](EducationHistoryItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="educationhistoryitemList"></a>
# **educationhistoryitemList**
> [EducationHistoryItem] educationhistoryitemList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EducationHistoryItemApi();
apiInstance.educationhistoryitemList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[EducationHistoryItem]**](EducationHistoryItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="educationhistoryitemUpdate"></a>
# **educationhistoryitemUpdate**
> EducationHistoryItem educationhistoryitemUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.EducationHistoryItemApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.educationhistoryitemUpdate(id).then((data) => {
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

[**EducationHistoryItem**](EducationHistoryItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

