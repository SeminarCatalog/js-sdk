# SeminarCatalogApi.CertificateApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificateCreate**](CertificateApi.md#certificateCreate) | **POST** /api/certificate | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**certificateDelete**](CertificateApi.md#certificateDelete) | **DELETE** /api/certificate/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**certificateGet**](CertificateApi.md#certificateGet) | **GET** /api/certificate/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**certificateList**](CertificateApi.md#certificateList) | **GET** /api/certificate | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**certificateUpdate**](CertificateApi.md#certificateUpdate) | **PUT** /api/certificate/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="certificateCreate"></a>
# **certificateCreate**
> Certificate certificateCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CertificateApi();
apiInstance.certificateCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Certificate**](Certificate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="certificateDelete"></a>
# **certificateDelete**
> Certificate certificateDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CertificateApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.certificateDelete(id).then((data) => {
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

[**Certificate**](Certificate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="certificateGet"></a>
# **certificateGet**
> Certificate certificateGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CertificateApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.certificateGet(id).then((data) => {
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

[**Certificate**](Certificate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="certificateList"></a>
# **certificateList**
> [Certificate] certificateList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CertificateApi();
apiInstance.certificateList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Certificate]**](Certificate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="certificateUpdate"></a>
# **certificateUpdate**
> Certificate certificateUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CertificateApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.certificateUpdate(id).then((data) => {
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

[**Certificate**](Certificate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

