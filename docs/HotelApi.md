# SeminarCatalogApi.HotelApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hotelCreate**](HotelApi.md#hotelCreate) | **POST** /api/hotel | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**hotelDelete**](HotelApi.md#hotelDelete) | **DELETE** /api/hotel/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**hotelGet**](HotelApi.md#hotelGet) | **GET** /api/hotel/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**hotelList**](HotelApi.md#hotelList) | **GET** /api/hotel | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**hotelUpdate**](HotelApi.md#hotelUpdate) | **PUT** /api/hotel/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="hotelCreate"></a>
# **hotelCreate**
> Hotel hotelCreate(hotelPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.HotelApi();

const hotelPost = new SeminarCatalogApi.Hotel(); // Hotel | 

apiInstance.hotelCreate(hotelPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelPost** | [**Hotel**](Hotel.md)|  | 

### Return type

[**Hotel**](Hotel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hotelDelete"></a>
# **hotelDelete**
> Hotel hotelDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.HotelApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.hotelDelete(id).then((data) => {
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

[**Hotel**](Hotel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hotelGet"></a>
# **hotelGet**
> Hotel hotelGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.HotelApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.hotelGet(id).then((data) => {
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

[**Hotel**](Hotel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hotelList"></a>
# **hotelList**
> HotelPaginationResult hotelList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.HotelApi();
apiInstance.hotelList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HotelPaginationResult**](HotelPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="hotelUpdate"></a>
# **hotelUpdate**
> Hotel hotelUpdate(id, hotelPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.HotelApi();

const id = 56; // Number | The resource identifier

const hotelPut = new SeminarCatalogApi.Hotel(); // Hotel | 

apiInstance.hotelUpdate(id, hotelPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **hotelPut** | [**Hotel**](Hotel.md)|  | 

### Return type

[**Hotel**](Hotel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

