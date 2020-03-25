# SeminarCatalogApi.ContactPersonApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactpersonCreate**](ContactPersonApi.md#contactpersonCreate) | **POST** /api/contactperson | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**contactpersonDelete**](ContactPersonApi.md#contactpersonDelete) | **DELETE** /api/contactperson/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**contactpersonGet**](ContactPersonApi.md#contactpersonGet) | **GET** /api/contactperson/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**contactpersonList**](ContactPersonApi.md#contactpersonList) | **GET** /api/contactperson | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**contactpersonUpdate**](ContactPersonApi.md#contactpersonUpdate) | **PUT** /api/contactperson/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="contactpersonCreate"></a>
# **contactpersonCreate**
> ContactPerson contactpersonCreate(contactPersonPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();

const contactPersonPost = new SeminarCatalogApi.ContactPerson(); // ContactPerson | 

apiInstance.contactpersonCreate(contactPersonPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactPersonPost** | [**ContactPerson**](ContactPerson.md)|  | 

### Return type

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonDelete"></a>
# **contactpersonDelete**
> ContactPerson contactpersonDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.contactpersonDelete(id, lng).then((data) => {
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

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonGet"></a>
# **contactpersonGet**
> ContactPerson contactpersonGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.contactpersonGet(id, lng).then((data) => {
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

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonList"></a>
# **contactpersonList**
> ContactPersonPaginationResult contactpersonList()

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

[**ContactPersonPaginationResult**](ContactPersonPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="contactpersonUpdate"></a>
# **contactpersonUpdate**
> ContactPerson contactpersonUpdate(id, contactPersonPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ContactPersonApi();

const id = 56; // Number | The resource identifier

const contactPersonPut = new SeminarCatalogApi.ContactPerson(); // ContactPerson | 

apiInstance.contactpersonUpdate(id, contactPersonPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **contactPersonPut** | [**ContactPerson**](ContactPerson.md)|  | 

### Return type

[**ContactPerson**](ContactPerson.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

