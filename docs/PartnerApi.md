# SeminarCatalogApi.PartnerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**partnerCreate**](PartnerApi.md#partnerCreate) | **POST** /api/partner | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**partnerDelete**](PartnerApi.md#partnerDelete) | **DELETE** /api/partner/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**partnerGet**](PartnerApi.md#partnerGet) | **GET** /api/partner/{id}/{lng} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**partnerList**](PartnerApi.md#partnerList) | **GET** /api/partner | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**partnerUpdate**](PartnerApi.md#partnerUpdate) | **PUT** /api/partner/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="partnerCreate"></a>
# **partnerCreate**
> Partner partnerCreate(partnerPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PartnerApi();

const partnerPost = new SeminarCatalogApi.Partner(); // Partner | 

apiInstance.partnerCreate(partnerPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partnerPost** | [**Partner**](Partner.md)|  | 

### Return type

[**Partner**](Partner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="partnerDelete"></a>
# **partnerDelete**
> Partner partnerDelete(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PartnerApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.partnerDelete(id, lng).then((data) => {
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

[**Partner**](Partner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="partnerGet"></a>
# **partnerGet**
> Partner partnerGet(id, lng)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PartnerApi();

const id = 56; // Number | Numeric identifier for this resource

const lng = 56; // Number | Numeric identifier for this resource

apiInstance.partnerGet(id, lng).then((data) => {
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

[**Partner**](Partner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="partnerList"></a>
# **partnerList**
> PartnerPaginationResult partnerList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PartnerApi();
apiInstance.partnerList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PartnerPaginationResult**](PartnerPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="partnerUpdate"></a>
# **partnerUpdate**
> Partner partnerUpdate(id, partnerPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PartnerApi();

const id = 56; // Number | The resource identifier

const partnerPut = new SeminarCatalogApi.Partner(); // Partner | 

apiInstance.partnerUpdate(id, partnerPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **partnerPut** | [**Partner**](Partner.md)|  | 

### Return type

[**Partner**](Partner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

