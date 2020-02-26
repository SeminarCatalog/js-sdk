# SeminarCatalogApi.SubscriptionPlanApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionplanCreate**](SubscriptionPlanApi.md#subscriptionplanCreate) | **POST** /api/subscriptionplan | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**subscriptionplanDelete**](SubscriptionPlanApi.md#subscriptionplanDelete) | **DELETE** /api/subscriptionplan/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**subscriptionplanGet**](SubscriptionPlanApi.md#subscriptionplanGet) | **GET** /api/subscriptionplan/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**subscriptionplanList**](SubscriptionPlanApi.md#subscriptionplanList) | **GET** /api/subscriptionplan | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**subscriptionplanUpdate**](SubscriptionPlanApi.md#subscriptionplanUpdate) | **PUT** /api/subscriptionplan/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="subscriptionplanCreate"></a>
# **subscriptionplanCreate**
> BookingInterest subscriptionplanCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionPlanApi();
apiInstance.subscriptionplanCreate().then((data) => {
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

<a name="subscriptionplanDelete"></a>
# **subscriptionplanDelete**
> BookingInterest subscriptionplanDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionPlanApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionplanDelete(id).then((data) => {
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

<a name="subscriptionplanGet"></a>
# **subscriptionplanGet**
> BookingInterest subscriptionplanGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionPlanApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionplanGet(id).then((data) => {
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

<a name="subscriptionplanList"></a>
# **subscriptionplanList**
> BookingInterest subscriptionplanList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionPlanApi();
apiInstance.subscriptionplanList().then((data) => {
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

<a name="subscriptionplanUpdate"></a>
# **subscriptionplanUpdate**
> BookingInterest subscriptionplanUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionPlanApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionplanUpdate(id).then((data) => {
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

