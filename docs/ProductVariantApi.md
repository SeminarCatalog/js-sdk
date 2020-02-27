# SeminarCatalogApi.ProductVariantApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**productvariantCreate**](ProductVariantApi.md#productvariantCreate) | **POST** /api/productvariant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**productvariantDelete**](ProductVariantApi.md#productvariantDelete) | **DELETE** /api/productvariant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**productvariantGet**](ProductVariantApi.md#productvariantGet) | **GET** /api/productvariant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**productvariantList**](ProductVariantApi.md#productvariantList) | **GET** /api/productvariant | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**productvariantUpdate**](ProductVariantApi.md#productvariantUpdate) | **PUT** /api/productvariant/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="productvariantCreate"></a>
# **productvariantCreate**
> ProductVariant productvariantCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProductVariantApi();
apiInstance.productvariantCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProductVariant**](ProductVariant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productvariantDelete"></a>
# **productvariantDelete**
> ProductVariant productvariantDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProductVariantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.productvariantDelete(id).then((data) => {
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

[**ProductVariant**](ProductVariant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productvariantGet"></a>
# **productvariantGet**
> ProductVariant productvariantGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProductVariantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.productvariantGet(id).then((data) => {
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

[**ProductVariant**](ProductVariant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productvariantList"></a>
# **productvariantList**
> ProductVariantPaginationResult productvariantList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProductVariantApi();
apiInstance.productvariantList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ProductVariantPaginationResult**](ProductVariantPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="productvariantUpdate"></a>
# **productvariantUpdate**
> ProductVariant productvariantUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ProductVariantApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.productvariantUpdate(id).then((data) => {
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

[**ProductVariant**](ProductVariant.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

