# SeminarCatalogApi.CategoryApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoryCreate**](CategoryApi.md#categoryCreate) | **POST** /api/category | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**categoryDelete**](CategoryApi.md#categoryDelete) | **DELETE** /api/category/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**categoryGet**](CategoryApi.md#categoryGet) | **GET** /api/category/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**categoryList**](CategoryApi.md#categoryList) | **GET** /api/category | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**categoryUpdate**](CategoryApi.md#categoryUpdate) | **PUT** /api/category/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="categoryCreate"></a>
# **categoryCreate**
> Category categoryCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CategoryApi();
apiInstance.categoryCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryDelete"></a>
# **categoryDelete**
> Category categoryDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CategoryApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.categoryDelete(id).then((data) => {
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

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryGet"></a>
# **categoryGet**
> Category categoryGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CategoryApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.categoryGet(id).then((data) => {
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

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryList"></a>
# **categoryList**
> [Category] categoryList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CategoryApi();
apiInstance.categoryList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Category]**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="categoryUpdate"></a>
# **categoryUpdate**
> Category categoryUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CategoryApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.categoryUpdate(id).then((data) => {
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

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

