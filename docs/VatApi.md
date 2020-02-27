# SeminarCatalogApi.VatApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vatCreate**](VatApi.md#vatCreate) | **POST** /api/vat | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**vatDelete**](VatApi.md#vatDelete) | **DELETE** /api/vat/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**vatGet**](VatApi.md#vatGet) | **GET** /api/vat/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**vatList**](VatApi.md#vatList) | **GET** /api/vat | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**vatUpdate**](VatApi.md#vatUpdate) | **PUT** /api/vat/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="vatCreate"></a>
# **vatCreate**
> Vat vatCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.VatApi();
apiInstance.vatCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Vat**](Vat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="vatDelete"></a>
# **vatDelete**
> Vat vatDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.VatApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.vatDelete(id).then((data) => {
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

[**Vat**](Vat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="vatGet"></a>
# **vatGet**
> Vat vatGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.VatApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.vatGet(id).then((data) => {
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

[**Vat**](Vat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="vatList"></a>
# **vatList**
> VatPaginationResult vatList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.VatApi();
apiInstance.vatList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VatPaginationResult**](VatPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="vatUpdate"></a>
# **vatUpdate**
> Vat vatUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.VatApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.vatUpdate(id).then((data) => {
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

[**Vat**](Vat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

