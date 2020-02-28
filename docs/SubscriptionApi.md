# SeminarCatalogApi.SubscriptionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionCreate**](SubscriptionApi.md#subscriptionCreate) | **POST** /api/subscription | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**subscriptionDelete**](SubscriptionApi.md#subscriptionDelete) | **DELETE** /api/subscription/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**subscriptionGet**](SubscriptionApi.md#subscriptionGet) | **GET** /api/subscription/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**subscriptionList**](SubscriptionApi.md#subscriptionList) | **GET** /api/subscription | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**subscriptionUpdate**](SubscriptionApi.md#subscriptionUpdate) | **PUT** /api/subscription/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="subscriptionCreate"></a>
# **subscriptionCreate**
> Subscription subscriptionCreate(subscriptionPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionApi();

const subscriptionPost = new SeminarCatalogApi.Subscription(); // Subscription | 

apiInstance.subscriptionCreate(subscriptionPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionPost** | [**Subscription**](Subscription.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionDelete"></a>
# **subscriptionDelete**
> Subscription subscriptionDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionDelete(id).then((data) => {
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

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionGet"></a>
# **subscriptionGet**
> Subscription subscriptionGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionGet(id).then((data) => {
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

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionList"></a>
# **subscriptionList**
> SubscriptionPaginationResult subscriptionList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionApi();
apiInstance.subscriptionList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SubscriptionPaginationResult**](SubscriptionPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionUpdate"></a>
# **subscriptionUpdate**
> Subscription subscriptionUpdate(id, subscriptionPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionApi();

const id = 56; // Number | The resource identifier

const subscriptionPut = new SeminarCatalogApi.Subscription(); // Subscription | 

apiInstance.subscriptionUpdate(id, subscriptionPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **subscriptionPut** | [**Subscription**](Subscription.md)|  | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

