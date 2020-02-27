# SeminarCatalogApi.RevenueAccountApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**revenueaccountCreate**](RevenueAccountApi.md#revenueaccountCreate) | **POST** /api/revenueaccount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**revenueaccountDelete**](RevenueAccountApi.md#revenueaccountDelete) | **DELETE** /api/revenueaccount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**revenueaccountGet**](RevenueAccountApi.md#revenueaccountGet) | **GET** /api/revenueaccount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**revenueaccountList**](RevenueAccountApi.md#revenueaccountList) | **GET** /api/revenueaccount | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**revenueaccountUpdate**](RevenueAccountApi.md#revenueaccountUpdate) | **PUT** /api/revenueaccount/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="revenueaccountCreate"></a>
# **revenueaccountCreate**
> RevenueAccount revenueaccountCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RevenueAccountApi();
apiInstance.revenueaccountCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RevenueAccount**](RevenueAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="revenueaccountDelete"></a>
# **revenueaccountDelete**
> RevenueAccount revenueaccountDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RevenueAccountApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.revenueaccountDelete(id).then((data) => {
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

[**RevenueAccount**](RevenueAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="revenueaccountGet"></a>
# **revenueaccountGet**
> RevenueAccount revenueaccountGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RevenueAccountApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.revenueaccountGet(id).then((data) => {
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

[**RevenueAccount**](RevenueAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="revenueaccountList"></a>
# **revenueaccountList**
> RevenueAccountPaginationResult revenueaccountList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RevenueAccountApi();
apiInstance.revenueaccountList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**RevenueAccountPaginationResult**](RevenueAccountPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="revenueaccountUpdate"></a>
# **revenueaccountUpdate**
> RevenueAccount revenueaccountUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.RevenueAccountApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.revenueaccountUpdate(id).then((data) => {
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

[**RevenueAccount**](RevenueAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

