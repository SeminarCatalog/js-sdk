# SeminarCatalogApi.RoleDiscountApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rolediscountCreate**](RoleDiscountApi.md#rolediscountCreate) | **POST** /api/rolediscount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**rolediscountDelete**](RoleDiscountApi.md#rolediscountDelete) | **DELETE** /api/rolediscount/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**rolediscountGet**](RoleDiscountApi.md#rolediscountGet) | **GET** /api/rolediscount/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**rolediscountList**](RoleDiscountApi.md#rolediscountList) | **GET** /api/rolediscount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**rolediscountUpdate**](RoleDiscountApi.md#rolediscountUpdate) | **PUT** /api/rolediscount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="rolediscountCreate"></a>
# **rolediscountCreate**
> RoleDiscount rolediscountCreate(roleDiscountPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();

const roleDiscountPost = new SeminarCatalogApi.RoleDiscount(); // RoleDiscount | 

apiInstance.rolediscountCreate(roleDiscountPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleDiscountPost** | [**RoleDiscount**](RoleDiscount.md)|  | 

### Return type

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountDelete"></a>
# **rolediscountDelete**
> RoleDiscount rolediscountDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.rolediscountDelete(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountGet"></a>
# **rolediscountGet**
> RoleDiscount rolediscountGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.rolediscountGet(id, lng).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Numeric identifier for this resource | 
 **lng** | **Number**| Numeric identifier for this resource | 

### Return type

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountList"></a>
# **rolediscountList**
> RoleDiscountPaginationResult rolediscountList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();
apiInstance.rolediscountList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RoleDiscountPaginationResult**](RoleDiscountPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountUpdate"></a>
# **rolediscountUpdate**
> RoleDiscount rolediscountUpdate(id, roleDiscountPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();

const id = 56; // Number | The resource identifier

const roleDiscountPut = new SeminarCatalogApi.RoleDiscount(); // RoleDiscount | 

apiInstance.rolediscountUpdate(id, roleDiscountPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **roleDiscountPut** | [**RoleDiscount**](RoleDiscount.md)|  | 

### Return type

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

