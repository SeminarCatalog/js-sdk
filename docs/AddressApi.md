# SeminarCatalogApi.AddressApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addressCreate**](AddressApi.md#addressCreate) | **POST** /api/address | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**addressDelete**](AddressApi.md#addressDelete) | **DELETE** /api/address/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**addressGet**](AddressApi.md#addressGet) | **GET** /api/address/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**addressList**](AddressApi.md#addressList) | **GET** /api/address | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**addressUpdate**](AddressApi.md#addressUpdate) | **PUT** /api/address/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="addressCreate"></a>
# **addressCreate**
> Address addressCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AddressApi();
apiInstance.addressCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressDelete"></a>
# **addressDelete**
> Address addressDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AddressApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.addressDelete(id).then((data) => {
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

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressGet"></a>
# **addressGet**
> Address addressGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AddressApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.addressGet(id).then((data) => {
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

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressList"></a>
# **addressList**
> Address addressList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AddressApi();
apiInstance.addressList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="addressUpdate"></a>
# **addressUpdate**
> Address addressUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AddressApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.addressUpdate(id).then((data) => {
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

[**Address**](Address.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

