# SeminarCatalogApi.RoleDiscountApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**rolediscountCreate**](RoleDiscountApi.md#rolediscountCreate) | **POST** /api/rolediscount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**rolediscountDelete**](RoleDiscountApi.md#rolediscountDelete) | **DELETE** /api/rolediscount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**rolediscountGet**](RoleDiscountApi.md#rolediscountGet) | **GET** /api/rolediscount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**rolediscountList**](RoleDiscountApi.md#rolediscountList) | **GET** /api/rolediscount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**rolediscountUpdate**](RoleDiscountApi.md#rolediscountUpdate) | **PUT** /api/rolediscount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="rolediscountCreate"></a>
# **rolediscountCreate**
> RoleDiscount rolediscountCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();
apiInstance.rolediscountCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountDelete"></a>
# **rolediscountDelete**
> RoleDiscount rolediscountDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.rolediscountDelete(id).then((data) => {
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

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountGet"></a>
# **rolediscountGet**
> RoleDiscount rolediscountGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.rolediscountGet(id).then((data) => {
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

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountList"></a>
# **rolediscountList**
> RoleDiscount rolediscountList()

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

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="rolediscountUpdate"></a>
# **rolediscountUpdate**
> RoleDiscount rolediscountUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RoleDiscountApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.rolediscountUpdate(id).then((data) => {
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

[**RoleDiscount**](RoleDiscount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

