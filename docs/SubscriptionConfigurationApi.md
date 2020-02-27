# SeminarCatalogApi.SubscriptionConfigurationApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptionconfigurationCreate**](SubscriptionConfigurationApi.md#subscriptionconfigurationCreate) | **POST** /api/subscriptionconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**subscriptionconfigurationDelete**](SubscriptionConfigurationApi.md#subscriptionconfigurationDelete) | **DELETE** /api/subscriptionconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**subscriptionconfigurationGet**](SubscriptionConfigurationApi.md#subscriptionconfigurationGet) | **GET** /api/subscriptionconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**subscriptionconfigurationList**](SubscriptionConfigurationApi.md#subscriptionconfigurationList) | **GET** /api/subscriptionconfiguration | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**subscriptionconfigurationUpdate**](SubscriptionConfigurationApi.md#subscriptionconfigurationUpdate) | **PUT** /api/subscriptionconfiguration/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="subscriptionconfigurationCreate"></a>
# **subscriptionconfigurationCreate**
> SubscriptionConfiguration subscriptionconfigurationCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionConfigurationApi();
apiInstance.subscriptionconfigurationCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SubscriptionConfiguration**](SubscriptionConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionconfigurationDelete"></a>
# **subscriptionconfigurationDelete**
> SubscriptionConfiguration subscriptionconfigurationDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionConfigurationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionconfigurationDelete(id).then((data) => {
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

[**SubscriptionConfiguration**](SubscriptionConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionconfigurationGet"></a>
# **subscriptionconfigurationGet**
> SubscriptionConfiguration subscriptionconfigurationGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionConfigurationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionconfigurationGet(id).then((data) => {
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

[**SubscriptionConfiguration**](SubscriptionConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionconfigurationList"></a>
# **subscriptionconfigurationList**
> SubscriptionConfigurationPaginationResult subscriptionconfigurationList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionConfigurationApi();
apiInstance.subscriptionconfigurationList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SubscriptionConfigurationPaginationResult**](SubscriptionConfigurationPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="subscriptionconfigurationUpdate"></a>
# **subscriptionconfigurationUpdate**
> SubscriptionConfiguration subscriptionconfigurationUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.SubscriptionConfigurationApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.subscriptionconfigurationUpdate(id).then((data) => {
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

[**SubscriptionConfiguration**](SubscriptionConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

