# SeminarCatalogApi.BookingInterestApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bookinginterestCreate**](BookingInterestApi.md#bookinginterestCreate) | **POST** /api/bookinginterest | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**bookinginterestDelete**](BookingInterestApi.md#bookinginterestDelete) | **DELETE** /api/bookinginterest/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**bookinginterestGet**](BookingInterestApi.md#bookinginterestGet) | **GET** /api/bookinginterest/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**bookinginterestList**](BookingInterestApi.md#bookinginterestList) | **GET** /api/bookinginterest | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**bookinginterestUpdate**](BookingInterestApi.md#bookinginterestUpdate) | **PUT** /api/bookinginterest/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="bookinginterestCreate"></a>
# **bookinginterestCreate**
> BookingInterest bookinginterestCreate(bookingInterestPost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.BookingInterestApi();

const bookingInterestPost = new SeminarCatalogApi.BookingInterest(); // BookingInterest | 

apiInstance.bookinginterestCreate(bookingInterestPost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingInterestPost** | [**BookingInterest**](BookingInterest.md)|  | 

### Return type

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bookinginterestDelete"></a>
# **bookinginterestDelete**
> BookingInterest bookinginterestDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.BookingInterestApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.bookinginterestDelete(id).then((data) => {
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

<a name="bookinginterestGet"></a>
# **bookinginterestGet**
> BookingInterest bookinginterestGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.BookingInterestApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.bookinginterestGet(id).then((data) => {
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

<a name="bookinginterestList"></a>
# **bookinginterestList**
> BookingInterestPaginationResult bookinginterestList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.BookingInterestApi();
apiInstance.bookinginterestList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BookingInterestPaginationResult**](BookingInterestPaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="bookinginterestUpdate"></a>
# **bookinginterestUpdate**
> BookingInterest bookinginterestUpdate(id, bookingInterestPut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.BookingInterestApi();

const id = 56; // Number | The resource identifier

const bookingInterestPut = new SeminarCatalogApi.BookingInterest(); // BookingInterest | 

apiInstance.bookinginterestUpdate(id, bookingInterestPut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **bookingInterestPut** | [**BookingInterest**](BookingInterest.md)|  | 

### Return type

[**BookingInterest**](BookingInterest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

