# SeminarCatalogApi.CountryApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countryCreate**](CountryApi.md#countryCreate) | **POST** /api/country | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**countryDelete**](CountryApi.md#countryDelete) | **DELETE** /api/country/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**countryGet**](CountryApi.md#countryGet) | **GET** /api/country/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**countryList**](CountryApi.md#countryList) | **GET** /api/country | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**countryUpdate**](CountryApi.md#countryUpdate) | **PUT** /api/country/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="countryCreate"></a>
# **countryCreate**
> Country countryCreate()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CountryApi();
apiInstance.countryCreate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="countryDelete"></a>
# **countryDelete**
> Country countryDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CountryApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.countryDelete(id).then((data) => {
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

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="countryGet"></a>
# **countryGet**
> Country countryGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CountryApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.countryGet(id).then((data) => {
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

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="countryList"></a>
# **countryList**
> Country countryList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CountryApi();
apiInstance.countryList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="countryUpdate"></a>
# **countryUpdate**
> Country countryUpdate(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.CountryApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.countryUpdate(id).then((data) => {
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

[**Country**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

