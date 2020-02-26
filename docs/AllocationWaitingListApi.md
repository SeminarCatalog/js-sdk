# SeminarCatalogApi.AllocationWaitingListApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allocationwaitinglistCreate**](AllocationWaitingListApi.md#allocationwaitinglistCreate) | **POST** /api/allocationwaitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**allocationwaitinglistDelete**](AllocationWaitingListApi.md#allocationwaitinglistDelete) | **DELETE** /api/allocationwaitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**allocationwaitinglistGet**](AllocationWaitingListApi.md#allocationwaitinglistGet) | **GET** /api/allocationwaitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**allocationwaitinglistList**](AllocationWaitingListApi.md#allocationwaitinglistList) | **GET** /api/allocationwaitinglist | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**allocationwaitinglistUpdate**](AllocationWaitingListApi.md#allocationwaitinglistUpdate) | **PUT** /api/allocationwaitinglist/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="allocationwaitinglistCreate"></a>
# **allocationwaitinglistCreate**
> BookingInterest allocationwaitinglistCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();
apiInstance.allocationwaitinglistCreate().then((data) => {
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

<a name="allocationwaitinglistDelete"></a>
# **allocationwaitinglistDelete**
> BookingInterest allocationwaitinglistDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.allocationwaitinglistDelete(id).then((data) => {
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

<a name="allocationwaitinglistGet"></a>
# **allocationwaitinglistGet**
> BookingInterest allocationwaitinglistGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.allocationwaitinglistGet(id).then((data) => {
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

<a name="allocationwaitinglistList"></a>
# **allocationwaitinglistList**
> BookingInterest allocationwaitinglistList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();
apiInstance.allocationwaitinglistList().then((data) => {
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

<a name="allocationwaitinglistUpdate"></a>
# **allocationwaitinglistUpdate**
> BookingInterest allocationwaitinglistUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.AllocationWaitingListApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.allocationwaitinglistUpdate(id).then((data) => {
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

