# SeminarCatalogApi.ReceiverApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receiverCreate**](ReceiverApi.md#receiverCreate) | **POST** /api/receiver | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**receiverDelete**](ReceiverApi.md#receiverDelete) | **DELETE** /api/receiver/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**receiverGet**](ReceiverApi.md#receiverGet) | **GET** /api/receiver/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**receiverList**](ReceiverApi.md#receiverList) | **GET** /api/receiver | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**receiverUpdate**](ReceiverApi.md#receiverUpdate) | **PUT** /api/receiver/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="receiverCreate"></a>
# **receiverCreate**
> Receiver receiverCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ReceiverApi();
apiInstance.receiverCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Receiver**](Receiver.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="receiverDelete"></a>
# **receiverDelete**
> Receiver receiverDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ReceiverApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.receiverDelete(id).then((data) => {
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

[**Receiver**](Receiver.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="receiverGet"></a>
# **receiverGet**
> Receiver receiverGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ReceiverApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.receiverGet(id).then((data) => {
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

[**Receiver**](Receiver.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="receiverList"></a>
# **receiverList**
> ReceiverPaginationResult receiverList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ReceiverApi();
apiInstance.receiverList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ReceiverPaginationResult**](ReceiverPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="receiverUpdate"></a>
# **receiverUpdate**
> Receiver receiverUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.ReceiverApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.receiverUpdate(id).then((data) => {
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

[**Receiver**](Receiver.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

