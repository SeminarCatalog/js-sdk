# SeminarCatalogApi.UserGroupApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usergroupCreate**](UserGroupApi.md#usergroupCreate) | **POST** /api/usergroup | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**usergroupDelete**](UserGroupApi.md#usergroupDelete) | **DELETE** /api/usergroup/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**usergroupGet**](UserGroupApi.md#usergroupGet) | **GET** /api/usergroup/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**usergroupList**](UserGroupApi.md#usergroupList) | **GET** /api/usergroup | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**usergroupUpdate**](UserGroupApi.md#usergroupUpdate) | **PUT** /api/usergroup/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="usergroupCreate"></a>
# **usergroupCreate**
> BookingInterest usergroupCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.UserGroupApi();
apiInstance.usergroupCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupDelete"></a>
# **usergroupDelete**
> BookingInterest usergroupDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.UserGroupApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.usergroupDelete(id).then((data) => {
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

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupGet"></a>
# **usergroupGet**
> BookingInterest usergroupGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.UserGroupApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.usergroupGet(id).then((data) => {
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

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupList"></a>
# **usergroupList**
> BookingInterest usergroupList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.UserGroupApi();
apiInstance.usergroupList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupUpdate"></a>
# **usergroupUpdate**
> BookingInterest usergroupUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.UserGroupApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.usergroupUpdate(id).then((data) => {
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

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

