# SeminarCatalogApi.PaymentMethodApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentmethodCreate**](PaymentMethodApi.md#paymentmethodCreate) | **POST** /api/paymentmethod | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**paymentmethodDelete**](PaymentMethodApi.md#paymentmethodDelete) | **DELETE** /api/paymentmethod/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**paymentmethodGet**](PaymentMethodApi.md#paymentmethodGet) | **GET** /api/paymentmethod/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**paymentmethodList**](PaymentMethodApi.md#paymentmethodList) | **GET** /api/paymentmethod | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**paymentmethodUpdate**](PaymentMethodApi.md#paymentmethodUpdate) | **PUT** /api/paymentmethod/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="paymentmethodCreate"></a>
# **paymentmethodCreate**
> PaymentMethod paymentmethodCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PaymentMethodApi();
apiInstance.paymentmethodCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentmethodDelete"></a>
# **paymentmethodDelete**
> PaymentMethod paymentmethodDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PaymentMethodApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.paymentmethodDelete(id).then((data) => {
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

[**PaymentMethod**](PaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentmethodGet"></a>
# **paymentmethodGet**
> PaymentMethod paymentmethodGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PaymentMethodApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.paymentmethodGet(id).then((data) => {
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

[**PaymentMethod**](PaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentmethodList"></a>
# **paymentmethodList**
> PaymentMethod paymentmethodList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PaymentMethodApi();
apiInstance.paymentmethodList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="paymentmethodUpdate"></a>
# **paymentmethodUpdate**
> PaymentMethod paymentmethodUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.PaymentMethodApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.paymentmethodUpdate(id).then((data) => {
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

[**PaymentMethod**](PaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

