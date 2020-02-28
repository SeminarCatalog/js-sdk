# SeminarCatalogApi.LanguageApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languageCreate**](LanguageApi.md#languageCreate) | **POST** /api/language | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create
[**languageDelete**](LanguageApi.md#languageDelete) | **DELETE** /api/language/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete
[**languageGet**](LanguageApi.md#languageGet) | **GET** /api/language/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get
[**languageList**](LanguageApi.md#languageList) | **GET** /api/language | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list
[**languageUpdate**](LanguageApi.md#languageUpdate) | **PUT** /api/language/{id} | SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update


<a name="languageCreate"></a>
# **languageCreate**
> Language languageCreate(languagePost)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::create

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LanguageApi();

const languagePost = new SeminarCatalogApi.Language(); // Language | 

apiInstance.languageCreate(languagePost).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **languagePost** | [**Language**](Language.md)|  | 

### Return type

[**Language**](Language.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="languageDelete"></a>
# **languageDelete**
> Language languageDelete(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::delete

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LanguageApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.languageDelete(id).then((data) => {
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

[**Language**](Language.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="languageGet"></a>
# **languageGet**
> Language languageGet(id)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::get

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LanguageApi();

const id = 56; // Number | Numeric identifier for this resource

apiInstance.languageGet(id).then((data) => {
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

[**Language**](Language.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="languageList"></a>
# **languageList**
> LanguagePaginationResult languageList()

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::list

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LanguageApi();
apiInstance.languageList().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**LanguagePaginationResult**](LanguagePaginationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="languageUpdate"></a>
# **languageUpdate**
> Language languageUpdate(id, languagePut)

SeminarCatalog\\Rest\\Resources\\Controller\\ResourceController::update

### Example
```javascript
import {SeminarCatalogApi} from 'seminar_catalog_api';

const apiInstance = new SeminarCatalogApi.LanguageApi();

const id = 56; // Number | The resource identifier

const languagePut = new SeminarCatalogApi.Language(); // Language | 

apiInstance.languageUpdate(id, languagePut).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The resource identifier | 
 **languagePut** | [**Language**](Language.md)|  | 

### Return type

[**Language**](Language.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

