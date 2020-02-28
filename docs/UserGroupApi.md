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
> UserGroup usergroupCreate(userGroupPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.UserGroupApi();

const userGroupPost = new SeminarCatalogApi.UserGroup(); // UserGroup | 

apiInstance.usergroupCreate(userGroupPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupPost** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupDelete"></a>
# **usergroupDelete**
> UserGroup usergroupDelete(id)

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

[**UserGroup**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupGet"></a>
# **usergroupGet**
> UserGroup usergroupGet(id)

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

[**UserGroup**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupList"></a>
# **usergroupList**
> UserGroupPaginationResult usergroupList()

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

[**UserGroupPaginationResult**](UserGroupPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="usergroupUpdate"></a>
# **usergroupUpdate**
> UserGroup usergroupUpdate(id, userGroupPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.UserGroupApi();

const id = 56; // Number | The resource identifier

const userGroupPut = new SeminarCatalogApi.UserGroup(); // UserGroup | 

apiInstance.usergroupUpdate(id, userGroupPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **userGroupPut** | [**UserGroup**](UserGroup.md)|  | 

### Return type

[**UserGroup**](UserGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

