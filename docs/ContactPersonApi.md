# SeminarCatalogApi.ContactPersonApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactpersonCreate**](ContactPersonApi.md#contactpersonCreate) | **POST** /api/contactperson | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**contactpersonDelete**](ContactPersonApi.md#contactpersonDelete) | **DELETE** /api/contactperson/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**contactpersonGet**](ContactPersonApi.md#contactpersonGet) | **GET** /api/contactperson/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**contactpersonList**](ContactPersonApi.md#contactpersonList) | **GET** /api/contactperson | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**contactpersonUpdate**](ContactPersonApi.md#contactpersonUpdate) | **PUT** /api/contactperson/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="contactpersonCreate"></a>
# **contactpersonCreate**
> ContactPerson contactpersonCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();
apiInstance.contactpersonCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonDelete"></a>
# **contactpersonDelete**
> ContactPerson contactpersonDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.contactpersonDelete(id).then((data) => {
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

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonGet"></a>
# **contactpersonGet**
> ContactPerson contactpersonGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.contactpersonGet(id).then((data) => {
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

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonList"></a>
# **contactpersonList**
> [ContactPerson] contactpersonList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();
apiInstance.contactpersonList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ContactPerson]**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonUpdate"></a>
# **contactpersonUpdate**
> ContactPerson contactpersonUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.contactpersonUpdate(id).then((data) => {
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

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

