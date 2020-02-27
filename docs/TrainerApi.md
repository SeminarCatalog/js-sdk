# SeminarCatalogApi.TrainerApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trainerCreate**](TrainerApi.md#trainerCreate) | **POST** /api/trainer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**trainerDelete**](TrainerApi.md#trainerDelete) | **DELETE** /api/trainer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**trainerGet**](TrainerApi.md#trainerGet) | **GET** /api/trainer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**trainerList**](TrainerApi.md#trainerList) | **GET** /api/trainer | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**trainerUpdate**](TrainerApi.md#trainerUpdate) | **PUT** /api/trainer/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="trainerCreate"></a>
# **trainerCreate**
> Trainer trainerCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TrainerApi();
apiInstance.trainerCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Trainer**](Trainer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainerDelete"></a>
# **trainerDelete**
> Trainer trainerDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TrainerApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.trainerDelete(id).then((data) => {
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

[**Trainer**](Trainer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainerGet"></a>
# **trainerGet**
> Trainer trainerGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TrainerApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.trainerGet(id).then((data) => {
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

[**Trainer**](Trainer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainerList"></a>
# **trainerList**
> Trainer trainerList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TrainerApi();
apiInstance.trainerList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Trainer**](Trainer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="trainerUpdate"></a>
# **trainerUpdate**
> Trainer trainerUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.TrainerApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.trainerUpdate(id).then((data) => {
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

[**Trainer**](Trainer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

